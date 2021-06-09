import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SshPublicKeys } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import {
  SshPublicKeyResource,
  SshPublicKeysListBySubscriptionNextOptionalParams,
  SshPublicKeysListBySubscriptionOptionalParams,
  SshPublicKeysListByResourceGroupNextOptionalParams,
  SshPublicKeysListByResourceGroupOptionalParams,
  SshPublicKeysListBySubscriptionResponse,
  SshPublicKeysListByResourceGroupResponse,
  SshPublicKeysCreateOptionalParams,
  SshPublicKeysCreateResponse,
  SshPublicKeyUpdateResource,
  SshPublicKeysUpdateOptionalParams,
  SshPublicKeysUpdateResponse,
  SshPublicKeysDeleteOptionalParams,
  SshPublicKeysGetOptionalParams,
  SshPublicKeysGetResponse,
  SshPublicKeysGenerateKeyPairOptionalParams,
  SshPublicKeysGenerateKeyPairResponse,
  SshPublicKeysListBySubscriptionNextResponse,
  SshPublicKeysListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a SshPublicKeys. */
export class SshPublicKeysImpl implements SshPublicKeys {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class SshPublicKeys class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the SSH public keys in the subscription. Use the nextLink property in the response to
   * get the next page of SSH public keys.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: SshPublicKeysListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SshPublicKeyResource> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: SshPublicKeysListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SshPublicKeyResource[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: SshPublicKeysListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SshPublicKeyResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the SSH public keys in the specified resource group. Use the nextLink property in the
   * response to get the next page of SSH public keys.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: SshPublicKeysListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SshPublicKeyResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: SshPublicKeysListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SshPublicKeyResource[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: SshPublicKeysListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SshPublicKeyResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the SSH public keys in the subscription. Use the nextLink property in the response to
   * get the next page of SSH public keys.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: SshPublicKeysListBySubscriptionOptionalParams
  ): Promise<SshPublicKeysListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists all of the SSH public keys in the specified resource group. Use the nextLink property in the
   * response to get the next page of SSH public keys.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: SshPublicKeysListByResourceGroupOptionalParams
  ): Promise<SshPublicKeysListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Creates a new SSH public key resource.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param parameters Parameters supplied to create the SSH public key.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    sshPublicKeyName: string,
    parameters: SshPublicKeyResource,
    options?: SshPublicKeysCreateOptionalParams
  ): Promise<SshPublicKeysCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sshPublicKeyName, parameters, options },
      createOperationSpec
    );
  }

  /**
   * Updates a new SSH public key resource.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param parameters Parameters supplied to update the SSH public key.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    sshPublicKeyName: string,
    parameters: SshPublicKeyUpdateResource,
    options?: SshPublicKeysUpdateOptionalParams
  ): Promise<SshPublicKeysUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sshPublicKeyName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Delete an SSH public key.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    sshPublicKeyName: string,
    options?: SshPublicKeysDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sshPublicKeyName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves information about an SSH public key.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sshPublicKeyName: string,
    options?: SshPublicKeysGetOptionalParams
  ): Promise<SshPublicKeysGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sshPublicKeyName, options },
      getOperationSpec
    );
  }

  /**
   * Generates and returns a public/private key pair and populates the SSH public key resource with the
   * public key. The length of the key will be 3072 bits. This operation can only be performed once per
   * SSH public key resource.
   * @param resourceGroupName The name of the resource group.
   * @param sshPublicKeyName The name of the SSH public key.
   * @param options The options parameters.
   */
  generateKeyPair(
    resourceGroupName: string,
    sshPublicKeyName: string,
    options?: SshPublicKeysGenerateKeyPairOptionalParams
  ): Promise<SshPublicKeysGenerateKeyPairResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sshPublicKeyName, options },
      generateKeyPairOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: SshPublicKeysListBySubscriptionNextOptionalParams
  ): Promise<SshPublicKeysListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: SshPublicKeysListByResourceGroupNextOptionalParams
  ): Promise<SshPublicKeysListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/sshPublicKeys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SshPublicKeysGroupListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SshPublicKeysGroupListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SshPublicKeyResource
    },
    201: {
      bodyMapper: Mappers.SshPublicKeyResource
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sshPublicKeyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SshPublicKeyResource
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sshPublicKeyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sshPublicKeyName
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SshPublicKeyResource
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sshPublicKeyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const generateKeyPairOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{sshPublicKeyName}/generateKeyPair",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SshPublicKeyGenerateKeyPairResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sshPublicKeyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SshPublicKeysGroupListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SshPublicKeysGroupListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
