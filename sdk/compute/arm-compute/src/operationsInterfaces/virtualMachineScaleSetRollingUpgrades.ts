import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineScaleSetRollingUpgradesCancelOptionalParams,
  VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams,
  VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams,
  VirtualMachineScaleSetRollingUpgradesGetLatestOptionalParams,
  VirtualMachineScaleSetRollingUpgradesGetLatestResponse
} from "../models";

/** Interface representing a VirtualMachineScaleSetRollingUpgrades. */
export interface VirtualMachineScaleSetRollingUpgrades {
  /**
   * Cancels the current virtual machine scale set rolling upgrade.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  beginCancel(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesCancelOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Cancels the current virtual machine scale set rolling upgrade.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  beginCancelAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesCancelOptionalParams
  ): Promise<void>;
  /**
   * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
   * Platform Image OS version. Instances which are already running the latest available OS version are
   * not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  beginStartOSUpgrade(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
   * Platform Image OS version. Instances which are already running the latest available OS version are
   * not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  beginStartOSUpgradeAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesStartOSUpgradeOptionalParams
  ): Promise<void>;
  /**
   * Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the
   * latest available extension version. Instances which are already running the latest extension
   * versions are not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  beginStartExtensionUpgrade(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Starts a rolling upgrade to move all extensions for all virtual machine scale set instances to the
   * latest available extension version. Instances which are already running the latest extension
   * versions are not affected.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  beginStartExtensionUpgradeAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesStartExtensionUpgradeOptionalParams
  ): Promise<void>;
  /**
   * Gets the status of the latest virtual machine scale set rolling upgrade.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  getLatest(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetRollingUpgradesGetLatestOptionalParams
  ): Promise<VirtualMachineScaleSetRollingUpgradesGetLatestResponse>;
}
