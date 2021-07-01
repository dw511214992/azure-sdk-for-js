import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CloudServiceOperatingSystems } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import {
  OSVersion,
  CloudServiceOperatingSystemsListOSVersionsNextOptionalParams,
  CloudServiceOperatingSystemsListOSVersionsOptionalParams,
  OSFamily,
  CloudServiceOperatingSystemsListOSFamiliesNextOptionalParams,
  CloudServiceOperatingSystemsListOSFamiliesOptionalParams,
  CloudServiceOperatingSystemsGetOSVersionOptionalParams,
  CloudServiceOperatingSystemsGetOSVersionResponse,
  CloudServiceOperatingSystemsListOSVersionsResponse,
  CloudServiceOperatingSystemsGetOSFamilyOptionalParams,
  CloudServiceOperatingSystemsGetOSFamilyResponse,
  CloudServiceOperatingSystemsListOSFamiliesResponse,
  CloudServiceOperatingSystemsListOSVersionsNextResponse,
  CloudServiceOperatingSystemsListOSFamiliesNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a CloudServiceOperatingSystems. */
export class CloudServiceOperatingSystemsImpl
  implements CloudServiceOperatingSystems {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class CloudServiceOperatingSystems class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of all guest operating system versions available to be specified in the XML service
   * configuration (.cscfg) for a cloud service. Use nextLink property in the response to get the next
   * page of OS versions. Do this till nextLink is null to fetch all the OS versions.
   * @param location Name of the location that the OS versions pertain to.
   * @param options The options parameters.
   */
  public listOSVersions(
    location: string,
    options?: CloudServiceOperatingSystemsListOSVersionsOptionalParams
  ): PagedAsyncIterableIterator<OSVersion> {
    const iter = this.listOSVersionsPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOSVersionsPagingPage(location, options);
      }
    };
  }

  private async *listOSVersionsPagingPage(
    location: string,
    options?: CloudServiceOperatingSystemsListOSVersionsOptionalParams
  ): AsyncIterableIterator<OSVersion[]> {
    let result = await this._listOSVersions(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOSVersionsNext(
        location,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOSVersionsPagingAll(
    location: string,
    options?: CloudServiceOperatingSystemsListOSVersionsOptionalParams
  ): AsyncIterableIterator<OSVersion> {
    for await (const page of this.listOSVersionsPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of all guest operating system families available to be specified in the XML service
   * configuration (.cscfg) for a cloud service. Use nextLink property in the response to get the next
   * page of OS Families. Do this till nextLink is null to fetch all the OS Families.
   * @param location Name of the location that the OS families pertain to.
   * @param options The options parameters.
   */
  public listOSFamilies(
    location: string,
    options?: CloudServiceOperatingSystemsListOSFamiliesOptionalParams
  ): PagedAsyncIterableIterator<OSFamily> {
    const iter = this.listOSFamiliesPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOSFamiliesPagingPage(location, options);
      }
    };
  }

  private async *listOSFamiliesPagingPage(
    location: string,
    options?: CloudServiceOperatingSystemsListOSFamiliesOptionalParams
  ): AsyncIterableIterator<OSFamily[]> {
    let result = await this._listOSFamilies(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOSFamiliesNext(
        location,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOSFamiliesPagingAll(
    location: string,
    options?: CloudServiceOperatingSystemsListOSFamiliesOptionalParams
  ): AsyncIterableIterator<OSFamily> {
    for await (const page of this.listOSFamiliesPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Gets properties of a guest operating system version that can be specified in the XML service
   * configuration (.cscfg) for a cloud service.
   * @param location Name of the location that the OS version pertains to.
   * @param osVersionName Name of the OS version.
   * @param options The options parameters.
   */
  getOSVersion(
    location: string,
    osVersionName: string,
    options?: CloudServiceOperatingSystemsGetOSVersionOptionalParams
  ): Promise<CloudServiceOperatingSystemsGetOSVersionResponse> {
    return this.client.sendOperationRequest(
      { location, osVersionName, options },
      getOSVersionOperationSpec
    );
  }

  /**
   * Gets a list of all guest operating system versions available to be specified in the XML service
   * configuration (.cscfg) for a cloud service. Use nextLink property in the response to get the next
   * page of OS versions. Do this till nextLink is null to fetch all the OS versions.
   * @param location Name of the location that the OS versions pertain to.
   * @param options The options parameters.
   */
  private _listOSVersions(
    location: string,
    options?: CloudServiceOperatingSystemsListOSVersionsOptionalParams
  ): Promise<CloudServiceOperatingSystemsListOSVersionsResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOSVersionsOperationSpec
    );
  }

  /**
   * Gets properties of a guest operating system family that can be specified in the XML service
   * configuration (.cscfg) for a cloud service.
   * @param location Name of the location that the OS family pertains to.
   * @param osFamilyName Name of the OS family.
   * @param options The options parameters.
   */
  getOSFamily(
    location: string,
    osFamilyName: string,
    options?: CloudServiceOperatingSystemsGetOSFamilyOptionalParams
  ): Promise<CloudServiceOperatingSystemsGetOSFamilyResponse> {
    return this.client.sendOperationRequest(
      { location, osFamilyName, options },
      getOSFamilyOperationSpec
    );
  }

  /**
   * Gets a list of all guest operating system families available to be specified in the XML service
   * configuration (.cscfg) for a cloud service. Use nextLink property in the response to get the next
   * page of OS Families. Do this till nextLink is null to fetch all the OS Families.
   * @param location Name of the location that the OS families pertain to.
   * @param options The options parameters.
   */
  private _listOSFamilies(
    location: string,
    options?: CloudServiceOperatingSystemsListOSFamiliesOptionalParams
  ): Promise<CloudServiceOperatingSystemsListOSFamiliesResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOSFamiliesOperationSpec
    );
  }

  /**
   * ListOSVersionsNext
   * @param location Name of the location that the OS versions pertain to.
   * @param nextLink The nextLink from the previous successful call to the ListOSVersions method.
   * @param options The options parameters.
   */
  private _listOSVersionsNext(
    location: string,
    nextLink: string,
    options?: CloudServiceOperatingSystemsListOSVersionsNextOptionalParams
  ): Promise<CloudServiceOperatingSystemsListOSVersionsNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listOSVersionsNextOperationSpec
    );
  }

  /**
   * ListOSFamiliesNext
   * @param location Name of the location that the OS families pertain to.
   * @param nextLink The nextLink from the previous successful call to the ListOSFamilies method.
   * @param options The options parameters.
   */
  private _listOSFamiliesNext(
    location: string,
    nextLink: string,
    options?: CloudServiceOperatingSystemsListOSFamiliesNextOptionalParams
  ): Promise<CloudServiceOperatingSystemsListOSFamiliesNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listOSFamiliesNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOSVersionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/cloudServiceOsVersions/{osVersionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OSVersion
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
    Parameters.osVersionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOSVersionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/cloudServiceOsVersions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OSVersionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOSFamilyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/cloudServiceOsFamilies/{osFamilyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OSFamily
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
    Parameters.osFamilyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOSFamiliesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/cloudServiceOsFamilies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OSFamilyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOSVersionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OSVersionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOSFamiliesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OSFamilyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
