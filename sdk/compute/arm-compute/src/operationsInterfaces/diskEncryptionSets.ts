import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DiskEncryptionSet,
  DiskEncryptionSetsListByResourceGroupOptionalParams,
  DiskEncryptionSetsListOptionalParams,
  DiskEncryptionSetsListAssociatedResourcesOptionalParams,
  DiskEncryptionSetsCreateOrUpdateOptionalParams,
  DiskEncryptionSetsCreateOrUpdateResponse,
  DiskEncryptionSetUpdate,
  DiskEncryptionSetsUpdateOptionalParams,
  DiskEncryptionSetsUpdateResponse,
  DiskEncryptionSetsGetOptionalParams,
  DiskEncryptionSetsGetResponse,
  DiskEncryptionSetsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DiskEncryptionSets. */
export interface DiskEncryptionSets {
  /**
   * Lists all the disk encryption sets under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DiskEncryptionSetsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DiskEncryptionSet>;
  /**
   * Lists all the disk encryption sets under a subscription.
   * @param options The options parameters.
   */
  list(
    options?: DiskEncryptionSetsListOptionalParams
  ): PagedAsyncIterableIterator<DiskEncryptionSet>;
  /**
   * Lists all resources that are encrypted with this disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  listAssociatedResources(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsListAssociatedResourcesOptionalParams
  ): PagedAsyncIterableIterator<string>;
  /**
   * Creates or updates a disk encryption set
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk encryption
   *                          set operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: DiskEncryptionSet,
    options?: DiskEncryptionSetsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskEncryptionSetsCreateOrUpdateResponse>,
      DiskEncryptionSetsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a disk encryption set
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk encryption
   *                          set operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: DiskEncryptionSet,
    options?: DiskEncryptionSetsCreateOrUpdateOptionalParams
  ): Promise<DiskEncryptionSetsCreateOrUpdateResponse>;
  /**
   * Updates (patches) a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
   *                          encryption set operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: DiskEncryptionSetUpdate,
    options?: DiskEncryptionSetsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskEncryptionSetsUpdateResponse>,
      DiskEncryptionSetsUpdateResponse
    >
  >;
  /**
   * Updates (patches) a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
   *                          encryption set operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    diskEncryptionSet: DiskEncryptionSetUpdate,
    options?: DiskEncryptionSetsUpdateOptionalParams
  ): Promise<DiskEncryptionSetsUpdateResponse>;
  /**
   * Gets information about a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsGetOptionalParams
  ): Promise<DiskEncryptionSetsGetResponse>;
  /**
   * Deletes a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a disk encryption set.
   * @param resourceGroupName The name of the resource group.
   * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
   *                              can't be changed after the disk encryption set is created. Supported characters for the name are
   *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    diskEncryptionSetName: string,
    options?: DiskEncryptionSetsDeleteOptionalParams
  ): Promise<void>;
}
