// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BaseRequestPolicy,
  RequestPolicy,
  RequestPolicyOptions,
  RequestPolicyFactory
} from "./requestPolicy";
import { WebResourceLike } from "../webResource";
import { HttpOperationResponse } from "../httpOperationResponse";
import { Constants } from "../util/constants";
import { delay } from "../util/delay";
import { AbortError } from "@azure/abort-controller";

type ResponseHandler = (
  httpRequest: WebResourceLike,
  response: HttpOperationResponse
) => Promise<HttpOperationResponse>;
const StatusCodes = Constants.HttpConstants.StatusCodes;

export function throttlingRetryPolicy(): RequestPolicyFactory {
  return {
    create: (nextPolicy: RequestPolicy, options: RequestPolicyOptions) => {
      return new ThrottlingRetryPolicy(nextPolicy, options);
    }
  };
}

const StandardAbortMessage = "The operation was aborted.";

/**
 * To learn more, please refer to
 * https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-request-limits,
 * https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits and
 * https://docs.microsoft.com/en-us/azure/virtual-machines/troubleshooting/troubleshooting-throttling-errors
 */
export class ThrottlingRetryPolicy extends BaseRequestPolicy {
  private _handleResponse: ResponseHandler;

  constructor(
    nextPolicy: RequestPolicy,
    options: RequestPolicyOptions,
    _handleResponse?: ResponseHandler
  ) {
    super(nextPolicy, options);
    this._handleResponse = _handleResponse || this._defaultResponseHandler;
  }

  public async sendRequest(httpRequest: WebResourceLike): Promise<HttpOperationResponse> {
    return this._nextPolicy.sendRequest(httpRequest.clone()).then((response) => {
      if (response.status !== StatusCodes.TooManyRequests) {
        return response;
      } else {
        return this._handleResponse(httpRequest, response);
      }
    });
  }

  private async _defaultResponseHandler(
    httpRequest: WebResourceLike,
    httpResponse: HttpOperationResponse
  ): Promise<HttpOperationResponse> {
    const retryAfterHeader: string | undefined = httpResponse.headers.get(
      Constants.HeaderConstants.RETRY_AFTER
    );

    if (retryAfterHeader) {
      const delayInMs: number | undefined = ThrottlingRetryPolicy.parseRetryAfterHeader(
        retryAfterHeader
      );
      if (delayInMs) {
        await delay(delayInMs, undefined, {
          abortSignal: httpRequest.abortSignal,
          abortErrorMsg: StandardAbortMessage
        });
        if (httpRequest.abortSignal?.aborted) {
          throw new AbortError(StandardAbortMessage);
        }
        return this._nextPolicy.sendRequest(httpRequest);
      }
    }

    return httpResponse;
  }

  public static parseRetryAfterHeader(headerValue: string): number | undefined {
    const retryAfterInSeconds = Number(headerValue);
    if (Number.isNaN(retryAfterInSeconds)) {
      return ThrottlingRetryPolicy.parseDateRetryAfterHeader(headerValue);
    } else {
      return retryAfterInSeconds * 1000;
    }
  }

  public static parseDateRetryAfterHeader(headerValue: string): number | undefined {
    try {
      const now: number = Date.now();
      const date: number = Date.parse(headerValue);
      const diff = date - now;

      return Number.isNaN(diff) ? undefined : diff;
    } catch (error) {
      return undefined;
    }
  }
}
