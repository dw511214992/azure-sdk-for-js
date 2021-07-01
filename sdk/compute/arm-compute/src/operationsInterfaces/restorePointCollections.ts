import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RestorePointCollection,
  RestorePointCollectionsListOptionalParams,
  RestorePointCollectionsListAllOptionalParams,
  RestorePointCollectionsCreateOrUpdateOptionalParams,
  RestorePointCollectionsCreateOrUpdateResponse,
  RestorePointCollectionUpdate,
  RestorePointCollectionsUpdateOptionalParams,
  RestorePointCollectionsUpdateResponse,
  RestorePointCollectionsDeleteOptionalParams,
  RestorePointCollectionsGetOptionalParams,
  RestorePointCollectionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RestorePointCollections. */
export interface RestorePointCollections {
  /**
   * Gets the list of restore point collections in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: RestorePointCollectionsListOptionalParams
  ): PagedAsyncIterableIterator<RestorePointCollection>;
  /**
   * Gets the list of restore point collections in the subscription. Use nextLink property in the
   * response to get the next page of restore point collections. Do this till nextLink is not null to
   * fetch all the restore point collections.
   * @param options The options parameters.
   */
  listAll(
    options?: RestorePointCollectionsListAllOptionalParams
  ): PagedAsyncIterableIterator<RestorePointCollection>;
  /**
   * The operation to create or update the restore point collection. Please refer to
   * https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags
   * may be modified.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param parameters Parameters supplied to the Create or Update restore point collection operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    restorePointCollectionName: string,
    parameters: RestorePointCollection,
    options?: RestorePointCollectionsCreateOrUpdateOptionalParams
  ): Promise<RestorePointCollectionsCreateOrUpdateResponse>;
  /**
   * The operation to update the restore point collection.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param parameters Parameters supplied to the Update restore point collection operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    restorePointCollectionName: string,
    parameters: RestorePointCollectionUpdate,
    options?: RestorePointCollectionsUpdateOptionalParams
  ): Promise<RestorePointCollectionsUpdateResponse>;
  /**
   * The operation to delete the restore point collection. This operation will also delete all the
   * contained restore points.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    restorePointCollectionName: string,
    options?: RestorePointCollectionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to delete the restore point collection. This operation will also delete all the
   * contained restore points.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    options?: RestorePointCollectionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * The operation to get the restore point collection.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    restorePointCollectionName: string,
    options?: RestorePointCollectionsGetOptionalParams
  ): Promise<RestorePointCollectionsGetResponse>;
}
