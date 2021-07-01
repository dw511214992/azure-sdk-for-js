import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CloudServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  CloudService,
  CloudServicesListAllNextOptionalParams,
  CloudServicesListAllOptionalParams,
  CloudServicesListNextOptionalParams,
  CloudServicesListOptionalParams,
  CloudServicesCreateOrUpdateOptionalParams,
  CloudServicesCreateOrUpdateResponse,
  CloudServicesUpdateOptionalParams,
  CloudServicesUpdateResponse,
  CloudServicesDeleteOptionalParams,
  CloudServicesGetOptionalParams,
  CloudServicesGetResponse,
  CloudServicesGetInstanceViewOptionalParams,
  CloudServicesGetInstanceViewResponse,
  CloudServicesListAllResponse,
  CloudServicesListResponse,
  CloudServicesStartOptionalParams,
  CloudServicesPowerOffOptionalParams,
  CloudServicesRestartOptionalParams,
  CloudServicesReimageOptionalParams,
  CloudServicesRebuildOptionalParams,
  CloudServicesDeleteInstancesOptionalParams,
  CloudServicesListAllNextResponse,
  CloudServicesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a CloudServices. */
export class CloudServicesImpl implements CloudServices {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class CloudServices class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of all cloud services in the subscription, regardless of the associated resource group.
   * Use nextLink property in the response to get the next page of Cloud Services. Do this till nextLink
   * is null to fetch all the Cloud Services.
   * @param options The options parameters.
   */
  public listAll(
    options?: CloudServicesListAllOptionalParams
  ): PagedAsyncIterableIterator<CloudService> {
    const iter = this.listAllPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAllPagingPage(options);
      }
    };
  }

  private async *listAllPagingPage(
    options?: CloudServicesListAllOptionalParams
  ): AsyncIterableIterator<CloudService[]> {
    let result = await this._listAll(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAllPagingAll(
    options?: CloudServicesListAllOptionalParams
  ): AsyncIterableIterator<CloudService> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of all cloud services under a resource group. Use nextLink property in the response to
   * get the next page of Cloud Services. Do this till nextLink is null to fetch all the Cloud Services.
   * @param resourceGroupName Name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: CloudServicesListOptionalParams
  ): PagedAsyncIterableIterator<CloudService> {
    const iter = this.listPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: CloudServicesListOptionalParams
  ): AsyncIterableIterator<CloudService[]> {
    let result = await this._list(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: CloudServicesListOptionalParams
  ): AsyncIterableIterator<CloudService> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Create or update a cloud service. Please note some properties can be set only during cloud service
   * creation.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CloudServicesCreateOrUpdateResponse>,
      CloudServicesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CloudServicesCreateOrUpdateResponse> => {
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
      { resourceGroupName, cloudServiceName, options },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Create or update a cloud service. Please note some properties can be set only during cloud service
   * creation.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesCreateOrUpdateOptionalParams
  ): Promise<CloudServicesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CloudServicesUpdateResponse>,
      CloudServicesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CloudServicesUpdateResponse> => {
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
      { resourceGroupName, cloudServiceName, options },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * Update a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesUpdateOptionalParams
  ): Promise<CloudServicesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesDeleteOptionalParams
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
      { resourceGroupName, cloudServiceName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Display information about a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesGetOptionalParams
  ): Promise<CloudServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Gets the status of a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  getInstanceView(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesGetInstanceViewOptionalParams
  ): Promise<CloudServicesGetInstanceViewResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, options },
      getInstanceViewOperationSpec
    );
  }

  /**
   * Gets a list of all cloud services in the subscription, regardless of the associated resource group.
   * Use nextLink property in the response to get the next page of Cloud Services. Do this till nextLink
   * is null to fetch all the Cloud Services.
   * @param options The options parameters.
   */
  private _listAll(
    options?: CloudServicesListAllOptionalParams
  ): Promise<CloudServicesListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * Gets a list of all cloud services under a resource group. Use nextLink property in the response to
   * get the next page of Cloud Services. Do this till nextLink is null to fetch all the Cloud Services.
   * @param resourceGroupName Name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: CloudServicesListOptionalParams
  ): Promise<CloudServicesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * Starts the cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesStartOptionalParams
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
      { resourceGroupName, cloudServiceName, options },
      startOperationSpec,
      sendOperation
    );
  }

  /**
   * Starts the cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Power off the cloud service. Note that resources are still attached and you are getting charged for
   * the resources.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginPowerOff(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesPowerOffOptionalParams
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
      { resourceGroupName, cloudServiceName, options },
      powerOffOperationSpec,
      sendOperation
    );
  }

  /**
   * Power off the cloud service. Note that resources are still attached and you are getting charged for
   * the resources.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginPowerOffAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesPowerOffOptionalParams
  ): Promise<void> {
    const poller = await this.beginPowerOff(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Restarts one or more role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesRestartOptionalParams
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
      { resourceGroupName, cloudServiceName, options },
      restartOperationSpec,
      sendOperation
    );
  }

  /**
   * Restarts one or more role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesRestartOptionalParams
  ): Promise<void> {
    const poller = await this.beginRestart(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Reimage asynchronous operation reinstalls the operating system on instances of web roles or worker
   * roles.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginReimage(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesReimageOptionalParams
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
      { resourceGroupName, cloudServiceName, options },
      reimageOperationSpec,
      sendOperation
    );
  }

  /**
   * Reimage asynchronous operation reinstalls the operating system on instances of web roles or worker
   * roles.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginReimageAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesReimageOptionalParams
  ): Promise<void> {
    const poller = await this.beginReimage(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Rebuild Role Instances reinstalls the operating system on instances of web roles or worker roles and
   * initializes the storage resources that are used by them. If you do not want to initialize storage
   * resources, you can use Reimage Role Instances.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginRebuild(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesRebuildOptionalParams
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
      { resourceGroupName, cloudServiceName, options },
      rebuildOperationSpec,
      sendOperation
    );
  }

  /**
   * Rebuild Role Instances reinstalls the operating system on instances of web roles or worker roles and
   * initializes the storage resources that are used by them. If you do not want to initialize storage
   * resources, you can use Reimage Role Instances.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginRebuildAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesRebuildOptionalParams
  ): Promise<void> {
    const poller = await this.beginRebuild(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginDeleteInstances(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesDeleteInstancesOptionalParams
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
      { resourceGroupName, cloudServiceName, options },
      deleteInstancesOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  async beginDeleteInstancesAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesDeleteInstancesOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteInstances(
      resourceGroupName,
      cloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: CloudServicesListAllNextOptionalParams
  ): Promise<CloudServicesListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName Name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: CloudServicesListNextOptionalParams
  ): Promise<CloudServicesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CloudService
    },
    201: {
      bodyMapper: Mappers.CloudService
    },
    202: {
      bodyMapper: Mappers.CloudService
    },
    204: {
      bodyMapper: Mappers.CloudService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters27,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CloudService
    },
    201: {
      bodyMapper: Mappers.CloudService
    },
    202: {
      bodyMapper: Mappers.CloudService
    },
    204: {
      bodyMapper: Mappers.CloudService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters28,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}",
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
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudService
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
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getInstanceViewOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/instanceView",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceInstanceView
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
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/cloudServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/start",
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
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const powerOffOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/poweroff",
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
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const restartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/restart",
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
  requestBody: Parameters.parameters29,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const reimageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/reimage",
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
  requestBody: Parameters.parameters29,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const rebuildOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/rebuild",
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
  requestBody: Parameters.parameters29,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteInstancesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/delete",
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
  requestBody: Parameters.parameters29,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceListResult
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
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
