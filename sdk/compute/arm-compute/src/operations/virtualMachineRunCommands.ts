import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachineRunCommands } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RunCommandDocumentBase,
  VirtualMachineRunCommandsListNextOptionalParams,
  VirtualMachineRunCommandsListOptionalParams,
  VirtualMachineRunCommand,
  VirtualMachineRunCommandsListByVirtualMachineNextOptionalParams,
  VirtualMachineRunCommandsListByVirtualMachineOptionalParams,
  VirtualMachineRunCommandsListResponse,
  VirtualMachineRunCommandsGetOptionalParams,
  VirtualMachineRunCommandsGetResponse,
  VirtualMachineRunCommandsCreateOrUpdateOptionalParams,
  VirtualMachineRunCommandsCreateOrUpdateResponse,
  VirtualMachineRunCommandUpdate,
  VirtualMachineRunCommandsUpdateOptionalParams,
  VirtualMachineRunCommandsUpdateResponse,
  VirtualMachineRunCommandsDeleteOptionalParams,
  VirtualMachineRunCommandsGetByVirtualMachineOptionalParams,
  VirtualMachineRunCommandsGetByVirtualMachineResponse,
  VirtualMachineRunCommandsListByVirtualMachineResponse,
  VirtualMachineRunCommandsListNextResponse,
  VirtualMachineRunCommandsListByVirtualMachineNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a VirtualMachineRunCommands. */
export class VirtualMachineRunCommandsImpl
  implements VirtualMachineRunCommands {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualMachineRunCommands class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all available run commands for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams
  ): PagedAsyncIterableIterator<RunCommandDocumentBase> {
    const iter = this.listPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams
  ): AsyncIterableIterator<RunCommandDocumentBase[]> {
    let result = await this._list(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams
  ): AsyncIterableIterator<RunCommandDocumentBase> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * The operation to get all run commands of a Virtual Machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param options The options parameters.
   */
  public listByVirtualMachine(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineRunCommand> {
    const iter = this.listByVirtualMachinePagingAll(
      resourceGroupName,
      vmName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByVirtualMachinePagingPage(
          resourceGroupName,
          vmName,
          options
        );
      }
    };
  }

  private async *listByVirtualMachinePagingPage(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams
  ): AsyncIterableIterator<VirtualMachineRunCommand[]> {
    let result = await this._listByVirtualMachine(
      resourceGroupName,
      vmName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByVirtualMachineNext(
        resourceGroupName,
        vmName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByVirtualMachinePagingAll(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams
  ): AsyncIterableIterator<VirtualMachineRunCommand> {
    for await (const page of this.listByVirtualMachinePagingPage(
      resourceGroupName,
      vmName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all available run commands for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: VirtualMachineRunCommandsListOptionalParams
  ): Promise<VirtualMachineRunCommandsListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec
    );
  }

  /**
   * Gets specific run command for a subscription in a location.
   * @param location The location upon which run commands is queried.
   * @param commandId The command id.
   * @param options The options parameters.
   */
  get(
    location: string,
    commandId: string,
    options?: VirtualMachineRunCommandsGetOptionalParams
  ): Promise<VirtualMachineRunCommandsGetResponse> {
    return this.client.sendOperationRequest(
      { location, commandId, options },
      getOperationSpec
    );
  }

  /**
   * The operation to create or update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be created or updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineRunCommandsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineRunCommandsCreateOrUpdateResponse>,
      VirtualMachineRunCommandsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineRunCommandsCreateOrUpdateResponse> => {
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
      { resourceGroupName, vmName, runCommandName, runCommand, options },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to create or update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be created or updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineRunCommandsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineRunCommandsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vmName,
      runCommandName,
      runCommand,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineRunCommandsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineRunCommandsUpdateResponse>,
      VirtualMachineRunCommandsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineRunCommandsUpdateResponse> => {
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
      { resourceGroupName, vmName, runCommandName, runCommand, options },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to update the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be updated.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineRunCommandsUpdateOptionalParams
  ): Promise<VirtualMachineRunCommandsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vmName,
      runCommandName,
      runCommand,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be deleted.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsDeleteOptionalParams
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
      { resourceGroupName, vmName, runCommandName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to delete the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine where the run command should be deleted.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vmName,
      runCommandName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get the run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  getByVirtualMachine(
    resourceGroupName: string,
    vmName: string,
    runCommandName: string,
    options?: VirtualMachineRunCommandsGetByVirtualMachineOptionalParams
  ): Promise<VirtualMachineRunCommandsGetByVirtualMachineResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, runCommandName, options },
      getByVirtualMachineOperationSpec
    );
  }

  /**
   * The operation to get all run commands of a Virtual Machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param options The options parameters.
   */
  private _listByVirtualMachine(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineOptionalParams
  ): Promise<VirtualMachineRunCommandsListByVirtualMachineResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, options },
      listByVirtualMachineOperationSpec
    );
  }

  /**
   * ListNext
   * @param location The location upon which run commands is queried.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: VirtualMachineRunCommandsListNextOptionalParams
  ): Promise<VirtualMachineRunCommandsListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByVirtualMachineNext
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine containing the run command.
   * @param nextLink The nextLink from the previous successful call to the ListByVirtualMachine method.
   * @param options The options parameters.
   */
  private _listByVirtualMachineNext(
    resourceGroupName: string,
    vmName: string,
    nextLink: string,
    options?: VirtualMachineRunCommandsListByVirtualMachineNextOptionalParams
  ): Promise<VirtualMachineRunCommandsListByVirtualMachineNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmName, nextLink, options },
      listByVirtualMachineNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/runCommands/{commandId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandDocument
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1,
    Parameters.commandId
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    201: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    202: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    204: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.runCommand,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    201: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    202: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    204: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.runCommand1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const getByVirtualMachineOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands/{runCommandName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listByVirtualMachineOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/runCommands",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommandsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RunCommandListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location1
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listByVirtualMachineNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommandsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.vmName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
