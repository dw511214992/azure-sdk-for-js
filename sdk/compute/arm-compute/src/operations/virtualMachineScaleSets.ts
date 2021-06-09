import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachineScaleSets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineScaleSet,
  VirtualMachineScaleSetsListByLocationNextOptionalParams,
  VirtualMachineScaleSetsListByLocationOptionalParams,
  VirtualMachineScaleSetsListNextOptionalParams,
  VirtualMachineScaleSetsListOptionalParams,
  VirtualMachineScaleSetsListAllNextOptionalParams,
  VirtualMachineScaleSetsListAllOptionalParams,
  VirtualMachineScaleSetSku,
  VirtualMachineScaleSetsListSkusNextOptionalParams,
  VirtualMachineScaleSetsListSkusOptionalParams,
  UpgradeOperationHistoricalStatusInfo,
  VirtualMachineScaleSetsGetOSUpgradeHistoryNextOptionalParams,
  VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams,
  VirtualMachineScaleSetsListByLocationResponse,
  VirtualMachineScaleSetsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetsCreateOrUpdateResponse,
  VirtualMachineScaleSetUpdate,
  VirtualMachineScaleSetsUpdateOptionalParams,
  VirtualMachineScaleSetsUpdateResponse,
  VirtualMachineScaleSetsDeleteOptionalParams,
  VirtualMachineScaleSetsGetOptionalParams,
  VirtualMachineScaleSetsGetResponse,
  VirtualMachineScaleSetsDeallocateOptionalParams,
  VirtualMachineScaleSetVMInstanceRequiredIDs,
  VirtualMachineScaleSetsDeleteInstancesOptionalParams,
  VirtualMachineScaleSetsGetInstanceViewOptionalParams,
  VirtualMachineScaleSetsGetInstanceViewResponse,
  VirtualMachineScaleSetsListResponse,
  VirtualMachineScaleSetsListAllResponse,
  VirtualMachineScaleSetsListSkusResponse,
  VirtualMachineScaleSetsGetOSUpgradeHistoryResponse,
  VirtualMachineScaleSetsPowerOffOptionalParams,
  VirtualMachineScaleSetsRestartOptionalParams,
  VirtualMachineScaleSetsStartOptionalParams,
  VirtualMachineScaleSetsRedeployOptionalParams,
  VirtualMachineScaleSetsPerformMaintenanceOptionalParams,
  VirtualMachineScaleSetsUpdateInstancesOptionalParams,
  VirtualMachineScaleSetsReimageOptionalParams,
  VirtualMachineScaleSetsReimageAllOptionalParams,
  VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOptionalParams,
  VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkResponse,
  VMScaleSetConvertToSinglePlacementGroupInput,
  VirtualMachineScaleSetsConvertToSinglePlacementGroupOptionalParams,
  OrchestrationServiceStateInput,
  VirtualMachineScaleSetsSetOrchestrationServiceStateOptionalParams,
  VirtualMachineScaleSetsListByLocationNextResponse,
  VirtualMachineScaleSetsListNextResponse,
  VirtualMachineScaleSetsListAllNextResponse,
  VirtualMachineScaleSetsListSkusNextResponse,
  VirtualMachineScaleSetsGetOSUpgradeHistoryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a VirtualMachineScaleSets. */
export class VirtualMachineScaleSetsImpl implements VirtualMachineScaleSets {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualMachineScaleSets class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the VM scale sets under the specified subscription for the specified location.
   * @param location The location for which VM scale sets under the subscription are queried.
   * @param options The options parameters.
   */
  public listByLocation(
    location: string,
    options?: VirtualMachineScaleSetsListByLocationOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineScaleSet> {
    const iter = this.listByLocationPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByLocationPagingPage(location, options);
      }
    };
  }

  private async *listByLocationPagingPage(
    location: string,
    options?: VirtualMachineScaleSetsListByLocationOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSet[]> {
    let result = await this._listByLocation(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByLocationNext(
        location,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByLocationPagingAll(
    location: string,
    options?: VirtualMachineScaleSetsListByLocationOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSet> {
    for await (const page of this.listByLocationPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of all VM scale sets under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: VirtualMachineScaleSetsListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineScaleSet> {
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
    options?: VirtualMachineScaleSetsListOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSet[]> {
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
    options?: VirtualMachineScaleSetsListOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSet> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group.
   * Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink
   * is null to fetch all the VM Scale Sets.
   * @param options The options parameters.
   */
  public listAll(
    options?: VirtualMachineScaleSetsListAllOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineScaleSet> {
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
    options?: VirtualMachineScaleSetsListAllOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSet[]> {
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
    options?: VirtualMachineScaleSetsListAllOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSet> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances
   * allowed for each SKU.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  public listSkus(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsListSkusOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineScaleSetSku> {
    const iter = this.listSkusPagingAll(
      resourceGroupName,
      vmScaleSetName,
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
        return this.listSkusPagingPage(
          resourceGroupName,
          vmScaleSetName,
          options
        );
      }
    };
  }

  private async *listSkusPagingPage(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsListSkusOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSetSku[]> {
    let result = await this._listSkus(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listSkusNext(
        resourceGroupName,
        vmScaleSetName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listSkusPagingAll(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsListSkusOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSetSku> {
    for await (const page of this.listSkusPagingPage(
      resourceGroupName,
      vmScaleSetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets list of OS upgrades on a VM scale set instance.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  public listOSUpgradeHistory(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams
  ): PagedAsyncIterableIterator<UpgradeOperationHistoricalStatusInfo> {
    const iter = this.getOSUpgradeHistoryPagingAll(
      resourceGroupName,
      vmScaleSetName,
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
        return this.getOSUpgradeHistoryPagingPage(
          resourceGroupName,
          vmScaleSetName,
          options
        );
      }
    };
  }

  private async *getOSUpgradeHistoryPagingPage(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams
  ): AsyncIterableIterator<UpgradeOperationHistoricalStatusInfo[]> {
    let result = await this._getOSUpgradeHistory(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getOSUpgradeHistoryNext(
        resourceGroupName,
        vmScaleSetName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getOSUpgradeHistoryPagingAll(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams
  ): AsyncIterableIterator<UpgradeOperationHistoricalStatusInfo> {
    for await (const page of this.getOSUpgradeHistoryPagingPage(
      resourceGroupName,
      vmScaleSetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the VM scale sets under the specified subscription for the specified location.
   * @param location The location for which VM scale sets under the subscription are queried.
   * @param options The options parameters.
   */
  private _listByLocation(
    location: string,
    options?: VirtualMachineScaleSetsListByLocationOptionalParams
  ): Promise<VirtualMachineScaleSetsListByLocationResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listByLocationOperationSpec
    );
  }

  /**
   * Create or update a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set to create or update.
   * @param parameters The scale set object.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: VirtualMachineScaleSet,
    options?: VirtualMachineScaleSetsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetsCreateOrUpdateResponse>,
      VirtualMachineScaleSetsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineScaleSetsCreateOrUpdateResponse> => {
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
      { resourceGroupName, vmScaleSetName, parameters, options },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Create or update a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set to create or update.
   * @param parameters The scale set object.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: VirtualMachineScaleSet,
    options?: VirtualMachineScaleSetsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vmScaleSetName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set to create or update.
   * @param parameters The scale set object.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: VirtualMachineScaleSetUpdate,
    options?: VirtualMachineScaleSetsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetsUpdateResponse>,
      VirtualMachineScaleSetsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineScaleSetsUpdateResponse> => {
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
      { resourceGroupName, vmScaleSetName, parameters, options },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * Update a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set to create or update.
   * @param parameters The scale set object.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: VirtualMachineScaleSetUpdate,
    options?: VirtualMachineScaleSetsUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vmScaleSetName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsDeleteOptionalParams
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
      { resourceGroupName, vmScaleSetName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Display information about a virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsGetOptionalParams
  ): Promise<VirtualMachineScaleSetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, options },
      getOperationSpec
    );
  }

  /**
   * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and
   * releases the compute resources. You are not billed for the compute resources that this virtual
   * machine scale set deallocates.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginDeallocate(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsDeallocateOptionalParams
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
      { resourceGroupName, vmScaleSetName, options },
      deallocateOperationSpec,
      sendOperation
    );
  }

  /**
   * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and
   * releases the compute resources. You are not billed for the compute resources that this virtual
   * machine scale set deallocates.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginDeallocateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsDeallocateOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeallocate(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes virtual machines in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
   * @param options The options parameters.
   */
  async beginDeleteInstances(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs,
    options?: VirtualMachineScaleSetsDeleteInstancesOptionalParams
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
      { resourceGroupName, vmScaleSetName, vmInstanceIDs, options },
      deleteInstancesOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes virtual machines in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
   * @param options The options parameters.
   */
  async beginDeleteInstancesAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs,
    options?: VirtualMachineScaleSetsDeleteInstancesOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteInstances(
      resourceGroupName,
      vmScaleSetName,
      vmInstanceIDs,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the status of a VM scale set instance.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  getInstanceView(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsGetInstanceViewOptionalParams
  ): Promise<VirtualMachineScaleSetsGetInstanceViewResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, options },
      getInstanceViewOperationSpec
    );
  }

  /**
   * Gets a list of all VM scale sets under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: VirtualMachineScaleSetsListOptionalParams
  ): Promise<VirtualMachineScaleSetsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group.
   * Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink
   * is null to fetch all the VM Scale Sets.
   * @param options The options parameters.
   */
  private _listAll(
    options?: VirtualMachineScaleSetsListAllOptionalParams
  ): Promise<VirtualMachineScaleSetsListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances
   * allowed for each SKU.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  private _listSkus(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsListSkusOptionalParams
  ): Promise<VirtualMachineScaleSetsListSkusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, options },
      listSkusOperationSpec
    );
  }

  /**
   * Gets list of OS upgrades on a VM scale set instance.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  private _getOSUpgradeHistory(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsGetOSUpgradeHistoryOptionalParams
  ): Promise<VirtualMachineScaleSetsGetOSUpgradeHistoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, options },
      getOSUpgradeHistoryOperationSpec
    );
  }

  /**
   * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still
   * attached and you are getting charged for the resources. Instead, use deallocate to release resources
   * and avoid charges.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginPowerOff(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsPowerOffOptionalParams
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
      { resourceGroupName, vmScaleSetName, options },
      powerOffOperationSpec,
      sendOperation
    );
  }

  /**
   * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still
   * attached and you are getting charged for the resources. Instead, use deallocate to release resources
   * and avoid charges.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginPowerOffAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsPowerOffOptionalParams
  ): Promise<void> {
    const poller = await this.beginPowerOff(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Restarts one or more virtual machines in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsRestartOptionalParams
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
      { resourceGroupName, vmScaleSetName, options },
      restartOperationSpec,
      sendOperation
    );
  }

  /**
   * Restarts one or more virtual machines in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsRestartOptionalParams
  ): Promise<void> {
    const poller = await this.beginRestart(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Starts one or more virtual machines in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsStartOptionalParams
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
      { resourceGroupName, vmScaleSetName, options },
      startOperationSpec,
      sendOperation
    );
  }

  /**
   * Starts one or more virtual machines in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and
   * powers them back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginRedeploy(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsRedeployOptionalParams
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
      { resourceGroupName, vmScaleSetName, options },
      redeployOperationSpec,
      sendOperation
    );
  }

  /**
   * Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and
   * powers them back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginRedeployAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsRedeployOptionalParams
  ): Promise<void> {
    const poller = await this.beginRedeploy(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which
   * are not eligible for perform maintenance will be failed. Please refer to best practices for more
   * details:
   * https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginPerformMaintenance(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsPerformMaintenanceOptionalParams
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
      { resourceGroupName, vmScaleSetName, options },
      performMaintenanceOperationSpec,
      sendOperation
    );
  }

  /**
   * Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which
   * are not eligible for perform maintenance will be failed. Please refer to best practices for more
   * details:
   * https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginPerformMaintenanceAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsPerformMaintenanceOptionalParams
  ): Promise<void> {
    const poller = await this.beginPerformMaintenance(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
   * @param options The options parameters.
   */
  async beginUpdateInstances(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs,
    options?: VirtualMachineScaleSetsUpdateInstancesOptionalParams
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
      { resourceGroupName, vmScaleSetName, vmInstanceIDs, options },
      updateInstancesOperationSpec,
      sendOperation
    );
  }

  /**
   * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
   * @param options The options parameters.
   */
  async beginUpdateInstancesAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs,
    options?: VirtualMachineScaleSetsUpdateInstancesOptionalParams
  ): Promise<void> {
    const poller = await this.beginUpdateInstances(
      resourceGroupName,
      vmScaleSetName,
      vmInstanceIDs,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't
   * have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is
   * reset to initial state.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginReimage(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsReimageOptionalParams
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
      { resourceGroupName, vmScaleSetName, options },
      reimageOperationSpec,
      sendOperation
    );
  }

  /**
   * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't
   * have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is
   * reset to initial state.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginReimageAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsReimageOptionalParams
  ): Promise<void> {
    const poller = await this.beginReimage(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This
   * operation is only supported for managed disks.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginReimageAll(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsReimageAllOptionalParams
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
      { resourceGroupName, vmScaleSetName, options },
      reimageAllOperationSpec,
      sendOperation
    );
  }

  /**
   * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This
   * operation is only supported for managed disks.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  async beginReimageAllAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsReimageAllOptionalParams
  ): Promise<void> {
    const poller = await this.beginReimageAll(
      resourceGroupName,
      vmScaleSetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Manual platform update domain walk to update virtual machines in a service fabric virtual machine
   * scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param platformUpdateDomain The platform update domain for which a manual recovery walk is requested
   * @param options The options parameters.
   */
  forceRecoveryServiceFabricPlatformUpdateDomainWalk(
    resourceGroupName: string,
    vmScaleSetName: string,
    platformUpdateDomain: number,
    options?: VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOptionalParams
  ): Promise<
    VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, platformUpdateDomain, options },
      forceRecoveryServiceFabricPlatformUpdateDomainWalkOperationSpec
    );
  }

  /**
   * Converts SinglePlacementGroup property to false for a existing virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the virtual machine scale set to create or update.
   * @param parameters The input object for ConvertToSinglePlacementGroup API.
   * @param options The options parameters.
   */
  convertToSinglePlacementGroup(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: VMScaleSetConvertToSinglePlacementGroupInput,
    options?: VirtualMachineScaleSetsConvertToSinglePlacementGroupOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, parameters, options },
      convertToSinglePlacementGroupOperationSpec
    );
  }

  /**
   * Changes ServiceState property for a given service
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the virtual machine scale set to create or update.
   * @param parameters The input object for SetOrchestrationServiceState API.
   * @param options The options parameters.
   */
  async beginSetOrchestrationServiceState(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: OrchestrationServiceStateInput,
    options?: VirtualMachineScaleSetsSetOrchestrationServiceStateOptionalParams
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
      { resourceGroupName, vmScaleSetName, parameters, options },
      setOrchestrationServiceStateOperationSpec,
      sendOperation
    );
  }

  /**
   * Changes ServiceState property for a given service
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the virtual machine scale set to create or update.
   * @param parameters The input object for SetOrchestrationServiceState API.
   * @param options The options parameters.
   */
  async beginSetOrchestrationServiceStateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: OrchestrationServiceStateInput,
    options?: VirtualMachineScaleSetsSetOrchestrationServiceStateOptionalParams
  ): Promise<void> {
    const poller = await this.beginSetOrchestrationServiceState(
      resourceGroupName,
      vmScaleSetName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByLocationNext
   * @param location The location for which VM scale sets under the subscription are queried.
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    location: string,
    nextLink: string,
    options?: VirtualMachineScaleSetsListByLocationNextOptionalParams
  ): Promise<VirtualMachineScaleSetsListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listByLocationNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: VirtualMachineScaleSetsListNextOptionalParams
  ): Promise<VirtualMachineScaleSetsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: VirtualMachineScaleSetsListAllNextOptionalParams
  ): Promise<VirtualMachineScaleSetsListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec
    );
  }

  /**
   * ListSkusNext
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param nextLink The nextLink from the previous successful call to the ListSkus method.
   * @param options The options parameters.
   */
  private _listSkusNext(
    resourceGroupName: string,
    vmScaleSetName: string,
    nextLink: string,
    options?: VirtualMachineScaleSetsListSkusNextOptionalParams
  ): Promise<VirtualMachineScaleSetsListSkusNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, nextLink, options },
      listSkusNextOperationSpec
    );
  }

  /**
   * GetOSUpgradeHistoryNext
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param nextLink The nextLink from the previous successful call to the GetOSUpgradeHistory method.
   * @param options The options parameters.
   */
  private _getOSUpgradeHistoryNext(
    resourceGroupName: string,
    vmScaleSetName: string,
    nextLink: string,
    options?: VirtualMachineScaleSetsGetOSUpgradeHistoryNextOptionalParams
  ): Promise<VirtualMachineScaleSetsGetOSUpgradeHistoryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, nextLink, options },
      getOSUpgradeHistoryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/virtualMachineScaleSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSet
    },
    201: {
      bodyMapper: Mappers.VirtualMachineScaleSet
    },
    202: {
      bodyMapper: Mappers.VirtualMachineScaleSet
    },
    204: {
      bodyMapper: Mappers.VirtualMachineScaleSet
    }
  },
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSet
    },
    201: {
      bodyMapper: Mappers.VirtualMachineScaleSet
    },
    202: {
      bodyMapper: Mappers.VirtualMachineScaleSet
    },
    204: {
      bodyMapper: Mappers.VirtualMachineScaleSet
    }
  },
  requestBody: Parameters.parameters16,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion, Parameters.forceDeletion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSet
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deallocateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/deallocate",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmInstanceIDs,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteInstancesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/delete",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmInstanceIDs1,
  queryParameters: [Parameters.apiVersion, Parameters.forceDeletion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getInstanceViewOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/instanceView",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetInstanceView
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListResult
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
const listAllOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachineScaleSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListWithLinkResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listSkusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListSkusResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOSUpgradeHistoryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osUpgradeHistory",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListOSUpgradeHistory
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const powerOffOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/poweroff",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmInstanceIDs,
  queryParameters: [Parameters.apiVersion, Parameters.skipShutdown],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const restartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/restart",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmInstanceIDs,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/start",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmInstanceIDs,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const redeployOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/redeploy",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmInstanceIDs,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const performMaintenanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/performMaintenance",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmInstanceIDs,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateInstancesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/manualupgrade",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmInstanceIDs1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const reimageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/reimage",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmScaleSetReimageInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const reimageAllOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/reimageall",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.vmInstanceIDs,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const forceRecoveryServiceFabricPlatformUpdateDomainWalkOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/forceRecoveryServiceFabricPlatformUpdateDomainWalk",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryWalkResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.platformUpdateDomain],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const convertToSinglePlacementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/convertToSinglePlacementGroup",
  httpMethod: "POST",
  responses: { 200: {} },
  requestBody: Parameters.parameters17,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const setOrchestrationServiceStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/setOrchestrationServiceState",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListResult
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
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListWithLinkResult
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
const listSkusNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListSkusResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOSUpgradeHistoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetListOSUpgradeHistory
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
