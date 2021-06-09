import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachines } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachine,
  VirtualMachinesListByLocationNextOptionalParams,
  VirtualMachinesListByLocationOptionalParams,
  VirtualMachinesListNextOptionalParams,
  VirtualMachinesListOptionalParams,
  VirtualMachinesListAllNextOptionalParams,
  VirtualMachinesListAllOptionalParams,
  VirtualMachineSize,
  VirtualMachinesListAvailableSizesOptionalParams,
  VirtualMachinesListByLocationResponse,
  VirtualMachineCaptureParameters,
  VirtualMachinesCaptureOptionalParams,
  VirtualMachinesCaptureResponse,
  VirtualMachinesCreateOrUpdateOptionalParams,
  VirtualMachinesCreateOrUpdateResponse,
  VirtualMachineUpdate,
  VirtualMachinesUpdateOptionalParams,
  VirtualMachinesUpdateResponse,
  VirtualMachinesDeleteOptionalParams,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesGetResponse,
  VirtualMachinesInstanceViewOptionalParams,
  VirtualMachinesInstanceViewResponse,
  VirtualMachinesConvertToManagedDisksOptionalParams,
  VirtualMachinesDeallocateOptionalParams,
  VirtualMachinesGeneralizeOptionalParams,
  VirtualMachinesListResponse,
  VirtualMachinesListAllResponse,
  VirtualMachinesListAvailableSizesResponse,
  VirtualMachinesPowerOffOptionalParams,
  VirtualMachinesReapplyOptionalParams,
  VirtualMachinesRestartOptionalParams,
  VirtualMachinesStartOptionalParams,
  VirtualMachinesRedeployOptionalParams,
  VirtualMachinesReimageOptionalParams,
  VirtualMachinesRetrieveBootDiagnosticsDataOptionalParams,
  VirtualMachinesRetrieveBootDiagnosticsDataResponse,
  VirtualMachinesPerformMaintenanceOptionalParams,
  VirtualMachinesSimulateEvictionOptionalParams,
  VirtualMachinesAssessPatchesOptionalParams,
  VirtualMachinesAssessPatchesResponse,
  VirtualMachineInstallPatchesParameters,
  VirtualMachinesInstallPatchesOptionalParams,
  VirtualMachinesInstallPatchesResponse,
  RunCommandInput,
  VirtualMachinesRunCommandOptionalParams,
  VirtualMachinesRunCommandResponse,
  VirtualMachinesListByLocationNextResponse,
  VirtualMachinesListNextResponse,
  VirtualMachinesListAllNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a VirtualMachines. */
export class VirtualMachinesImpl implements VirtualMachines {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualMachines class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the virtual machines under the specified subscription for the specified location.
   * @param location The location for which virtual machines under the subscription are queried.
   * @param options The options parameters.
   */
  public listByLocation(
    location: string,
    options?: VirtualMachinesListByLocationOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachine> {
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
    options?: VirtualMachinesListByLocationOptionalParams
  ): AsyncIterableIterator<VirtualMachine[]> {
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
    options?: VirtualMachinesListByLocationOptionalParams
  ): AsyncIterableIterator<VirtualMachine> {
    for await (const page of this.listByLocationPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the virtual machines in the specified resource group. Use the nextLink property in the
   * response to get the next page of virtual machines.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: VirtualMachinesListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachine> {
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
    options?: VirtualMachinesListOptionalParams
  ): AsyncIterableIterator<VirtualMachine[]> {
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
    options?: VirtualMachinesListOptionalParams
  ): AsyncIterableIterator<VirtualMachine> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the virtual machines in the specified subscription. Use the nextLink property in the
   * response to get the next page of virtual machines.
   * @param options The options parameters.
   */
  public listAll(
    options?: VirtualMachinesListAllOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachine> {
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
    options?: VirtualMachinesListAllOptionalParams
  ): AsyncIterableIterator<VirtualMachine[]> {
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
    options?: VirtualMachinesListAllOptionalParams
  ): AsyncIterableIterator<VirtualMachine> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all available virtual machine sizes to which the specified virtual machine can be resized.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  public listAvailableSizes(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesListAvailableSizesOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineSize> {
    const iter = this.listAvailableSizesPagingAll(
      resourceGroupName,
      vmName,
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
        return this.listAvailableSizesPagingPage(
          resourceGroupName,
          vmName,
          options
        );
      }
    };
  }

  private async *listAvailableSizesPagingPage(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesListAvailableSizesOptionalParams
  ): AsyncIterableIterator<VirtualMachineSize[]> {
    let result = await this._listAvailableSizes(
      resourceGroupName,
      vmName,
      options
    );
    yield result.value || [];
  }

  private async *listAvailableSizesPagingAll(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesListAvailableSizesOptionalParams
  ): AsyncIterableIterator<VirtualMachineSize> {
    for await (const page of this.listAvailableSizesPagingPage(
      resourceGroupName,
      vmName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the virtual machines under the specified subscription for the specified location.
   * @param location The location for which virtual machines under the subscription are queried.
   * @param options The options parameters.
   */
  private _listByLocation(
    location: string,
    options?: VirtualMachinesListByLocationOptionalParams
  ): Promise<VirtualMachinesListByLocationResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listByLocationOperationSpec
    );
  }

  /**
   * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to
   * create similar VMs.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Capture Virtual Machine operation.
   * @param options The options parameters.
   */
  async beginCapture(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineCaptureParameters,
    options?: VirtualMachinesCaptureOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachinesCaptureResponse>,
      VirtualMachinesCaptureResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachinesCaptureResponse> => {
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
      { resourceGroupName, vmName, parameters, options },
      captureOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to
   * create similar VMs.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Capture Virtual Machine operation.
   * @param options The options parameters.
   */
  async beginCaptureAndWait(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineCaptureParameters,
    options?: VirtualMachinesCaptureOptionalParams
  ): Promise<VirtualMachinesCaptureResponse> {
    const poller = await this.beginCapture(
      resourceGroupName,
      vmName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to create or update a virtual machine. Please note some properties can be set only
   * during virtual machine creation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Create Virtual Machine operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachine,
    options?: VirtualMachinesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachinesCreateOrUpdateResponse>,
      VirtualMachinesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachinesCreateOrUpdateResponse> => {
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
      { resourceGroupName, vmName, parameters, options },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to create or update a virtual machine. Please note some properties can be set only
   * during virtual machine creation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Create Virtual Machine operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachine,
    options?: VirtualMachinesCreateOrUpdateOptionalParams
  ): Promise<VirtualMachinesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vmName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineUpdate,
    options?: VirtualMachinesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachinesUpdateResponse>,
      VirtualMachinesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachinesUpdateResponse> => {
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
      { resourceGroupName, vmName, parameters, options },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to update a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineUpdate,
    options?: VirtualMachinesUpdateOptionalParams
  ): Promise<VirtualMachinesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vmName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeleteOptionalParams
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
      { resourceGroupName, vmName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to delete a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, vmName, options);
    return poller.pollUntilDone();
  }

  /**
   * Retrieves information about the model view or the instance view of a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesGetOptionalParams
  ): Promise<VirtualMachinesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, options },
      getOperationSpec
    );
  }

  /**
   * Retrieves information about the run-time state of a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  instanceView(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesInstanceViewOptionalParams
  ): Promise<VirtualMachinesInstanceViewResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, options },
      instanceViewOperationSpec
    );
  }

  /**
   * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
   * stop-deallocated before invoking this operation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginConvertToManagedDisks(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesConvertToManagedDisksOptionalParams
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
      { resourceGroupName, vmName, options },
      convertToManagedDisksOperationSpec,
      sendOperation
    );
  }

  /**
   * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
   * stop-deallocated before invoking this operation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginConvertToManagedDisksAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesConvertToManagedDisksOptionalParams
  ): Promise<void> {
    const poller = await this.beginConvertToManagedDisks(
      resourceGroupName,
      vmName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Shuts down the virtual machine and releases the compute resources. You are not billed for the
   * compute resources that this virtual machine uses.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginDeallocate(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeallocateOptionalParams
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
      { resourceGroupName, vmName, options },
      deallocateOperationSpec,
      sendOperation
    );
  }

  /**
   * Shuts down the virtual machine and releases the compute resources. You are not billed for the
   * compute resources that this virtual machine uses.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginDeallocateAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeallocateOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeallocate(
      resourceGroupName,
      vmName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Sets the OS state of the virtual machine to generalized. It is recommended to sysprep the virtual
   * machine before performing this operation. <br>For Windows, please refer to [Create a managed image
   * of a generalized VM in
   * Azure](https://docs.microsoft.com/azure/virtual-machines/windows/capture-image-resource).<br>For
   * Linux, please refer to [How to create an image of a virtual machine or
   * VHD](https://docs.microsoft.com/azure/virtual-machines/linux/capture-image).
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  generalize(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesGeneralizeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, options },
      generalizeOperationSpec
    );
  }

  /**
   * Lists all of the virtual machines in the specified resource group. Use the nextLink property in the
   * response to get the next page of virtual machines.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: VirtualMachinesListOptionalParams
  ): Promise<VirtualMachinesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * Lists all of the virtual machines in the specified subscription. Use the nextLink property in the
   * response to get the next page of virtual machines.
   * @param options The options parameters.
   */
  private _listAll(
    options?: VirtualMachinesListAllOptionalParams
  ): Promise<VirtualMachinesListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * Lists all available virtual machine sizes to which the specified virtual machine can be resized.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  private _listAvailableSizes(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesListAvailableSizesOptionalParams
  ): Promise<VirtualMachinesListAvailableSizesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, options },
      listAvailableSizesOperationSpec
    );
  }

  /**
   * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the
   * same provisioned resources. You are still charged for this virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginPowerOff(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPowerOffOptionalParams
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
      { resourceGroupName, vmName, options },
      powerOffOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the
   * same provisioned resources. You are still charged for this virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginPowerOffAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPowerOffOptionalParams
  ): Promise<void> {
    const poller = await this.beginPowerOff(resourceGroupName, vmName, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to reapply a virtual machine's state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginReapply(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReapplyOptionalParams
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
      { resourceGroupName, vmName, options },
      reapplyOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to reapply a virtual machine's state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginReapplyAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReapplyOptionalParams
  ): Promise<void> {
    const poller = await this.beginReapply(resourceGroupName, vmName, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to restart a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRestartOptionalParams
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
      { resourceGroupName, vmName, options },
      restartOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to restart a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRestartOptionalParams
  ): Promise<void> {
    const poller = await this.beginRestart(resourceGroupName, vmName, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to start a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesStartOptionalParams
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
      { resourceGroupName, vmName, options },
      startOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to start a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(resourceGroupName, vmName, options);
    return poller.pollUntilDone();
  }

  /**
   * Shuts down the virtual machine, moves it to a new node, and powers it back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginRedeploy(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRedeployOptionalParams
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
      { resourceGroupName, vmName, options },
      redeployOperationSpec,
      sendOperation
    );
  }

  /**
   * Shuts down the virtual machine, moves it to a new node, and powers it back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginRedeployAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRedeployOptionalParams
  ): Promise<void> {
    const poller = await this.beginRedeploy(resourceGroupName, vmName, options);
    return poller.pollUntilDone();
  }

  /**
   * Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginReimage(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReimageOptionalParams
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
      { resourceGroupName, vmName, options },
      reimageOperationSpec,
      sendOperation
    );
  }

  /**
   * Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginReimageAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReimageOptionalParams
  ): Promise<void> {
    const poller = await this.beginReimage(resourceGroupName, vmName, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to retrieve SAS URIs for a virtual machine's boot diagnostic logs.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  retrieveBootDiagnosticsData(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRetrieveBootDiagnosticsDataOptionalParams
  ): Promise<VirtualMachinesRetrieveBootDiagnosticsDataResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, options },
      retrieveBootDiagnosticsDataOperationSpec
    );
  }

  /**
   * The operation to perform maintenance on a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginPerformMaintenance(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPerformMaintenanceOptionalParams
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
      { resourceGroupName, vmName, options },
      performMaintenanceOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to perform maintenance on a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginPerformMaintenanceAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPerformMaintenanceOptionalParams
  ): Promise<void> {
    const poller = await this.beginPerformMaintenance(
      resourceGroupName,
      vmName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to simulate the eviction of spot virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  simulateEviction(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesSimulateEvictionOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, options },
      simulateEvictionOperationSpec
    );
  }

  /**
   * Assess patches on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginAssessPatches(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesAssessPatchesOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachinesAssessPatchesResponse>,
      VirtualMachinesAssessPatchesResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachinesAssessPatchesResponse> => {
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
      { resourceGroupName, vmName, options },
      assessPatchesOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Assess patches on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  async beginAssessPatchesAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesAssessPatchesOptionalParams
  ): Promise<VirtualMachinesAssessPatchesResponse> {
    const poller = await this.beginAssessPatches(
      resourceGroupName,
      vmName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Installs patches on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param installPatchesInput Input for InstallPatches as directly received by the API
   * @param options The options parameters.
   */
  async beginInstallPatches(
    resourceGroupName: string,
    vmName: string,
    installPatchesInput: VirtualMachineInstallPatchesParameters,
    options?: VirtualMachinesInstallPatchesOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachinesInstallPatchesResponse>,
      VirtualMachinesInstallPatchesResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachinesInstallPatchesResponse> => {
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
      { resourceGroupName, vmName, installPatchesInput, options },
      installPatchesOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Installs patches on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param installPatchesInput Input for InstallPatches as directly received by the API
   * @param options The options parameters.
   */
  async beginInstallPatchesAndWait(
    resourceGroupName: string,
    vmName: string,
    installPatchesInput: VirtualMachineInstallPatchesParameters,
    options?: VirtualMachinesInstallPatchesOptionalParams
  ): Promise<VirtualMachinesInstallPatchesResponse> {
    const poller = await this.beginInstallPatches(
      resourceGroupName,
      vmName,
      installPatchesInput,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Run command on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Run command operation.
   * @param options The options parameters.
   */
  async beginRunCommand(
    resourceGroupName: string,
    vmName: string,
    parameters: RunCommandInput,
    options?: VirtualMachinesRunCommandOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachinesRunCommandResponse>,
      VirtualMachinesRunCommandResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachinesRunCommandResponse> => {
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
      { resourceGroupName, vmName, parameters, options },
      runCommandOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Run command on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Run command operation.
   * @param options The options parameters.
   */
  async beginRunCommandAndWait(
    resourceGroupName: string,
    vmName: string,
    parameters: RunCommandInput,
    options?: VirtualMachinesRunCommandOptionalParams
  ): Promise<VirtualMachinesRunCommandResponse> {
    const poller = await this.beginRunCommand(
      resourceGroupName,
      vmName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByLocationNext
   * @param location The location for which virtual machines under the subscription are queried.
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    location: string,
    nextLink: string,
    options?: VirtualMachinesListByLocationNextOptionalParams
  ): Promise<VirtualMachinesListByLocationNextResponse> {
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
    options?: VirtualMachinesListNextOptionalParams
  ): Promise<VirtualMachinesListNextResponse> {
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
    options?: VirtualMachinesListAllNextOptionalParams
  ): Promise<VirtualMachinesListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/virtualMachines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineListResult
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
const captureOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/capture",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineCaptureResult
    },
    201: {
      bodyMapper: Mappers.VirtualMachineCaptureResult
    },
    202: {
      bodyMapper: Mappers.VirtualMachineCaptureResult
    },
    204: {
      bodyMapper: Mappers.VirtualMachineCaptureResult
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachine
    },
    201: {
      bodyMapper: Mappers.VirtualMachine
    },
    202: {
      bodyMapper: Mappers.VirtualMachine
    },
    204: {
      bodyMapper: Mappers.VirtualMachine
    }
  },
  requestBody: Parameters.parameters11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachine
    },
    201: {
      bodyMapper: Mappers.VirtualMachine
    },
    202: {
      bodyMapper: Mappers.VirtualMachine
    },
    204: {
      bodyMapper: Mappers.VirtualMachine
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion, Parameters.forceDeletion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachine
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const instanceViewOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/instanceView",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineInstanceView
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const convertToManagedDisksOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/convertToManagedDisks",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const deallocateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/deallocate",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const generalizeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/generalize",
  httpMethod: "POST",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineListResult
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
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.statusOnly],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listAvailableSizesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/vmSizes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineSizeListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const powerOffOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/powerOff",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion, Parameters.skipShutdown],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const reapplyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/reapply",
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
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const restartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/restart",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/start",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const redeployOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/redeploy",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const reimageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/reimage",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const retrieveBootDiagnosticsDataOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/retrieveBootDiagnosticsData",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RetrieveBootDiagnosticsDataResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.sasUriExpirationTimeInMinutes
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const performMaintenanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/performMaintenance",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const simulateEvictionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/simulateEviction",
  httpMethod: "POST",
  responses: { 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  serializer
};
const assessPatchesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/assessPatches",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineAssessPatchesResult
    },
    201: {
      bodyMapper: Mappers.VirtualMachineAssessPatchesResult
    },
    202: {
      bodyMapper: Mappers.VirtualMachineAssessPatchesResult
    },
    204: {
      bodyMapper: Mappers.VirtualMachineAssessPatchesResult
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
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const installPatchesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/installPatches",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineInstallPatchesResult
    },
    201: {
      bodyMapper: Mappers.VirtualMachineInstallPatchesResult
    },
    202: {
      bodyMapper: Mappers.VirtualMachineInstallPatchesResult
    },
    204: {
      bodyMapper: Mappers.VirtualMachineInstallPatchesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.installPatchesInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const runCommandOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommand",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandResult
    },
    201: {
      bodyMapper: Mappers.RunCommandResult
    },
    202: {
      bodyMapper: Mappers.RunCommandResult
    },
    204: {
      bodyMapper: Mappers.RunCommandResult
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineListResult
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
      bodyMapper: Mappers.VirtualMachineListResult
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
      bodyMapper: Mappers.VirtualMachineListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.statusOnly],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
