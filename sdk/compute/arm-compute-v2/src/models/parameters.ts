import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-http";
import {
  AvailabilitySet as AvailabilitySetMapper,
  AvailabilitySetUpdate as AvailabilitySetUpdateMapper,
  ProximityPlacementGroup as ProximityPlacementGroupMapper,
  ProximityPlacementGroupUpdate as ProximityPlacementGroupUpdateMapper,
  DedicatedHostGroup as DedicatedHostGroupMapper,
  DedicatedHostGroupUpdate as DedicatedHostGroupUpdateMapper,
  DedicatedHost as DedicatedHostMapper,
  DedicatedHostUpdate as DedicatedHostUpdateMapper,
  SshPublicKeyResource as SshPublicKeyResourceMapper,
  SshPublicKeyUpdateResource as SshPublicKeyUpdateResourceMapper,
  VirtualMachineExtension as VirtualMachineExtensionMapper,
  VirtualMachineExtensionUpdate as VirtualMachineExtensionUpdateMapper,
  VirtualMachineCaptureParameters as VirtualMachineCaptureParametersMapper,
  VirtualMachine as VirtualMachineMapper,
  VirtualMachineUpdate as VirtualMachineUpdateMapper,
  VirtualMachineReimageParameters as VirtualMachineReimageParametersMapper,
  VirtualMachineInstallPatchesParameters as VirtualMachineInstallPatchesParametersMapper,
  RunCommandInput as RunCommandInputMapper,
  VirtualMachineScaleSet as VirtualMachineScaleSetMapper,
  VirtualMachineScaleSetUpdate as VirtualMachineScaleSetUpdateMapper,
  VirtualMachineScaleSetVMInstanceIDs as VirtualMachineScaleSetVMInstanceIDsMapper,
  VirtualMachineScaleSetVMInstanceRequiredIDs as VirtualMachineScaleSetVMInstanceRequiredIDsMapper,
  VirtualMachineScaleSetReimageParameters as VirtualMachineScaleSetReimageParametersMapper,
  VMScaleSetConvertToSinglePlacementGroupInput as VMScaleSetConvertToSinglePlacementGroupInputMapper,
  OrchestrationServiceStateInput as OrchestrationServiceStateInputMapper,
  Image as ImageMapper,
  ImageUpdate as ImageUpdateMapper,
  VirtualMachineScaleSetExtension as VirtualMachineScaleSetExtensionMapper,
  VirtualMachineScaleSetExtensionUpdate as VirtualMachineScaleSetExtensionUpdateMapper,
  VirtualMachineScaleSetVMExtension as VirtualMachineScaleSetVMExtensionMapper,
  VirtualMachineScaleSetVMExtensionUpdate as VirtualMachineScaleSetVMExtensionUpdateMapper,
  VirtualMachineScaleSetVMReimageParameters as VirtualMachineScaleSetVMReimageParametersMapper,
  VirtualMachineScaleSetVM as VirtualMachineScaleSetVMMapper,
  RequestRateByIntervalInput as RequestRateByIntervalInputMapper,
  ThrottledRequestsInput as ThrottledRequestsInputMapper,
  VirtualMachineRunCommand as VirtualMachineRunCommandMapper,
  VirtualMachineRunCommandUpdate as VirtualMachineRunCommandUpdateMapper,
  Disk as DiskMapper,
  DiskUpdate as DiskUpdateMapper,
  GrantAccessData as GrantAccessDataMapper,
  Snapshot as SnapshotMapper,
  SnapshotUpdate as SnapshotUpdateMapper,
  DiskEncryptionSet as DiskEncryptionSetMapper,
  DiskEncryptionSetUpdate as DiskEncryptionSetUpdateMapper,
  DiskAccess as DiskAccessMapper,
  DiskAccessUpdate as DiskAccessUpdateMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Gallery as GalleryMapper,
  GalleryUpdate as GalleryUpdateMapper,
  GalleryImage as GalleryImageMapper,
  GalleryImageUpdate as GalleryImageUpdateMapper,
  GalleryImageVersion as GalleryImageVersionMapper,
  GalleryImageVersionUpdate as GalleryImageVersionUpdateMapper,
  GalleryApplication as GalleryApplicationMapper,
  GalleryApplicationUpdate as GalleryApplicationUpdateMapper,
  GalleryApplicationVersion as GalleryApplicationVersionMapper,
  GalleryApplicationVersionUpdate as GalleryApplicationVersionUpdateMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-12-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: AvailabilitySetMapper
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const availabilitySetName: OperationURLParameter = {
  parameterPath: "availabilitySetName",
  mapper: {
    serializedName: "availabilitySetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: AvailabilitySetUpdateMapper
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProximityPlacementGroupMapper
};

export const proximityPlacementGroupName: OperationURLParameter = {
  parameterPath: "proximityPlacementGroupName",
  mapper: {
    serializedName: "proximityPlacementGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProximityPlacementGroupUpdateMapper
};

export const includeColocationStatus: OperationQueryParameter = {
  parameterPath: ["options", "includeColocationStatus"],
  mapper: {
    serializedName: "includeColocationStatus",
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: DedicatedHostGroupMapper
};

export const hostGroupName: OperationURLParameter = {
  parameterPath: "hostGroupName",
  mapper: {
    serializedName: "hostGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: DedicatedHostGroupUpdateMapper
};

export const expand1: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    defaultValue: "instanceView",
    isConstant: true,
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: DedicatedHostMapper
};

export const hostName: OperationURLParameter = {
  parameterPath: "hostName",
  mapper: {
    serializedName: "hostName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: DedicatedHostUpdateMapper
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: SshPublicKeyResourceMapper
};

export const sshPublicKeyName: OperationURLParameter = {
  parameterPath: "sshPublicKeyName",
  mapper: {
    serializedName: "sshPublicKeyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: SshPublicKeyUpdateResourceMapper
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const publisherName: OperationURLParameter = {
  parameterPath: "publisherName",
  mapper: {
    serializedName: "publisherName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const typeParam: OperationURLParameter = {
  parameterPath: "typeParam",
  mapper: {
    serializedName: "type",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const version: OperationURLParameter = {
  parameterPath: "version",
  mapper: {
    serializedName: "version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const orderby: OperationQueryParameter = {
  parameterPath: ["options", "orderby"],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};

export const extensionParameters: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineExtensionMapper
};

export const vmName: OperationURLParameter = {
  parameterPath: "vmName",
  mapper: {
    serializedName: "vmName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vmExtensionName: OperationURLParameter = {
  parameterPath: "vmExtensionName",
  mapper: {
    serializedName: "vmExtensionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const extensionParameters1: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineExtensionUpdateMapper
};

export const offer: OperationURLParameter = {
  parameterPath: "offer",
  mapper: {
    serializedName: "offer",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skus: OperationURLParameter = {
  parameterPath: "skus",
  mapper: {
    serializedName: "skus",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const edgeZone: OperationURLParameter = {
  parameterPath: "edgeZone",
  mapper: {
    serializedName: "edgeZone",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location1: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$")
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineCaptureParametersMapper
};

export const parameters11: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineMapper
};

export const parameters12: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineUpdateMapper
};

export const forceDeletion: OperationQueryParameter = {
  parameterPath: ["options", "forceDeletion"],
  mapper: {
    serializedName: "forceDeletion",
    type: {
      name: "Boolean"
    }
  }
};

export const statusOnly: OperationQueryParameter = {
  parameterPath: ["options", "statusOnly"],
  mapper: {
    serializedName: "statusOnly",
    type: {
      name: "String"
    }
  }
};

export const skipShutdown: OperationQueryParameter = {
  parameterPath: ["options", "skipShutdown"],
  mapper: {
    serializedName: "skipShutdown",
    type: {
      name: "Boolean"
    }
  }
};

export const parameters13: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: VirtualMachineReimageParametersMapper
};

export const sasUriExpirationTimeInMinutes: OperationQueryParameter = {
  parameterPath: ["options", "sasUriExpirationTimeInMinutes"],
  mapper: {
    serializedName: "sasUriExpirationTimeInMinutes",
    type: {
      name: "Number"
    }
  }
};

export const installPatchesInput: OperationParameter = {
  parameterPath: "installPatchesInput",
  mapper: VirtualMachineInstallPatchesParametersMapper
};

export const parameters14: OperationParameter = {
  parameterPath: "parameters",
  mapper: RunCommandInputMapper
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, text/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const parameters15: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineScaleSetMapper
};

export const vmScaleSetName: OperationURLParameter = {
  parameterPath: "vmScaleSetName",
  mapper: {
    serializedName: "vmScaleSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters16: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineScaleSetUpdateMapper
};

export const vmInstanceIDs: OperationParameter = {
  parameterPath: ["options", "vmInstanceIDs"],
  mapper: VirtualMachineScaleSetVMInstanceIDsMapper
};

export const vmInstanceIDs1: OperationParameter = {
  parameterPath: "vmInstanceIDs",
  mapper: VirtualMachineScaleSetVMInstanceRequiredIDsMapper
};

export const vmScaleSetReimageInput: OperationParameter = {
  parameterPath: ["options", "vmScaleSetReimageInput"],
  mapper: VirtualMachineScaleSetReimageParametersMapper
};

export const platformUpdateDomain: OperationQueryParameter = {
  parameterPath: "platformUpdateDomain",
  mapper: {
    serializedName: "platformUpdateDomain",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const parameters17: OperationParameter = {
  parameterPath: "parameters",
  mapper: VMScaleSetConvertToSinglePlacementGroupInputMapper
};

export const parameters18: OperationParameter = {
  parameterPath: "parameters",
  mapper: OrchestrationServiceStateInputMapper
};

export const parameters19: OperationParameter = {
  parameterPath: "parameters",
  mapper: ImageMapper
};

export const imageName: OperationURLParameter = {
  parameterPath: "imageName",
  mapper: {
    serializedName: "imageName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters20: OperationParameter = {
  parameterPath: "parameters",
  mapper: ImageUpdateMapper
};

export const extensionParameters2: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineScaleSetExtensionMapper
};

export const vmssExtensionName: OperationURLParameter = {
  parameterPath: "vmssExtensionName",
  mapper: {
    serializedName: "vmssExtensionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const extensionParameters3: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineScaleSetExtensionUpdateMapper
};

export const extensionParameters4: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineScaleSetVMExtensionMapper
};

export const instanceId: OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    serializedName: "instanceId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const extensionParameters5: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineScaleSetVMExtensionUpdateMapper
};

export const vmScaleSetVMReimageInput: OperationParameter = {
  parameterPath: ["options", "vmScaleSetVMReimageInput"],
  mapper: VirtualMachineScaleSetVMReimageParametersMapper
};

export const parameters21: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineScaleSetVMMapper
};

export const virtualMachineScaleSetName: OperationURLParameter = {
  parameterPath: "virtualMachineScaleSetName",
  mapper: {
    serializedName: "virtualMachineScaleSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};

export const parameters22: OperationParameter = {
  parameterPath: "parameters",
  mapper: RequestRateByIntervalInputMapper
};

export const parameters23: OperationParameter = {
  parameterPath: "parameters",
  mapper: ThrottledRequestsInputMapper
};

export const commandId: OperationURLParameter = {
  parameterPath: "commandId",
  mapper: {
    serializedName: "commandId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const runCommand: OperationParameter = {
  parameterPath: "runCommand",
  mapper: VirtualMachineRunCommandMapper
};

export const runCommandName: OperationURLParameter = {
  parameterPath: "runCommandName",
  mapper: {
    serializedName: "runCommandName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const runCommand1: OperationParameter = {
  parameterPath: "runCommand",
  mapper: VirtualMachineRunCommandUpdateMapper
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-04-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const disk: OperationParameter = {
  parameterPath: "disk",
  mapper: DiskMapper
};

export const diskName: OperationURLParameter = {
  parameterPath: "diskName",
  mapper: {
    serializedName: "diskName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-09-30",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const disk1: OperationParameter = {
  parameterPath: "disk",
  mapper: DiskUpdateMapper
};

export const grantAccessData: OperationParameter = {
  parameterPath: "grantAccessData",
  mapper: GrantAccessDataMapper
};

export const snapshot: OperationParameter = {
  parameterPath: "snapshot",
  mapper: SnapshotMapper
};

export const snapshotName: OperationURLParameter = {
  parameterPath: "snapshotName",
  mapper: {
    serializedName: "snapshotName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const snapshot1: OperationParameter = {
  parameterPath: "snapshot",
  mapper: SnapshotUpdateMapper
};

export const diskEncryptionSet: OperationParameter = {
  parameterPath: "diskEncryptionSet",
  mapper: DiskEncryptionSetMapper
};

export const diskEncryptionSetName: OperationURLParameter = {
  parameterPath: "diskEncryptionSetName",
  mapper: {
    serializedName: "diskEncryptionSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const diskEncryptionSet1: OperationParameter = {
  parameterPath: "diskEncryptionSet",
  mapper: DiskEncryptionSetUpdateMapper
};

export const diskAccess: OperationParameter = {
  parameterPath: "diskAccess",
  mapper: DiskAccessMapper
};

export const diskAccessName: OperationURLParameter = {
  parameterPath: "diskAccessName",
  mapper: {
    serializedName: "diskAccessName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const diskAccess1: OperationParameter = {
  parameterPath: "diskAccess",
  mapper: DiskAccessUpdateMapper
};

export const privateEndpointConnection: OperationParameter = {
  parameterPath: "privateEndpointConnection",
  mapper: PrivateEndpointConnectionMapper
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const restorePointCollectionName: OperationURLParameter = {
  parameterPath: "restorePointCollectionName",
  mapper: {
    serializedName: "restorePointCollectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vmRestorePointName: OperationURLParameter = {
  parameterPath: "vmRestorePointName",
  mapper: {
    serializedName: "vmRestorePointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const diskRestorePointName: OperationURLParameter = {
  parameterPath: "diskRestorePointName",
  mapper: {
    serializedName: "diskRestorePointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const gallery: OperationParameter = {
  parameterPath: "gallery",
  mapper: GalleryMapper
};

export const galleryName: OperationURLParameter = {
  parameterPath: "galleryName",
  mapper: {
    serializedName: "galleryName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion3: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-12-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const gallery1: OperationParameter = {
  parameterPath: "gallery",
  mapper: GalleryUpdateMapper
};

export const galleryImage: OperationParameter = {
  parameterPath: "galleryImage",
  mapper: GalleryImageMapper
};

export const galleryImageName: OperationURLParameter = {
  parameterPath: "galleryImageName",
  mapper: {
    serializedName: "galleryImageName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const galleryImage1: OperationParameter = {
  parameterPath: "galleryImage",
  mapper: GalleryImageUpdateMapper
};

export const galleryImageVersion: OperationParameter = {
  parameterPath: "galleryImageVersion",
  mapper: GalleryImageVersionMapper
};

export const galleryImageVersionName: OperationURLParameter = {
  parameterPath: "galleryImageVersionName",
  mapper: {
    serializedName: "galleryImageVersionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const galleryImageVersion1: OperationParameter = {
  parameterPath: "galleryImageVersion",
  mapper: GalleryImageVersionUpdateMapper
};

export const expand2: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const galleryApplication: OperationParameter = {
  parameterPath: "galleryApplication",
  mapper: GalleryApplicationMapper
};

export const galleryApplicationName: OperationURLParameter = {
  parameterPath: "galleryApplicationName",
  mapper: {
    serializedName: "galleryApplicationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const galleryApplication1: OperationParameter = {
  parameterPath: "galleryApplication",
  mapper: GalleryApplicationUpdateMapper
};

export const galleryApplicationVersion: OperationParameter = {
  parameterPath: "galleryApplicationVersion",
  mapper: GalleryApplicationVersionMapper
};

export const galleryApplicationVersionName: OperationURLParameter = {
  parameterPath: "galleryApplicationVersionName",
  mapper: {
    serializedName: "galleryApplicationVersionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const galleryApplicationVersion1: OperationParameter = {
  parameterPath: "galleryApplicationVersion",
  mapper: GalleryApplicationVersionUpdateMapper
};
