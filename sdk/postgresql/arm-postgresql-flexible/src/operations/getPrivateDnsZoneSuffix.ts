/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/getPrivateDnsZoneSuffixMappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLManagementClientContext } from "../postgreSQLManagementClientContext";

/** Class representing a GetPrivateDnsZoneSuffix. */
export class GetPrivateDnsZoneSuffix {
  private readonly client: PostgreSQLManagementClientContext;

  /**
   * Create a GetPrivateDnsZoneSuffix.
   * @param {PostgreSQLManagementClientContext} client Reference to the service client.
   */
  constructor(client: PostgreSQLManagementClientContext) {
    this.client = client;
  }

  /**
   * Get private DNS zone suffix in the cloud
   * @param body The required parameters for getting private DNS zone suffix based on server type.
   * Possible values include: 'PostgreSQL', 'PostgreSQLCitus', 'MySQL', 'MariaDb', 'Oracle'
   * @param [options] The optional parameters
   * @returns Promise<Models.GetPrivateDnsZoneSuffixExecuteResponse>
   */
  execute(body: Models.Body, options?: msRest.RequestOptionsBase): Promise<Models.GetPrivateDnsZoneSuffixExecuteResponse>;
  /**
   * @param body The required parameters for getting private DNS zone suffix based on server type.
   * Possible values include: 'PostgreSQL', 'PostgreSQLCitus', 'MySQL', 'MariaDb', 'Oracle'
   * @param callback The callback
   */
  execute(body: Models.Body, callback: msRest.ServiceCallback<string>): void;
  /**
   * @param body The required parameters for getting private DNS zone suffix based on server type.
   * Possible values include: 'PostgreSQL', 'PostgreSQLCitus', 'MySQL', 'MariaDb', 'Oracle'
   * @param options The optional parameters
   * @param callback The callback
   */
  execute(body: Models.Body, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  execute(body: Models.Body, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.GetPrivateDnsZoneSuffixExecuteResponse> {
    return this.client.sendOperationRequest(
      {
        body,
        options
      },
      executeOperationSpec,
      callback) as Promise<Models.GetPrivateDnsZoneSuffixExecuteResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const executeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DBForPostgreSql/getPrivateDnsZoneSuffix",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      required: true,
      serializedName: "body",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
