import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { ComputeManagementClientOptionalParams } from "./models";

export class ComputeManagementClientContext extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the ComputeManagementClientContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ComputeManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ComputeManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
  }
}
