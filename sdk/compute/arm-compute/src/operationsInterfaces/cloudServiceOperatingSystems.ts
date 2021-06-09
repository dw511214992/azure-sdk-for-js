import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  OSVersion,
  CloudServiceOperatingSystemsListOSVersionsOptionalParams,
  OSFamily,
  CloudServiceOperatingSystemsListOSFamiliesOptionalParams,
  CloudServiceOperatingSystemsGetOSVersionOptionalParams,
  CloudServiceOperatingSystemsGetOSVersionResponse,
  CloudServiceOperatingSystemsGetOSFamilyOptionalParams,
  CloudServiceOperatingSystemsGetOSFamilyResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CloudServiceOperatingSystems. */
export interface CloudServiceOperatingSystems {
  /**
   * Gets a list of all guest operating system versions available to be specified in the XML service
   * configuration (.cscfg) for a cloud service. Use nextLink property in the response to get the next
   * page of OS versions. Do this till nextLink is null to fetch all the OS versions.
   * @param location Name of the location that the OS versions pertain to.
   * @param options The options parameters.
   */
  listOSVersions(
    location: string,
    options?: CloudServiceOperatingSystemsListOSVersionsOptionalParams
  ): PagedAsyncIterableIterator<OSVersion>;
  /**
   * Gets a list of all guest operating system families available to be specified in the XML service
   * configuration (.cscfg) for a cloud service. Use nextLink property in the response to get the next
   * page of OS Families. Do this till nextLink is null to fetch all the OS Families.
   * @param location Name of the location that the OS families pertain to.
   * @param options The options parameters.
   */
  listOSFamilies(
    location: string,
    options?: CloudServiceOperatingSystemsListOSFamiliesOptionalParams
  ): PagedAsyncIterableIterator<OSFamily>;
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
  ): Promise<CloudServiceOperatingSystemsGetOSVersionResponse>;
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
  ): Promise<CloudServiceOperatingSystemsGetOSFamilyResponse>;
}
