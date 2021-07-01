import {
  VirtualMachineImagesEdgeZoneGetOptionalParams,
  VirtualMachineImagesEdgeZoneGetResponse,
  VirtualMachineImagesEdgeZoneListOptionalParams,
  VirtualMachineImagesEdgeZoneListResponse,
  VirtualMachineImagesEdgeZoneListOffersOptionalParams,
  VirtualMachineImagesEdgeZoneListOffersResponse,
  VirtualMachineImagesEdgeZoneListPublishersOptionalParams,
  VirtualMachineImagesEdgeZoneListPublishersResponse,
  VirtualMachineImagesEdgeZoneListSkusOptionalParams,
  VirtualMachineImagesEdgeZoneListSkusResponse
} from "../models";

/** Interface representing a VirtualMachineImagesEdgeZone. */
export interface VirtualMachineImagesEdgeZone {
  /**
   * Gets a virtual machine image in an edge zone.
   * @param location The name of a supported Azure region.
   * @param edgeZone The name of the edge zone.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param skus A valid image SKU.
   * @param version A valid image SKU version.
   * @param options The options parameters.
   */
  get(
    location: string,
    edgeZone: string,
    publisherName: string,
    offer: string,
    skus: string,
    version: string,
    options?: VirtualMachineImagesEdgeZoneGetOptionalParams
  ): Promise<VirtualMachineImagesEdgeZoneGetResponse>;
  /**
   * Gets a list of all virtual machine image versions for the specified location, edge zone, publisher,
   * offer, and SKU.
   * @param location The name of a supported Azure region.
   * @param edgeZone The name of the edge zone.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param skus A valid image SKU.
   * @param options The options parameters.
   */
  list(
    location: string,
    edgeZone: string,
    publisherName: string,
    offer: string,
    skus: string,
    options?: VirtualMachineImagesEdgeZoneListOptionalParams
  ): Promise<VirtualMachineImagesEdgeZoneListResponse>;
  /**
   * Gets a list of virtual machine image offers for the specified location, edge zone and publisher.
   * @param location The name of a supported Azure region.
   * @param edgeZone The name of the edge zone.
   * @param publisherName A valid image publisher.
   * @param options The options parameters.
   */
  listOffers(
    location: string,
    edgeZone: string,
    publisherName: string,
    options?: VirtualMachineImagesEdgeZoneListOffersOptionalParams
  ): Promise<VirtualMachineImagesEdgeZoneListOffersResponse>;
  /**
   * Gets a list of virtual machine image publishers for the specified Azure location and edge zone.
   * @param location The name of a supported Azure region.
   * @param edgeZone The name of the edge zone.
   * @param options The options parameters.
   */
  listPublishers(
    location: string,
    edgeZone: string,
    options?: VirtualMachineImagesEdgeZoneListPublishersOptionalParams
  ): Promise<VirtualMachineImagesEdgeZoneListPublishersResponse>;
  /**
   * Gets a list of virtual machine image SKUs for the specified location, edge zone, publisher, and
   * offer.
   * @param location The name of a supported Azure region.
   * @param edgeZone The name of the edge zone.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param options The options parameters.
   */
  listSkus(
    location: string,
    edgeZone: string,
    publisherName: string,
    offer: string,
    options?: VirtualMachineImagesEdgeZoneListSkusOptionalParams
  ): Promise<VirtualMachineImagesEdgeZoneListSkusResponse>;
}
