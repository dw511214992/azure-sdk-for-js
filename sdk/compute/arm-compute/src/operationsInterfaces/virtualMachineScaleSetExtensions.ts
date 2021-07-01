import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineScaleSetExtension,
  VirtualMachineScaleSetExtensionsListOptionalParams,
  VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetExtensionsCreateOrUpdateResponse,
  VirtualMachineScaleSetExtensionUpdate,
  VirtualMachineScaleSetExtensionsUpdateOptionalParams,
  VirtualMachineScaleSetExtensionsUpdateResponse,
  VirtualMachineScaleSetExtensionsDeleteOptionalParams,
  VirtualMachineScaleSetExtensionsGetOptionalParams,
  VirtualMachineScaleSetExtensionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachineScaleSetExtensions. */
export interface VirtualMachineScaleSetExtensions {
  /**
   * Gets a list of all extensions in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetExtensionsListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineScaleSetExtension>;
  /**
   * The operation to create or update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Create VM scale set Extension operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    extensionParameters: VirtualMachineScaleSetExtension,
    options?: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        VirtualMachineScaleSetExtensionsCreateOrUpdateResponse
      >,
      VirtualMachineScaleSetExtensionsCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Create VM scale set Extension operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    extensionParameters: VirtualMachineScaleSetExtension,
    options?: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetExtensionsCreateOrUpdateResponse>;
  /**
   * The operation to update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Update VM scale set Extension operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    extensionParameters: VirtualMachineScaleSetExtensionUpdate,
    options?: VirtualMachineScaleSetExtensionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetExtensionsUpdateResponse>,
      VirtualMachineScaleSetExtensionsUpdateResponse
    >
  >;
  /**
   * The operation to update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Update VM scale set Extension operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    extensionParameters: VirtualMachineScaleSetExtensionUpdate,
    options?: VirtualMachineScaleSetExtensionsUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetExtensionsUpdateResponse>;
  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be deleted.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    options?: VirtualMachineScaleSetExtensionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be deleted.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    options?: VirtualMachineScaleSetExtensionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * The operation to get the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    options?: VirtualMachineScaleSetExtensionsGetOptionalParams
  ): Promise<VirtualMachineScaleSetExtensionsGetResponse>;
}
