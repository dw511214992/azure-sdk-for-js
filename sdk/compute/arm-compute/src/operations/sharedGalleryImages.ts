import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SharedGalleryImages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import {
  SharedGalleryImage,
  SharedGalleryImagesListNextOptionalParams,
  SharedGalleryImagesListOptionalParams,
  SharedGalleryImagesListResponse,
  SharedGalleryImagesGetOptionalParams,
  SharedGalleryImagesGetResponse,
  SharedGalleryImagesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a SharedGalleryImages. */
export class SharedGalleryImagesImpl implements SharedGalleryImages {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class SharedGalleryImages class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * List shared gallery images by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param options The options parameters.
   */
  public list(
    location: string,
    galleryUniqueName: string,
    options?: SharedGalleryImagesListOptionalParams
  ): PagedAsyncIterableIterator<SharedGalleryImage> {
    const iter = this.listPagingAll(location, galleryUniqueName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, galleryUniqueName, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    galleryUniqueName: string,
    options?: SharedGalleryImagesListOptionalParams
  ): AsyncIterableIterator<SharedGalleryImage[]> {
    let result = await this._list(location, galleryUniqueName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        location,
        galleryUniqueName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    location: string,
    galleryUniqueName: string,
    options?: SharedGalleryImagesListOptionalParams
  ): AsyncIterableIterator<SharedGalleryImage> {
    for await (const page of this.listPagingPage(
      location,
      galleryUniqueName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List shared gallery images by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    galleryUniqueName: string,
    options?: SharedGalleryImagesListOptionalParams
  ): Promise<SharedGalleryImagesListResponse> {
    return this.client.sendOperationRequest(
      { location, galleryUniqueName, options },
      listOperationSpec
    );
  }

  /**
   * Get a shared gallery image by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  get(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?: SharedGalleryImagesGetOptionalParams
  ): Promise<SharedGalleryImagesGetResponse> {
    return this.client.sendOperationRequest(
      { location, galleryUniqueName, galleryImageName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    galleryUniqueName: string,
    nextLink: string,
    options?: SharedGalleryImagesListNextOptionalParams
  ): Promise<SharedGalleryImagesListNextResponse> {
    return this.client.sendOperationRequest(
      { location, galleryUniqueName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3, Parameters.sharedTo],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.galleryUniqueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images/{galleryImageName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.galleryImageName,
    Parameters.galleryUniqueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3, Parameters.sharedTo],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location,
    Parameters.galleryUniqueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
