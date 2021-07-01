import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineExtension,
  VirtualMachineExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineExtensionsCreateOrUpdateResponse,
  VirtualMachineExtensionUpdate,
  VirtualMachineExtensionsUpdateOptionalParams,
  VirtualMachineExtensionsUpdateResponse,
  VirtualMachineExtensionsDeleteOptionalParams,
  VirtualMachineExtensionsGetOptionalParams,
  VirtualMachineExtensionsGetResponse,
  VirtualMachineExtensionsListOptionalParams,
  VirtualMachineExtensionsListResponse
} from "../models";

/** Interface representing a VirtualMachineExtensions. */
export interface VirtualMachineExtensions {
  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be created or updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineExtension,
    options?: VirtualMachineExtensionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineExtensionsCreateOrUpdateResponse>,
      VirtualMachineExtensionsCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be created or updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineExtension,
    options?: VirtualMachineExtensionsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineExtensionsCreateOrUpdateResponse>;
  /**
   * The operation to update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineExtensionUpdate,
    options?: VirtualMachineExtensionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineExtensionsUpdateResponse>,
      VirtualMachineExtensionsUpdateResponse
    >
  >;
  /**
   * The operation to update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineExtensionUpdate,
    options?: VirtualMachineExtensionsUpdateOptionalParams
  ): Promise<VirtualMachineExtensionsUpdateResponse>;
  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be deleted.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    options?: VirtualMachineExtensionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be deleted.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    options?: VirtualMachineExtensionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * The operation to get the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    options?: VirtualMachineExtensionsGetOptionalParams
  ): Promise<VirtualMachineExtensionsGetResponse>;
  /**
   * The operation to get all extensions of a Virtual Machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineExtensionsListOptionalParams
  ): Promise<VirtualMachineExtensionsListResponse>;
}
