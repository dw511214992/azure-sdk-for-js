import { VirtualMachineExtensions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineExtension,
  VirtualMachineExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineExtensionsCreateOrUpdateResponse,
  VirtualMachineExtensionUpdate,
  VirtualMachineExtensionsUpdateOptionalParams,
  VirtualMachineExtensionsUpdateResponse,
  VirtualMachineExtensionsDeleteOptionalParams,
  VirtualMachineExtensionsGetOptionalParams,
  VirtualMachineExtensionsGetResponse,
  VirtualMachineExtensionsListOptionalParams,
  VirtualMachineExtensionsListResponse
} from "../models";

/** Class representing a VirtualMachineExtensions. */
export class VirtualMachineExtensionsImpl implements VirtualMachineExtensions {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualMachineExtensions class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be created or updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineExtension,
    options?: VirtualMachineExtensionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineExtensionsCreateOrUpdateResponse>,
      VirtualMachineExtensionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineExtensionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        vmName,
        vmExtensionName,
        extensionParameters,
        options
      },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be created or updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineExtension,
    options?: VirtualMachineExtensionsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineExtensionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vmName,
      vmExtensionName,
      extensionParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineExtensionUpdate,
    options?: VirtualMachineExtensionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineExtensionsUpdateResponse>,
      VirtualMachineExtensionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineExtensionsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        vmName,
        vmExtensionName,
        extensionParameters,
        options
      },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be updated.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineExtensionUpdate,
    options?: VirtualMachineExtensionsUpdateOptionalParams
  ): Promise<VirtualMachineExtensionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vmName,
      vmExtensionName,
      extensionParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be deleted.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    options?: VirtualMachineExtensionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { resourceGroupName, vmName, vmExtensionName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the extension should be deleted.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    options?: VirtualMachineExtensionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vmName,
      vmExtensionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmName: string,
    vmExtensionName: string,
    options?: VirtualMachineExtensionsGetOptionalParams
  ): Promise<VirtualMachineExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, vmExtensionName, options },
      getOperationSpec
    );
  }

  /**
   * The operation to get all extensions of a Virtual Machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the extension.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineExtensionsListOptionalParams
  ): Promise<VirtualMachineExtensionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    201: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    202: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    204: {
      bodyMapper: Mappers.VirtualMachineExtension
    }
  },
  requestBody: Parameters.extensionParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName,
    Parameters.vmExtensionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    201: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    202: {
      bodyMapper: Mappers.VirtualMachineExtension
    },
    204: {
      bodyMapper: Mappers.VirtualMachineExtension
    }
  },
  requestBody: Parameters.extensionParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName,
    Parameters.vmExtensionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName,
    Parameters.vmExtensionName
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions/{vmExtensionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineExtension
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName,
    Parameters.vmExtensionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/extensions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineExtensionsListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
