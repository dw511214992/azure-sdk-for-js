import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Disk,
  DisksListByResourceGroupOptionalParams,
  DisksListOptionalParams,
  DisksCreateOrUpdateOptionalParams,
  DisksCreateOrUpdateResponse,
  DiskUpdate,
  DisksUpdateOptionalParams,
  DisksUpdateResponse,
  DisksGetOptionalParams,
  DisksGetResponse,
  DisksDeleteOptionalParams,
  GrantAccessData,
  DisksGrantAccessOptionalParams,
  DisksGrantAccessResponse,
  DisksRevokeAccessOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Disks. */
export interface Disks {
  /**
   * Lists all the disks under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DisksListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Disk>;
  /**
   * Lists all the disks under a subscription.
   * @param options The options parameters.
   */
  list(options?: DisksListOptionalParams): PagedAsyncIterableIterator<Disk>;
  /**
   * Creates or updates a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param disk Disk object supplied in the body of the Put disk operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    diskName: string,
    disk: Disk,
    options?: DisksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DisksCreateOrUpdateResponse>,
      DisksCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param disk Disk object supplied in the body of the Put disk operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    diskName: string,
    disk: Disk,
    options?: DisksCreateOrUpdateOptionalParams
  ): Promise<DisksCreateOrUpdateResponse>;
  /**
   * Updates (patches) a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param disk Disk object supplied in the body of the Patch disk operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    diskName: string,
    disk: DiskUpdate,
    options?: DisksUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<DisksUpdateResponse>, DisksUpdateResponse>
  >;
  /**
   * Updates (patches) a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param disk Disk object supplied in the body of the Patch disk operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    diskName: string,
    disk: DiskUpdate,
    options?: DisksUpdateOptionalParams
  ): Promise<DisksUpdateResponse>;
  /**
   * Gets information about a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    diskName: string,
    options?: DisksGetOptionalParams
  ): Promise<DisksGetResponse>;
  /**
   * Deletes a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    diskName: string,
    options?: DisksDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    diskName: string,
    options?: DisksDeleteOptionalParams
  ): Promise<void>;
  /**
   * Grants access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param options The options parameters.
   */
  beginGrantAccess(
    resourceGroupName: string,
    diskName: string,
    grantAccessData: GrantAccessData,
    options?: DisksGrantAccessOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DisksGrantAccessResponse>,
      DisksGrantAccessResponse
    >
  >;
  /**
   * Grants access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param options The options parameters.
   */
  beginGrantAccessAndWait(
    resourceGroupName: string,
    diskName: string,
    grantAccessData: GrantAccessData,
    options?: DisksGrantAccessOptionalParams
  ): Promise<DisksGrantAccessResponse>;
  /**
   * Revokes access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  beginRevokeAccess(
    resourceGroupName: string,
    diskName: string,
    options?: DisksRevokeAccessOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Revokes access to a disk.
   * @param resourceGroupName The name of the resource group.
   * @param diskName The name of the managed disk that is being created. The name can't be changed after
   *                 the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   *                 length is 80 characters.
   * @param options The options parameters.
   */
  beginRevokeAccessAndWait(
    resourceGroupName: string,
    diskName: string,
    options?: DisksRevokeAccessOptionalParams
  ): Promise<void>;
}
