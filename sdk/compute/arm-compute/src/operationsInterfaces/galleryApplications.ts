import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GalleryApplication,
  GalleryApplicationsListByGalleryOptionalParams,
  GalleryApplicationsCreateOrUpdateOptionalParams,
  GalleryApplicationsCreateOrUpdateResponse,
  GalleryApplicationUpdate,
  GalleryApplicationsUpdateOptionalParams,
  GalleryApplicationsUpdateResponse,
  GalleryApplicationsGetOptionalParams,
  GalleryApplicationsGetResponse,
  GalleryApplicationsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GalleryApplications. */
export interface GalleryApplications {
  /**
   * List gallery Application Definitions in a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which Application Definitions are
   *                    to be listed.
   * @param options The options parameters.
   */
  listByGallery(
    resourceGroupName: string,
    galleryName: string,
    options?: GalleryApplicationsListByGalleryOptionalParams
  ): PagedAsyncIterableIterator<GalleryApplication>;
  /**
   * Create or update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be created.
   * @param galleryApplicationName The name of the gallery Application Definition to be created or
   *                               updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in
   *                               the middle. The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the create or update gallery Application operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: GalleryApplication,
    options?: GalleryApplicationsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryApplicationsCreateOrUpdateResponse>,
      GalleryApplicationsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be created.
   * @param galleryApplicationName The name of the gallery Application Definition to be created or
   *                               updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed in
   *                               the middle. The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the create or update gallery Application operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: GalleryApplication,
    options?: GalleryApplicationsCreateOrUpdateOptionalParams
  ): Promise<GalleryApplicationsCreateOrUpdateResponse>;
  /**
   * Update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be updated.
   * @param galleryApplicationName The name of the gallery Application Definition to be updated. The
   *                               allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
   *                               The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the update gallery Application operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: GalleryApplicationUpdate,
    options?: GalleryApplicationsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryApplicationsUpdateResponse>,
      GalleryApplicationsUpdateResponse
    >
  >;
  /**
   * Update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be updated.
   * @param galleryApplicationName The name of the gallery Application Definition to be updated. The
   *                               allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
   *                               The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the update gallery Application operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplication: GalleryApplicationUpdate,
    options?: GalleryApplicationsUpdateOptionalParams
  ): Promise<GalleryApplicationsUpdateResponse>;
  /**
   * Retrieves information about a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which the Application Definitions
   *                    are to be retrieved.
   * @param galleryApplicationName The name of the gallery Application Definition to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationsGetOptionalParams
  ): Promise<GalleryApplicationsGetResponse>;
  /**
   * Delete a gallery Application.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be deleted.
   * @param galleryApplicationName The name of the gallery Application Definition to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a gallery Application.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition is
   *                    to be deleted.
   * @param galleryApplicationName The name of the gallery Application Definition to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationsDeleteOptionalParams
  ): Promise<void>;
}
