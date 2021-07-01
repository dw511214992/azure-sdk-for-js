import { VirtualMachineImagesEdgeZone } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
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

/** Class representing a VirtualMachineImagesEdgeZone. */
export class VirtualMachineImagesEdgeZoneImpl
  implements VirtualMachineImagesEdgeZone {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualMachineImagesEdgeZone class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

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
  ): Promise<VirtualMachineImagesEdgeZoneGetResponse> {
    return this.client.sendOperationRequest(
      { location, edgeZone, publisherName, offer, skus, version, options },
      getOperationSpec
    );
  }

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
  ): Promise<VirtualMachineImagesEdgeZoneListResponse> {
    return this.client.sendOperationRequest(
      { location, edgeZone, publisherName, offer, skus, options },
      listOperationSpec
    );
  }

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
  ): Promise<VirtualMachineImagesEdgeZoneListOffersResponse> {
    return this.client.sendOperationRequest(
      { location, edgeZone, publisherName, options },
      listOffersOperationSpec
    );
  }

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
  ): Promise<VirtualMachineImagesEdgeZoneListPublishersResponse> {
    return this.client.sendOperationRequest(
      { location, edgeZone, options },
      listPublishersOperationSpec
    );
  }

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
  ): Promise<VirtualMachineImagesEdgeZoneListSkusResponse> {
    return this.client.sendOperationRequest(
      { location, edgeZone, publisherName, offer, options },
      listSkusOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions/{version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.publisherName,
    Parameters.version,
    Parameters.offer,
    Parameters.skus,
    Parameters.edgeZone
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineImageResource"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.publisherName,
    Parameters.offer,
    Parameters.skus,
    Parameters.edgeZone
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOffersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineImageResource"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.publisherName,
    Parameters.edgeZone
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPublishersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineImageResource"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.edgeZone
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSkusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineImageResource"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.publisherName,
    Parameters.offer,
    Parameters.edgeZone
  ],
  headerParameters: [Parameters.accept],
  serializer
};
