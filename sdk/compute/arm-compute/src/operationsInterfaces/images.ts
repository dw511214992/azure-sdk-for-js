import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Image,
  ImagesListByResourceGroupOptionalParams,
  ImagesListOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesCreateOrUpdateResponse,
  ImageUpdate,
  ImagesUpdateOptionalParams,
  ImagesUpdateResponse,
  ImagesDeleteOptionalParams,
  ImagesGetOptionalParams,
  ImagesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Images. */
export interface Images {
  /**
   * Gets the list of images under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ImagesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Image>;
  /**
   * Gets the list of Images in the subscription. Use nextLink property in the response to get the next
   * page of Images. Do this till nextLink is null to fetch all the Images.
   * @param options The options parameters.
   */
  list(options?: ImagesListOptionalParams): PagedAsyncIterableIterator<Image>;
  /**
   * Create or update an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param parameters Parameters supplied to the Create Image operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    imageName: string,
    parameters: Image,
    options?: ImagesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ImagesCreateOrUpdateResponse>,
      ImagesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param parameters Parameters supplied to the Create Image operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    imageName: string,
    parameters: Image,
    options?: ImagesCreateOrUpdateOptionalParams
  ): Promise<ImagesCreateOrUpdateResponse>;
  /**
   * Update an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param parameters Parameters supplied to the Update Image operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    imageName: string,
    parameters: ImageUpdate,
    options?: ImagesUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<ImagesUpdateResponse>, ImagesUpdateResponse>
  >;
  /**
   * Update an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param parameters Parameters supplied to the Update Image operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    imageName: string,
    parameters: ImageUpdate,
    options?: ImagesUpdateOptionalParams
  ): Promise<ImagesUpdateResponse>;
  /**
   * Deletes an Image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an Image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    imageName: string,
    options?: ImagesGetOptionalParams
  ): Promise<ImagesGetResponse>;
}
