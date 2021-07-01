import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Snapshot,
  SnapshotsListByResourceGroupOptionalParams,
  SnapshotsListOptionalParams,
  SnapshotsCreateOrUpdateOptionalParams,
  SnapshotsCreateOrUpdateResponse,
  SnapshotUpdate,
  SnapshotsUpdateOptionalParams,
  SnapshotsUpdateResponse,
  SnapshotsGetOptionalParams,
  SnapshotsGetResponse,
  SnapshotsDeleteOptionalParams,
  GrantAccessData,
  SnapshotsGrantAccessOptionalParams,
  SnapshotsGrantAccessResponse,
  SnapshotsRevokeAccessOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Snapshots. */
export interface Snapshots {
  /**
   * Lists snapshots under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SnapshotsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Snapshot>;
  /**
   * Lists snapshots under a subscription.
   * @param options The options parameters.
   */
  list(
    options?: SnapshotsListOptionalParams
  ): PagedAsyncIterableIterator<Snapshot>;
  /**
   * Creates or updates a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Put disk operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: Snapshot,
    options?: SnapshotsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SnapshotsCreateOrUpdateResponse>,
      SnapshotsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Put disk operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: Snapshot,
    options?: SnapshotsCreateOrUpdateOptionalParams
  ): Promise<SnapshotsCreateOrUpdateResponse>;
  /**
   * Updates (patches) a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Patch snapshot operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: SnapshotUpdate,
    options?: SnapshotsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SnapshotsUpdateResponse>,
      SnapshotsUpdateResponse
    >
  >;
  /**
   * Updates (patches) a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Patch snapshot operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: SnapshotUpdate,
    options?: SnapshotsUpdateOptionalParams
  ): Promise<SnapshotsUpdateResponse>;
  /**
   * Gets information about a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsGetOptionalParams
  ): Promise<SnapshotsGetResponse>;
  /**
   * Deletes a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Grants access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get snapshot access operation.
   * @param options The options parameters.
   */
  beginGrantAccess(
    resourceGroupName: string,
    snapshotName: string,
    grantAccessData: GrantAccessData,
    options?: SnapshotsGrantAccessOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SnapshotsGrantAccessResponse>,
      SnapshotsGrantAccessResponse
    >
  >;
  /**
   * Grants access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get snapshot access operation.
   * @param options The options parameters.
   */
  beginGrantAccessAndWait(
    resourceGroupName: string,
    snapshotName: string,
    grantAccessData: GrantAccessData,
    options?: SnapshotsGrantAccessOptionalParams
  ): Promise<SnapshotsGrantAccessResponse>;
  /**
   * Revokes access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  beginRevokeAccess(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsRevokeAccessOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Revokes access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  beginRevokeAccessAndWait(
    resourceGroupName: string,
    snapshotName: string,
    options?: SnapshotsRevokeAccessOptionalParams
  ): Promise<void>;
}
