import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CloudServiceRoleInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RoleInstance,
  CloudServiceRoleInstancesListNextOptionalParams,
  CloudServiceRoleInstancesListOptionalParams,
  CloudServiceRoleInstancesDeleteOptionalParams,
  CloudServiceRoleInstancesGetOptionalParams,
  CloudServiceRoleInstancesGetResponse,
  CloudServiceRoleInstancesGetInstanceViewOptionalParams,
  CloudServiceRoleInstancesGetInstanceViewResponse,
  CloudServiceRoleInstancesListResponse,
  CloudServiceRoleInstancesRestartOptionalParams,
  CloudServiceRoleInstancesReimageOptionalParams,
  CloudServiceRoleInstancesRebuildOptionalParams,
  CloudServiceRoleInstancesGetRemoteDesktopFileOptionalParams,
  CloudServiceRoleInstancesGetRemoteDesktopFileResponse,
  CloudServiceRoleInstancesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a CloudServiceRoleInstances. */
export class CloudServiceRoleInstancesImpl
  implements CloudServiceRoleInstances {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class CloudServiceRoleInstances class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of all role instances in a cloud service. Use nextLink property in the response to get
   * the next page of role instances. Do this till nextLink is null to fetch all the role instances.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesListOptionalParams
  ): PagedAsyncIterableIterator<RoleInstance> {
    const iter = this.listPagingAll(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          cloudServiceName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesListOptionalParams
  ): AsyncIterableIterator<RoleInstance[]> {
    let result = await this._list(resourceGroupName, cloudServiceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        cloudServiceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesListOptionalParams
  ): AsyncIterableIterator<RoleInstance> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      cloudServiceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes a role instance from a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  async beginDelete(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { roleInstanceName, resourceGroupName, cloudServiceName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a role instance from a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      roleInstanceName,
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a role instance from a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  get(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesGetOptionalParams
  ): Promise<CloudServiceRoleInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { roleInstanceName, resourceGroupName, cloudServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Retrieves information about the run-time state of a role instance in a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  getInstanceView(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesGetInstanceViewOptionalParams
  ): Promise<CloudServiceRoleInstancesGetInstanceViewResponse> {
    return this.client.sendOperationRequest(
      { roleInstanceName, resourceGroupName, cloudServiceName, options },
      getInstanceViewOperationSpec
    );
  }

  /**
   * Gets the list of all role instances in a cloud service. Use nextLink property in the response to get
   * the next page of role instances. Do this till nextLink is null to fetch all the role instances.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesListOptionalParams
  ): Promise<CloudServiceRoleInstancesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, options },
      listOperationSpec
    );
  }

  /**
   * The Reboot Role Instance asynchronous operation requests a reboot of a role instance in the cloud
   * service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  async beginRestart(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesRestartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { roleInstanceName, resourceGroupName, cloudServiceName, options },
      restartOperationSpec,
      sendOperation
    );
  }

  /**
   * The Reboot Role Instance asynchronous operation requests a reboot of a role instance in the cloud
   * service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesRestartOptionalParams
  ): Promise<void> {
    const poller = await this.beginRestart(
      roleInstanceName,
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The Reimage Role Instance asynchronous operation reinstalls the operating system on instances of web
   * roles or worker roles.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  async beginReimage(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesReimageOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { roleInstanceName, resourceGroupName, cloudServiceName, options },
      reimageOperationSpec,
      sendOperation
    );
  }

  /**
   * The Reimage Role Instance asynchronous operation reinstalls the operating system on instances of web
   * roles or worker roles.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  async beginReimageAndWait(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesReimageOptionalParams
  ): Promise<void> {
    const poller = await this.beginReimage(
      roleInstanceName,
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The Rebuild Role Instance asynchronous operation reinstalls the operating system on instances of web
   * roles or worker roles and initializes the storage resources that are used by them. If you do not
   * want to initialize storage resources, you can use Reimage Role Instance.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  async beginRebuild(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesRebuildOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { roleInstanceName, resourceGroupName, cloudServiceName, options },
      rebuildOperationSpec,
      sendOperation
    );
  }

  /**
   * The Rebuild Role Instance asynchronous operation reinstalls the operating system on instances of web
   * roles or worker roles and initializes the storage resources that are used by them. If you do not
   * want to initialize storage resources, you can use Reimage Role Instance.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  async beginRebuildAndWait(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesRebuildOptionalParams
  ): Promise<void> {
    const poller = await this.beginRebuild(
      roleInstanceName,
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a remote desktop file for a role instance in a cloud service.
   * @param roleInstanceName Name of the role instance.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  getRemoteDesktopFile(
    roleInstanceName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRoleInstancesGetRemoteDesktopFileOptionalParams
  ): Promise<CloudServiceRoleInstancesGetRemoteDesktopFileResponse> {
    return this.client.sendOperationRequest(
      { roleInstanceName, resourceGroupName, cloudServiceName, options },
      getRemoteDesktopFileOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName
   * @param cloudServiceName
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    cloudServiceName: string,
    nextLink: string,
    options?: CloudServiceRoleInstancesListNextOptionalParams
  ): Promise<CloudServiceRoleInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roleInstances/{roleInstanceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.roleInstanceName,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roleInstances/{roleInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleInstance
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.roleInstanceName,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getInstanceViewOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roleInstances/{roleInstanceName}/instanceView",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleInstanceView
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.roleInstanceName,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roleInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleInstanceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const restartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roleInstances/{roleInstanceName}/restart",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.roleInstanceName,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const reimageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roleInstances/{roleInstanceName}/reimage",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.roleInstanceName,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const rebuildOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roleInstances/{roleInstanceName}/rebuild",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.roleInstanceName,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getRemoteDesktopFileOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roleInstances/{roleInstanceName}/remoteDesktopFile",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.roleInstanceName,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept2],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleInstanceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
