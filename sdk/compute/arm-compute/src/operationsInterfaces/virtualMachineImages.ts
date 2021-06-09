import {
  VirtualMachineImagesGetOptionalParams,
  VirtualMachineImagesGetResponse,
  VirtualMachineImagesListOptionalParams,
  VirtualMachineImagesListResponse,
  VirtualMachineImagesListOffersOptionalParams,
  VirtualMachineImagesListOffersResponse,
  VirtualMachineImagesListPublishersOptionalParams,
  VirtualMachineImagesListPublishersResponse,
  VirtualMachineImagesListSkusOptionalParams,
  VirtualMachineImagesListSkusResponse
} from "../models";

/** Interface representing a VirtualMachineImages. */
export interface VirtualMachineImages {
  /**
   * Gets a virtual machine image.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param skus A valid image SKU.
   * @param version A valid image SKU version.
   * @param options The options parameters.
   */
  get(
    location: string,
    publisherName: string,
    offer: string,
    skus: string,
    version: string,
    options?: VirtualMachineImagesGetOptionalParams
  ): Promise<VirtualMachineImagesGetResponse>;
  /**
   * Gets a list of all virtual machine image versions for the specified location, publisher, offer, and
   * SKU.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param skus A valid image SKU.
   * @param options The options parameters.
   */
  list(
    location: string,
    publisherName: string,
    offer: string,
    skus: string,
    options?: VirtualMachineImagesListOptionalParams
  ): Promise<VirtualMachineImagesListResponse>;
  /**
   * Gets a list of virtual machine image offers for the specified location and publisher.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param options The options parameters.
   */
  listOffers(
    location: string,
    publisherName: string,
    options?: VirtualMachineImagesListOffersOptionalParams
  ): Promise<VirtualMachineImagesListOffersResponse>;
  /**
   * Gets a list of virtual machine image publishers for the specified Azure location.
   * @param location The name of a supported Azure region.
   * @param options The options parameters.
   */
  listPublishers(
    location: string,
    options?: VirtualMachineImagesListPublishersOptionalParams
  ): Promise<VirtualMachineImagesListPublishersResponse>;
  /**
   * Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param options The options parameters.
   */
  listSkus(
    location: string,
    publisherName: string,
    offer: string,
    options?: VirtualMachineImagesListSkusOptionalParams
  ): Promise<VirtualMachineImagesListSkusResponse>;
}
