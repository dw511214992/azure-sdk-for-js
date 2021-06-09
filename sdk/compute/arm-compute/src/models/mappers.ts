import * as coreClient from "@azure/core-client";

export const ComputeOperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComputeOperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ComputeOperationValue"
            }
          }
        }
      }
    }
  }
};

export const ComputeOperationValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComputeOperationValue",
    modelProperties: {
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "display.operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "display.resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "display.description",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "display.provider",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InstanceViewStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InstanceViewStatus",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      level: {
        serializedName: "level",
        type: {
          name: "Enum",
          allowedValues: ["Info", "Warning", "Error"]
        }
      },
      displayStatus: {
        serializedName: "displayStatus",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      time: {
        serializedName: "time",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const UpdateResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateResource",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const AvailabilitySetListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilitySetListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailabilitySet"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineSizeListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineSizeListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineSize"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineSize: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineSize",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      numberOfCores: {
        serializedName: "numberOfCores",
        type: {
          name: "Number"
        }
      },
      osDiskSizeInMB: {
        serializedName: "osDiskSizeInMB",
        type: {
          name: "Number"
        }
      },
      resourceDiskSizeInMB: {
        serializedName: "resourceDiskSizeInMB",
        type: {
          name: "Number"
        }
      },
      memoryInMB: {
        serializedName: "memoryInMB",
        type: {
          name: "Number"
        }
      },
      maxDataDiskCount: {
        serializedName: "maxDataDiskCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ProximityPlacementGroupListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProximityPlacementGroupListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProximityPlacementGroup"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResourceReadOnly: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResourceReadOnly",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DedicatedHostGroupInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostGroupInstanceView",
    modelProperties: {
      hosts: {
        serializedName: "hosts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DedicatedHostInstanceViewWithName"
            }
          }
        }
      }
    }
  }
};

export const DedicatedHostInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostInstanceView",
    modelProperties: {
      assetId: {
        serializedName: "assetId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      availableCapacity: {
        serializedName: "availableCapacity",
        type: {
          name: "Composite",
          className: "DedicatedHostAvailableCapacity"
        }
      },
      statuses: {
        serializedName: "statuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const DedicatedHostAvailableCapacity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostAvailableCapacity",
    modelProperties: {
      allocatableVMs: {
        serializedName: "allocatableVMs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DedicatedHostAllocatableVM"
            }
          }
        }
      }
    }
  }
};

export const DedicatedHostAllocatableVM: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostAllocatableVM",
    modelProperties: {
      vmSize: {
        serializedName: "vmSize",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DedicatedHostGroupListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostGroupListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DedicatedHostGroup"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DedicatedHostListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DedicatedHost"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SshPublicKeysGroupListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SshPublicKeysGroupListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SshPublicKeyResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SshPublicKeyGenerateKeyPairResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SshPublicKeyGenerateKeyPairResult",
    modelProperties: {
      privateKey: {
        serializedName: "privateKey",
        required: true,
        type: {
          name: "String"
        }
      },
      publicKey: {
        serializedName: "publicKey",
        required: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineExtensionInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineExtensionInstanceView",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      substatuses: {
        serializedName: "substatuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      },
      statuses: {
        serializedName: "statuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineExtensionsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineExtensionsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineExtension"
            }
          }
        }
      }
    }
  }
};

export const PurchasePlan: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PurchasePlan",
    modelProperties: {
      publisher: {
        serializedName: "publisher",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OSDiskImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSDiskImage",
    modelProperties: {
      operatingSystem: {
        serializedName: "operatingSystem",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      }
    }
  }
};

export const DataDiskImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataDiskImage",
    modelProperties: {
      lun: {
        serializedName: "lun",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutomaticOSUpgradeProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutomaticOSUpgradeProperties",
    modelProperties: {
      automaticOSUpgradeSupported: {
        serializedName: "automaticOSUpgradeSupported",
        required: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DisallowedConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DisallowedConfiguration",
    modelProperties: {
      vmDiskType: {
        serializedName: "vmDiskType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineImageFeature: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineImageFeature",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExtendedLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtendedLocation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ApiError"
        }
      }
    }
  }
};

export const ApiError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiError",
    modelProperties: {
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiErrorBase"
            }
          }
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      },
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiErrorBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiErrorBase",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InnerError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InnerError",
    modelProperties: {
      exceptiontype: {
        serializedName: "exceptiontype",
        type: {
          name: "String"
        }
      },
      errordetail: {
        serializedName: "errordetail",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ListUsagesResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ListUsagesResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Usage"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Usage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Usage",
    modelProperties: {
      unit: {
        defaultValue: "Count",
        isConstant: true,
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      currentValue: {
        serializedName: "currentValue",
        required: true,
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        required: true,
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "UsageName"
        }
      }
    }
  }
};

export const UsageName: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UsageName",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachine"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Plan: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Plan",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HardwareProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HardwareProfile",
    modelProperties: {
      vmSize: {
        serializedName: "vmSize",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageProfile",
    modelProperties: {
      imageReference: {
        serializedName: "imageReference",
        type: {
          name: "Composite",
          className: "ImageReference"
        }
      },
      osDisk: {
        serializedName: "osDisk",
        type: {
          name: "Composite",
          className: "OSDisk"
        }
      },
      dataDisks: {
        serializedName: "dataDisks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataDisk"
            }
          }
        }
      }
    }
  }
};

export const OSDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSDisk",
    modelProperties: {
      osType: {
        serializedName: "osType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      encryptionSettings: {
        serializedName: "encryptionSettings",
        type: {
          name: "Composite",
          className: "DiskEncryptionSettings"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      vhd: {
        serializedName: "vhd",
        type: {
          name: "Composite",
          className: "VirtualHardDisk"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "VirtualHardDisk"
        }
      },
      caching: {
        serializedName: "caching",
        type: {
          name: "Enum",
          allowedValues: ["None", "ReadOnly", "ReadWrite"]
        }
      },
      writeAcceleratorEnabled: {
        serializedName: "writeAcceleratorEnabled",
        type: {
          name: "Boolean"
        }
      },
      diffDiskSettings: {
        serializedName: "diffDiskSettings",
        type: {
          name: "Composite",
          className: "DiffDiskSettings"
        }
      },
      createOption: {
        serializedName: "createOption",
        required: true,
        type: {
          name: "String"
        }
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      },
      managedDisk: {
        serializedName: "managedDisk",
        type: {
          name: "Composite",
          className: "ManagedDiskParameters"
        }
      },
      deleteOption: {
        serializedName: "deleteOption",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiskEncryptionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskEncryptionSettings",
    modelProperties: {
      diskEncryptionKey: {
        serializedName: "diskEncryptionKey",
        type: {
          name: "Composite",
          className: "KeyVaultSecretReference"
        }
      },
      keyEncryptionKey: {
        serializedName: "keyEncryptionKey",
        type: {
          name: "Composite",
          className: "KeyVaultKeyReference"
        }
      },
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const KeyVaultSecretReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultSecretReference",
    modelProperties: {
      secretUrl: {
        serializedName: "secretUrl",
        required: true,
        type: {
          name: "String"
        }
      },
      sourceVault: {
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      }
    }
  }
};

export const KeyVaultKeyReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultKeyReference",
    modelProperties: {
      keyUrl: {
        serializedName: "keyUrl",
        required: true,
        type: {
          name: "String"
        }
      },
      sourceVault: {
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      }
    }
  }
};

export const VirtualHardDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualHardDisk",
    modelProperties: {
      uri: {
        serializedName: "uri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiffDiskSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiffDiskSettings",
    modelProperties: {
      option: {
        serializedName: "option",
        type: {
          name: "String"
        }
      },
      placement: {
        serializedName: "placement",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataDisk",
    modelProperties: {
      lun: {
        serializedName: "lun",
        required: true,
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      vhd: {
        serializedName: "vhd",
        type: {
          name: "Composite",
          className: "VirtualHardDisk"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "VirtualHardDisk"
        }
      },
      caching: {
        serializedName: "caching",
        type: {
          name: "Enum",
          allowedValues: ["None", "ReadOnly", "ReadWrite"]
        }
      },
      writeAcceleratorEnabled: {
        serializedName: "writeAcceleratorEnabled",
        type: {
          name: "Boolean"
        }
      },
      createOption: {
        serializedName: "createOption",
        required: true,
        type: {
          name: "String"
        }
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      },
      managedDisk: {
        serializedName: "managedDisk",
        type: {
          name: "Composite",
          className: "ManagedDiskParameters"
        }
      },
      toBeDetached: {
        serializedName: "toBeDetached",
        type: {
          name: "Boolean"
        }
      },
      diskIopsReadWrite: {
        serializedName: "diskIOPSReadWrite",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      diskMBpsReadWrite: {
        serializedName: "diskMBpsReadWrite",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      detachOption: {
        serializedName: "detachOption",
        type: {
          name: "String"
        }
      },
      deleteOption: {
        serializedName: "deleteOption",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AdditionalCapabilities: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AdditionalCapabilities",
    modelProperties: {
      ultraSSDEnabled: {
        serializedName: "ultraSSDEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const OSProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSProfile",
    modelProperties: {
      computerName: {
        serializedName: "computerName",
        type: {
          name: "String"
        }
      },
      adminUsername: {
        serializedName: "adminUsername",
        type: {
          name: "String"
        }
      },
      adminPassword: {
        serializedName: "adminPassword",
        type: {
          name: "String"
        }
      },
      customData: {
        serializedName: "customData",
        type: {
          name: "String"
        }
      },
      windowsConfiguration: {
        serializedName: "windowsConfiguration",
        type: {
          name: "Composite",
          className: "WindowsConfiguration"
        }
      },
      linuxConfiguration: {
        serializedName: "linuxConfiguration",
        type: {
          name: "Composite",
          className: "LinuxConfiguration"
        }
      },
      secrets: {
        serializedName: "secrets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VaultSecretGroup"
            }
          }
        }
      },
      allowExtensionOperations: {
        serializedName: "allowExtensionOperations",
        type: {
          name: "Boolean"
        }
      },
      requireGuestProvisionSignal: {
        serializedName: "requireGuestProvisionSignal",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const WindowsConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WindowsConfiguration",
    modelProperties: {
      provisionVMAgent: {
        serializedName: "provisionVMAgent",
        type: {
          name: "Boolean"
        }
      },
      enableAutomaticUpdates: {
        serializedName: "enableAutomaticUpdates",
        type: {
          name: "Boolean"
        }
      },
      timeZone: {
        serializedName: "timeZone",
        type: {
          name: "String"
        }
      },
      additionalUnattendContent: {
        serializedName: "additionalUnattendContent",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AdditionalUnattendContent"
            }
          }
        }
      },
      patchSettings: {
        serializedName: "patchSettings",
        type: {
          name: "Composite",
          className: "PatchSettings"
        }
      },
      winRM: {
        serializedName: "winRM",
        type: {
          name: "Composite",
          className: "WinRMConfiguration"
        }
      }
    }
  }
};

export const AdditionalUnattendContent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AdditionalUnattendContent",
    modelProperties: {
      passName: {
        defaultValue: "OobeSystem",
        isConstant: true,
        serializedName: "passName",
        type: {
          name: "String"
        }
      },
      componentName: {
        defaultValue: "Microsoft-Windows-Shell-Setup",
        isConstant: true,
        serializedName: "componentName",
        type: {
          name: "String"
        }
      },
      settingName: {
        serializedName: "settingName",
        type: {
          name: "Enum",
          allowedValues: ["AutoLogon", "FirstLogonCommands"]
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PatchSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PatchSettings",
    modelProperties: {
      patchMode: {
        serializedName: "patchMode",
        type: {
          name: "String"
        }
      },
      enableHotpatching: {
        serializedName: "enableHotpatching",
        type: {
          name: "Boolean"
        }
      },
      assessmentMode: {
        serializedName: "assessmentMode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WinRMConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WinRMConfiguration",
    modelProperties: {
      listeners: {
        serializedName: "listeners",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WinRMListener"
            }
          }
        }
      }
    }
  }
};

export const WinRMListener: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WinRMListener",
    modelProperties: {
      protocol: {
        serializedName: "protocol",
        type: {
          name: "Enum",
          allowedValues: ["Http", "Https"]
        }
      },
      certificateUrl: {
        serializedName: "certificateUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinuxConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinuxConfiguration",
    modelProperties: {
      disablePasswordAuthentication: {
        serializedName: "disablePasswordAuthentication",
        type: {
          name: "Boolean"
        }
      },
      ssh: {
        serializedName: "ssh",
        type: {
          name: "Composite",
          className: "SshConfiguration"
        }
      },
      provisionVMAgent: {
        serializedName: "provisionVMAgent",
        type: {
          name: "Boolean"
        }
      },
      patchSettings: {
        serializedName: "patchSettings",
        type: {
          name: "Composite",
          className: "LinuxPatchSettings"
        }
      }
    }
  }
};

export const SshConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SshConfiguration",
    modelProperties: {
      publicKeys: {
        serializedName: "publicKeys",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SshPublicKey"
            }
          }
        }
      }
    }
  }
};

export const SshPublicKey: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SshPublicKey",
    modelProperties: {
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      keyData: {
        serializedName: "keyData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinuxPatchSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinuxPatchSettings",
    modelProperties: {
      patchMode: {
        serializedName: "patchMode",
        type: {
          name: "String"
        }
      },
      assessmentMode: {
        serializedName: "assessmentMode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultSecretGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultSecretGroup",
    modelProperties: {
      sourceVault: {
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      vaultCertificates: {
        serializedName: "vaultCertificates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VaultCertificate"
            }
          }
        }
      }
    }
  }
};

export const VaultCertificate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VaultCertificate",
    modelProperties: {
      certificateUrl: {
        serializedName: "certificateUrl",
        type: {
          name: "String"
        }
      },
      certificateStore: {
        serializedName: "certificateStore",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkProfile",
    modelProperties: {
      networkInterfaces: {
        serializedName: "networkInterfaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NetworkInterfaceReference"
            }
          }
        }
      },
      networkApiVersion: {
        serializedName: "networkApiVersion",
        type: {
          name: "String"
        }
      },
      networkInterfaceConfigurations: {
        serializedName: "networkInterfaceConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineNetworkInterfaceConfiguration"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineNetworkInterfaceConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineNetworkInterfaceConfiguration",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      primary: {
        serializedName: "properties.primary",
        type: {
          name: "Boolean"
        }
      },
      deleteOption: {
        serializedName: "properties.deleteOption",
        type: {
          name: "String"
        }
      },
      enableAcceleratedNetworking: {
        serializedName: "properties.enableAcceleratedNetworking",
        type: {
          name: "Boolean"
        }
      },
      enableFpga: {
        serializedName: "properties.enableFpga",
        type: {
          name: "Boolean"
        }
      },
      enableIPForwarding: {
        serializedName: "properties.enableIPForwarding",
        type: {
          name: "Boolean"
        }
      },
      networkSecurityGroup: {
        serializedName: "properties.networkSecurityGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      dnsSettings: {
        serializedName: "properties.dnsSettings",
        type: {
          name: "Composite",
          className: "VirtualMachineNetworkInterfaceDnsSettingsConfiguration"
        }
      },
      ipConfigurations: {
        serializedName: "properties.ipConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineNetworkInterfaceIPConfiguration"
            }
          }
        }
      },
      dscpConfiguration: {
        serializedName: "properties.dscpConfiguration",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      }
    }
  }
};

export const VirtualMachineNetworkInterfaceDnsSettingsConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineNetworkInterfaceDnsSettingsConfiguration",
    modelProperties: {
      dnsServers: {
        serializedName: "dnsServers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineNetworkInterfaceIPConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineNetworkInterfaceIPConfiguration",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "properties.subnet",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      primary: {
        serializedName: "properties.primary",
        type: {
          name: "Boolean"
        }
      },
      publicIPAddressConfiguration: {
        serializedName: "properties.publicIPAddressConfiguration",
        type: {
          name: "Composite",
          className: "VirtualMachinePublicIPAddressConfiguration"
        }
      },
      privateIPAddressVersion: {
        serializedName: "properties.privateIPAddressVersion",
        type: {
          name: "String"
        }
      },
      applicationSecurityGroups: {
        serializedName: "properties.applicationSecurityGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      applicationGatewayBackendAddressPools: {
        serializedName: "properties.applicationGatewayBackendAddressPools",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      loadBalancerBackendAddressPools: {
        serializedName: "properties.loadBalancerBackendAddressPools",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachinePublicIPAddressConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachinePublicIPAddressConfiguration",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "PublicIPAddressSku"
        }
      },
      idleTimeoutInMinutes: {
        serializedName: "properties.idleTimeoutInMinutes",
        type: {
          name: "Number"
        }
      },
      deleteOption: {
        serializedName: "properties.deleteOption",
        type: {
          name: "String"
        }
      },
      dnsSettings: {
        serializedName: "properties.dnsSettings",
        type: {
          name: "Composite",
          className: "VirtualMachinePublicIPAddressDnsSettingsConfiguration"
        }
      },
      ipTags: {
        serializedName: "properties.ipTags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineIpTag"
            }
          }
        }
      },
      publicIPPrefix: {
        serializedName: "properties.publicIPPrefix",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      publicIPAddressVersion: {
        serializedName: "properties.publicIPAddressVersion",
        type: {
          name: "String"
        }
      },
      publicIPAllocationMethod: {
        serializedName: "properties.publicIPAllocationMethod",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachinePublicIPAddressDnsSettingsConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachinePublicIPAddressDnsSettingsConfiguration",
    modelProperties: {
      domainNameLabel: {
        serializedName: "domainNameLabel",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineIpTag: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineIpTag",
    modelProperties: {
      ipTagType: {
        serializedName: "ipTagType",
        type: {
          name: "String"
        }
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PublicIPAddressSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PublicIPAddressSku",
    modelProperties: {
      publicIPAddressSkuName: {
        serializedName: "publicIPAddressSkuName",
        required: true,
        type: {
          name: "String"
        }
      },
      publicIPAddressSkuTier: {
        serializedName: "publicIPAddressSkuTier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecurityProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecurityProfile",
    modelProperties: {
      uefiSettings: {
        serializedName: "uefiSettings",
        type: {
          name: "Composite",
          className: "UefiSettings"
        }
      },
      encryptionAtHost: {
        serializedName: "encryptionAtHost",
        type: {
          name: "Boolean"
        }
      },
      securityType: {
        defaultValue: "TrustedLaunch",
        isConstant: true,
        serializedName: "securityType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UefiSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UefiSettings",
    modelProperties: {
      secureBootEnabled: {
        serializedName: "secureBootEnabled",
        type: {
          name: "Boolean"
        }
      },
      vTpmEnabled: {
        serializedName: "vTpmEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DiagnosticsProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiagnosticsProfile",
    modelProperties: {
      bootDiagnostics: {
        serializedName: "bootDiagnostics",
        type: {
          name: "Composite",
          className: "BootDiagnostics"
        }
      }
    }
  }
};

export const BootDiagnostics: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BootDiagnostics",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      storageUri: {
        serializedName: "storageUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BillingProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BillingProfile",
    modelProperties: {
      maxPrice: {
        serializedName: "maxPrice",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VirtualMachineInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineInstanceView",
    modelProperties: {
      platformUpdateDomain: {
        serializedName: "platformUpdateDomain",
        type: {
          name: "Number"
        }
      },
      platformFaultDomain: {
        serializedName: "platformFaultDomain",
        type: {
          name: "Number"
        }
      },
      computerName: {
        serializedName: "computerName",
        type: {
          name: "String"
        }
      },
      osName: {
        serializedName: "osName",
        type: {
          name: "String"
        }
      },
      osVersion: {
        serializedName: "osVersion",
        type: {
          name: "String"
        }
      },
      hyperVGeneration: {
        serializedName: "hyperVGeneration",
        type: {
          name: "String"
        }
      },
      rdpThumbPrint: {
        serializedName: "rdpThumbPrint",
        type: {
          name: "String"
        }
      },
      vmAgent: {
        serializedName: "vmAgent",
        type: {
          name: "Composite",
          className: "VirtualMachineAgentInstanceView"
        }
      },
      maintenanceRedeployStatus: {
        serializedName: "maintenanceRedeployStatus",
        type: {
          name: "Composite",
          className: "MaintenanceRedeployStatus"
        }
      },
      disks: {
        serializedName: "disks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DiskInstanceView"
            }
          }
        }
      },
      extensions: {
        serializedName: "extensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineExtensionInstanceView"
            }
          }
        }
      },
      vmHealth: {
        serializedName: "vmHealth",
        type: {
          name: "Composite",
          className: "VirtualMachineHealthStatus"
        }
      },
      bootDiagnostics: {
        serializedName: "bootDiagnostics",
        type: {
          name: "Composite",
          className: "BootDiagnosticsInstanceView"
        }
      },
      assignedHost: {
        serializedName: "assignedHost",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      statuses: {
        serializedName: "statuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      },
      patchStatus: {
        serializedName: "patchStatus",
        type: {
          name: "Composite",
          className: "VirtualMachinePatchStatus"
        }
      }
    }
  }
};

export const VirtualMachineAgentInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineAgentInstanceView",
    modelProperties: {
      vmAgentVersion: {
        serializedName: "vmAgentVersion",
        type: {
          name: "String"
        }
      },
      extensionHandlers: {
        serializedName: "extensionHandlers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineExtensionHandlerInstanceView"
            }
          }
        }
      },
      statuses: {
        serializedName: "statuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineExtensionHandlerInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineExtensionHandlerInstanceView",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "InstanceViewStatus"
        }
      }
    }
  }
};

export const MaintenanceRedeployStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MaintenanceRedeployStatus",
    modelProperties: {
      isCustomerInitiatedMaintenanceAllowed: {
        serializedName: "isCustomerInitiatedMaintenanceAllowed",
        type: {
          name: "Boolean"
        }
      },
      preMaintenanceWindowStartTime: {
        serializedName: "preMaintenanceWindowStartTime",
        type: {
          name: "DateTime"
        }
      },
      preMaintenanceWindowEndTime: {
        serializedName: "preMaintenanceWindowEndTime",
        type: {
          name: "DateTime"
        }
      },
      maintenanceWindowStartTime: {
        serializedName: "maintenanceWindowStartTime",
        type: {
          name: "DateTime"
        }
      },
      maintenanceWindowEndTime: {
        serializedName: "maintenanceWindowEndTime",
        type: {
          name: "DateTime"
        }
      },
      lastOperationResultCode: {
        serializedName: "lastOperationResultCode",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "RetryLater",
            "MaintenanceAborted",
            "MaintenanceCompleted"
          ]
        }
      },
      lastOperationMessage: {
        serializedName: "lastOperationMessage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiskInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskInstanceView",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      encryptionSettings: {
        serializedName: "encryptionSettings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DiskEncryptionSettings"
            }
          }
        }
      },
      statuses: {
        serializedName: "statuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineHealthStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineHealthStatus",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "InstanceViewStatus"
        }
      }
    }
  }
};

export const BootDiagnosticsInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BootDiagnosticsInstanceView",
    modelProperties: {
      consoleScreenshotBlobUri: {
        serializedName: "consoleScreenshotBlobUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      serialConsoleLogBlobUri: {
        serializedName: "serialConsoleLogBlobUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "InstanceViewStatus"
        }
      }
    }
  }
};

export const VirtualMachinePatchStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachinePatchStatus",
    modelProperties: {
      availablePatchSummary: {
        serializedName: "availablePatchSummary",
        type: {
          name: "Composite",
          className: "AvailablePatchSummary"
        }
      },
      lastPatchInstallationSummary: {
        serializedName: "lastPatchInstallationSummary",
        type: {
          name: "Composite",
          className: "LastPatchInstallationSummary"
        }
      },
      configurationStatuses: {
        serializedName: "configurationStatuses",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const AvailablePatchSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailablePatchSummary",
    modelProperties: {
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      assessmentActivityId: {
        serializedName: "assessmentActivityId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      rebootPending: {
        serializedName: "rebootPending",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      criticalAndSecurityPatchCount: {
        serializedName: "criticalAndSecurityPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      otherPatchCount: {
        serializedName: "otherPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastModifiedTime: {
        serializedName: "lastModifiedTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ApiError"
        }
      }
    }
  }
};

export const LastPatchInstallationSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LastPatchInstallationSummary",
    modelProperties: {
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      installationActivityId: {
        serializedName: "installationActivityId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      maintenanceWindowExceeded: {
        serializedName: "maintenanceWindowExceeded",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      notSelectedPatchCount: {
        serializedName: "notSelectedPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      excludedPatchCount: {
        serializedName: "excludedPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      pendingPatchCount: {
        serializedName: "pendingPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      installedPatchCount: {
        serializedName: "installedPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      failedPatchCount: {
        serializedName: "failedPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastModifiedTime: {
        serializedName: "lastModifiedTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ApiError"
        }
      }
    }
  }
};

export const ScheduledEventsProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScheduledEventsProfile",
    modelProperties: {
      terminateNotificationProfile: {
        serializedName: "terminateNotificationProfile",
        type: {
          name: "Composite",
          className: "TerminateNotificationProfile"
        }
      }
    }
  }
};

export const TerminateNotificationProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TerminateNotificationProfile",
    modelProperties: {
      notBeforeTimeout: {
        serializedName: "notBeforeTimeout",
        type: {
          name: "String"
        }
      },
      enable: {
        serializedName: "enable",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const VirtualMachineIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None"
          ]
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "UserAssignedIdentitiesValue"
            }
          }
        }
      }
    }
  }
};

export const UserAssignedIdentitiesValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentitiesValue",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSet"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpgradePolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpgradePolicy",
    modelProperties: {
      mode: {
        serializedName: "mode",
        type: {
          name: "Enum",
          allowedValues: ["Automatic", "Manual", "Rolling"]
        }
      },
      rollingUpgradePolicy: {
        serializedName: "rollingUpgradePolicy",
        type: {
          name: "Composite",
          className: "RollingUpgradePolicy"
        }
      },
      automaticOSUpgradePolicy: {
        serializedName: "automaticOSUpgradePolicy",
        type: {
          name: "Composite",
          className: "AutomaticOSUpgradePolicy"
        }
      }
    }
  }
};

export const RollingUpgradePolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RollingUpgradePolicy",
    modelProperties: {
      maxBatchInstancePercent: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 5
        },
        serializedName: "maxBatchInstancePercent",
        type: {
          name: "Number"
        }
      },
      maxUnhealthyInstancePercent: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 5
        },
        serializedName: "maxUnhealthyInstancePercent",
        type: {
          name: "Number"
        }
      },
      maxUnhealthyUpgradedInstancePercent: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 0
        },
        serializedName: "maxUnhealthyUpgradedInstancePercent",
        type: {
          name: "Number"
        }
      },
      pauseTimeBetweenBatches: {
        serializedName: "pauseTimeBetweenBatches",
        type: {
          name: "String"
        }
      },
      enableCrossZoneUpgrade: {
        serializedName: "enableCrossZoneUpgrade",
        type: {
          name: "Boolean"
        }
      },
      prioritizeUnhealthyInstances: {
        serializedName: "prioritizeUnhealthyInstances",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AutomaticOSUpgradePolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutomaticOSUpgradePolicy",
    modelProperties: {
      enableAutomaticOSUpgrade: {
        serializedName: "enableAutomaticOSUpgrade",
        type: {
          name: "Boolean"
        }
      },
      disableAutomaticRollback: {
        serializedName: "disableAutomaticRollback",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AutomaticRepairsPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutomaticRepairsPolicy",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      gracePeriod: {
        serializedName: "gracePeriod",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMProfile",
    modelProperties: {
      osProfile: {
        serializedName: "osProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetOSProfile"
        }
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetStorageProfile"
        }
      },
      networkProfile: {
        serializedName: "networkProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetNetworkProfile"
        }
      },
      securityProfile: {
        serializedName: "securityProfile",
        type: {
          name: "Composite",
          className: "SecurityProfile"
        }
      },
      diagnosticsProfile: {
        serializedName: "diagnosticsProfile",
        type: {
          name: "Composite",
          className: "DiagnosticsProfile"
        }
      },
      extensionProfile: {
        serializedName: "extensionProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetExtensionProfile"
        }
      },
      licenseType: {
        serializedName: "licenseType",
        type: {
          name: "String"
        }
      },
      priority: {
        serializedName: "priority",
        type: {
          name: "String"
        }
      },
      evictionPolicy: {
        serializedName: "evictionPolicy",
        type: {
          name: "String"
        }
      },
      billingProfile: {
        serializedName: "billingProfile",
        type: {
          name: "Composite",
          className: "BillingProfile"
        }
      },
      scheduledEventsProfile: {
        serializedName: "scheduledEventsProfile",
        type: {
          name: "Composite",
          className: "ScheduledEventsProfile"
        }
      },
      userData: {
        serializedName: "userData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetOSProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetOSProfile",
    modelProperties: {
      computerNamePrefix: {
        serializedName: "computerNamePrefix",
        type: {
          name: "String"
        }
      },
      adminUsername: {
        serializedName: "adminUsername",
        type: {
          name: "String"
        }
      },
      adminPassword: {
        serializedName: "adminPassword",
        type: {
          name: "String"
        }
      },
      customData: {
        serializedName: "customData",
        type: {
          name: "String"
        }
      },
      windowsConfiguration: {
        serializedName: "windowsConfiguration",
        type: {
          name: "Composite",
          className: "WindowsConfiguration"
        }
      },
      linuxConfiguration: {
        serializedName: "linuxConfiguration",
        type: {
          name: "Composite",
          className: "LinuxConfiguration"
        }
      },
      secrets: {
        serializedName: "secrets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VaultSecretGroup"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetStorageProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetStorageProfile",
    modelProperties: {
      imageReference: {
        serializedName: "imageReference",
        type: {
          name: "Composite",
          className: "ImageReference"
        }
      },
      osDisk: {
        serializedName: "osDisk",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetOSDisk"
        }
      },
      dataDisks: {
        serializedName: "dataDisks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetDataDisk"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetOSDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetOSDisk",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      caching: {
        serializedName: "caching",
        type: {
          name: "Enum",
          allowedValues: ["None", "ReadOnly", "ReadWrite"]
        }
      },
      writeAcceleratorEnabled: {
        serializedName: "writeAcceleratorEnabled",
        type: {
          name: "Boolean"
        }
      },
      createOption: {
        serializedName: "createOption",
        required: true,
        type: {
          name: "String"
        }
      },
      diffDiskSettings: {
        serializedName: "diffDiskSettings",
        type: {
          name: "Composite",
          className: "DiffDiskSettings"
        }
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      },
      osType: {
        serializedName: "osType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "VirtualHardDisk"
        }
      },
      vhdContainers: {
        serializedName: "vhdContainers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      managedDisk: {
        serializedName: "managedDisk",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetManagedDiskParameters"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetManagedDiskParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetManagedDiskParameters",
    modelProperties: {
      storageAccountType: {
        serializedName: "storageAccountType",
        type: {
          name: "String"
        }
      },
      diskEncryptionSet: {
        serializedName: "diskEncryptionSet",
        type: {
          name: "Composite",
          className: "DiskEncryptionSetParameters"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetDataDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetDataDisk",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      lun: {
        serializedName: "lun",
        required: true,
        type: {
          name: "Number"
        }
      },
      caching: {
        serializedName: "caching",
        type: {
          name: "Enum",
          allowedValues: ["None", "ReadOnly", "ReadWrite"]
        }
      },
      writeAcceleratorEnabled: {
        serializedName: "writeAcceleratorEnabled",
        type: {
          name: "Boolean"
        }
      },
      createOption: {
        serializedName: "createOption",
        required: true,
        type: {
          name: "String"
        }
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      },
      managedDisk: {
        serializedName: "managedDisk",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetManagedDiskParameters"
        }
      },
      diskIopsReadWrite: {
        serializedName: "diskIOPSReadWrite",
        type: {
          name: "Number"
        }
      },
      diskMBpsReadWrite: {
        serializedName: "diskMBpsReadWrite",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetNetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetNetworkProfile",
    modelProperties: {
      healthProbe: {
        serializedName: "healthProbe",
        type: {
          name: "Composite",
          className: "ApiEntityReference"
        }
      },
      networkInterfaceConfigurations: {
        serializedName: "networkInterfaceConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetNetworkConfiguration"
            }
          }
        }
      },
      networkApiVersion: {
        serializedName: "networkApiVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiEntityReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiEntityReference",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetNetworkConfigurationDnsSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetNetworkConfigurationDnsSettings",
    modelProperties: {
      dnsServers: {
        serializedName: "dnsServers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetPublicIPAddressConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetPublicIPAddressConfiguration",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "PublicIPAddressSku"
        }
      },
      idleTimeoutInMinutes: {
        serializedName: "properties.idleTimeoutInMinutes",
        type: {
          name: "Number"
        }
      },
      dnsSettings: {
        serializedName: "properties.dnsSettings",
        type: {
          name: "Composite",
          className:
            "VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings"
        }
      },
      ipTags: {
        serializedName: "properties.ipTags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetIpTag"
            }
          }
        }
      },
      publicIPPrefix: {
        serializedName: "properties.publicIPPrefix",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      publicIPAddressVersion: {
        serializedName: "properties.publicIPAddressVersion",
        type: {
          name: "String"
        }
      },
      deleteOption: {
        serializedName: "properties.deleteOption",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings",
    modelProperties: {
      domainNameLabel: {
        serializedName: "domainNameLabel",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetIpTag: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetIpTag",
    modelProperties: {
      ipTagType: {
        serializedName: "ipTagType",
        type: {
          name: "String"
        }
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetExtensionProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetExtensionProfile",
    modelProperties: {
      extensions: {
        serializedName: "extensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetExtension"
            }
          }
        }
      },
      extensionsTimeBudget: {
        serializedName: "extensionsTimeBudget",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScaleInPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScaleInPolicy",
    modelProperties: {
      rules: {
        serializedName: "rules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None"
          ]
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className:
                "VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageStorageProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageStorageProfile",
    modelProperties: {
      osDisk: {
        serializedName: "osDisk",
        type: {
          name: "Composite",
          className: "ImageOSDisk"
        }
      },
      dataDisks: {
        serializedName: "dataDisks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageDataDisk"
            }
          }
        }
      },
      zoneResilient: {
        serializedName: "zoneResilient",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ImageDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageDisk",
    modelProperties: {
      snapshot: {
        serializedName: "snapshot",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      managedDisk: {
        serializedName: "managedDisk",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      blobUri: {
        serializedName: "blobUri",
        type: {
          name: "String"
        }
      },
      caching: {
        serializedName: "caching",
        type: {
          name: "Enum",
          allowedValues: ["None", "ReadOnly", "ReadWrite"]
        }
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      },
      storageAccountType: {
        serializedName: "storageAccountType",
        type: {
          name: "String"
        }
      },
      diskEncryptionSet: {
        serializedName: "diskEncryptionSet",
        type: {
          name: "Composite",
          className: "DiskEncryptionSetParameters"
        }
      }
    }
  }
};

export const ImageListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Image"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineCaptureParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineCaptureParameters",
    modelProperties: {
      vhdPrefix: {
        serializedName: "vhdPrefix",
        required: true,
        type: {
          name: "String"
        }
      },
      destinationContainerName: {
        serializedName: "destinationContainerName",
        required: true,
        type: {
          name: "String"
        }
      },
      overwriteVhds: {
        serializedName: "overwriteVhds",
        required: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const RestorePointCollectionSourceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePointCollectionSourceProperties",
    modelProperties: {
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RestorePointSourceMetadata: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePointSourceMetadata",
    modelProperties: {
      hardwareProfile: {
        serializedName: "hardwareProfile",
        type: {
          name: "Composite",
          className: "HardwareProfile"
        }
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "Composite",
          className: "RestorePointSourceVMStorageProfile"
        }
      },
      osProfile: {
        serializedName: "osProfile",
        type: {
          name: "Composite",
          className: "OSProfile"
        }
      },
      diagnosticsProfile: {
        serializedName: "diagnosticsProfile",
        type: {
          name: "Composite",
          className: "DiagnosticsProfile"
        }
      },
      licenseType: {
        serializedName: "licenseType",
        type: {
          name: "String"
        }
      },
      vmId: {
        serializedName: "vmId",
        type: {
          name: "String"
        }
      },
      securityProfile: {
        serializedName: "securityProfile",
        type: {
          name: "Composite",
          className: "SecurityProfile"
        }
      }
    }
  }
};

export const RestorePointSourceVMStorageProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePointSourceVMStorageProfile",
    modelProperties: {
      osDisk: {
        serializedName: "osDisk",
        type: {
          name: "Composite",
          className: "RestorePointSourceVmosDisk"
        }
      },
      dataDisks: {
        serializedName: "dataDisks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RestorePointSourceVMDataDisk"
            }
          }
        }
      }
    }
  }
};

export const RestorePointSourceVmosDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePointSourceVmosDisk",
    modelProperties: {
      osType: {
        serializedName: "osType",
        type: {
          name: "String"
        }
      },
      encryptionSettings: {
        serializedName: "encryptionSettings",
        type: {
          name: "Composite",
          className: "DiskEncryptionSettings"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      caching: {
        serializedName: "caching",
        type: {
          name: "Enum",
          allowedValues: ["None", "ReadOnly", "ReadWrite"]
        }
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      },
      managedDisk: {
        serializedName: "managedDisk",
        type: {
          name: "Composite",
          className: "ManagedDiskParameters"
        }
      },
      diskRestorePoint: {
        serializedName: "diskRestorePoint",
        type: {
          name: "Composite",
          className: "ApiEntityReference"
        }
      }
    }
  }
};

export const RestorePointSourceVMDataDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePointSourceVMDataDisk",
    modelProperties: {
      lun: {
        serializedName: "lun",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      caching: {
        serializedName: "caching",
        type: {
          name: "Enum",
          allowedValues: ["None", "ReadOnly", "ReadWrite"]
        }
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      },
      managedDisk: {
        serializedName: "managedDisk",
        type: {
          name: "Composite",
          className: "ManagedDiskParameters"
        }
      },
      diskRestorePoint: {
        serializedName: "diskRestorePoint",
        type: {
          name: "Composite",
          className: "ApiEntityReference"
        }
      }
    }
  }
};

export const RestorePointProvisioningDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePointProvisioningDetails",
    modelProperties: {
      creationTime: {
        serializedName: "creationTime",
        type: {
          name: "DateTime"
        }
      },
      totalUsedSizeInBytes: {
        serializedName: "totalUsedSizeInBytes",
        type: {
          name: "Number"
        }
      },
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "Number"
        }
      },
      statusMessage: {
        serializedName: "statusMessage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RestorePointCollectionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePointCollectionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RestorePointCollection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineReimageParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineReimageParameters",
    modelProperties: {
      tempDisk: {
        serializedName: "tempDisk",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const RetrieveBootDiagnosticsDataResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RetrieveBootDiagnosticsDataResult",
    modelProperties: {
      consoleScreenshotBlobUri: {
        serializedName: "consoleScreenshotBlobUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      serialConsoleLogBlobUri: {
        serializedName: "serialConsoleLogBlobUri",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineAssessPatchesResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineAssessPatchesResult",
    modelProperties: {
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      assessmentActivityId: {
        serializedName: "assessmentActivityId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      rebootPending: {
        serializedName: "rebootPending",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      criticalAndSecurityPatchCount: {
        serializedName: "criticalAndSecurityPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      otherPatchCount: {
        serializedName: "otherPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      startDateTime: {
        serializedName: "startDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      availablePatches: {
        serializedName: "availablePatches",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineSoftwarePatchProperties"
            }
          }
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ApiError"
        }
      }
    }
  }
};

export const VirtualMachineSoftwarePatchProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineSoftwarePatchProperties",
    modelProperties: {
      patchId: {
        serializedName: "patchId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      kbId: {
        serializedName: "kbId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      classifications: {
        serializedName: "classifications",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      rebootBehavior: {
        serializedName: "rebootBehavior",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      activityId: {
        serializedName: "activityId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publishedDate: {
        serializedName: "publishedDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastModifiedDateTime: {
        serializedName: "lastModifiedDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      assessmentState: {
        serializedName: "assessmentState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineInstallPatchesParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineInstallPatchesParameters",
    modelProperties: {
      maximumDuration: {
        serializedName: "maximumDuration",
        required: true,
        type: {
          name: "String"
        }
      },
      rebootSetting: {
        serializedName: "rebootSetting",
        required: true,
        type: {
          name: "String"
        }
      },
      windowsParameters: {
        serializedName: "windowsParameters",
        type: {
          name: "Composite",
          className: "WindowsParameters"
        }
      },
      linuxParameters: {
        serializedName: "linuxParameters",
        type: {
          name: "Composite",
          className: "LinuxParameters"
        }
      }
    }
  }
};

export const WindowsParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WindowsParameters",
    modelProperties: {
      classificationsToInclude: {
        serializedName: "classificationsToInclude",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      kbNumbersToInclude: {
        serializedName: "kbNumbersToInclude",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      kbNumbersToExclude: {
        serializedName: "kbNumbersToExclude",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      excludeKbsRequiringReboot: {
        serializedName: "excludeKbsRequiringReboot",
        type: {
          name: "Boolean"
        }
      },
      maxPatchPublishDate: {
        serializedName: "maxPatchPublishDate",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const LinuxParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinuxParameters",
    modelProperties: {
      classificationsToInclude: {
        serializedName: "classificationsToInclude",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      packageNameMasksToInclude: {
        serializedName: "packageNameMasksToInclude",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      packageNameMasksToExclude: {
        serializedName: "packageNameMasksToExclude",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      maintenanceRunId: {
        serializedName: "maintenanceRunId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineInstallPatchesResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineInstallPatchesResult",
    modelProperties: {
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      installationActivityId: {
        serializedName: "installationActivityId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      rebootStatus: {
        serializedName: "rebootStatus",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      maintenanceWindowExceeded: {
        serializedName: "maintenanceWindowExceeded",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      excludedPatchCount: {
        serializedName: "excludedPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      notSelectedPatchCount: {
        serializedName: "notSelectedPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      pendingPatchCount: {
        serializedName: "pendingPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      installedPatchCount: {
        serializedName: "installedPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      failedPatchCount: {
        serializedName: "failedPatchCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      patches: {
        serializedName: "patches",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PatchInstallationDetail"
            }
          }
        }
      },
      startDateTime: {
        serializedName: "startDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ApiError"
        }
      }
    }
  }
};

export const PatchInstallationDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PatchInstallationDetail",
    modelProperties: {
      patchId: {
        serializedName: "patchId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      kbId: {
        serializedName: "kbId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      classifications: {
        serializedName: "classifications",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      installationState: {
        serializedName: "installationState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetUpdateVMProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetUpdateVMProfile",
    modelProperties: {
      osProfile: {
        serializedName: "osProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetUpdateOSProfile"
        }
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetUpdateStorageProfile"
        }
      },
      networkProfile: {
        serializedName: "networkProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetUpdateNetworkProfile"
        }
      },
      securityProfile: {
        serializedName: "securityProfile",
        type: {
          name: "Composite",
          className: "SecurityProfile"
        }
      },
      diagnosticsProfile: {
        serializedName: "diagnosticsProfile",
        type: {
          name: "Composite",
          className: "DiagnosticsProfile"
        }
      },
      extensionProfile: {
        serializedName: "extensionProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetExtensionProfile"
        }
      },
      licenseType: {
        serializedName: "licenseType",
        type: {
          name: "String"
        }
      },
      billingProfile: {
        serializedName: "billingProfile",
        type: {
          name: "Composite",
          className: "BillingProfile"
        }
      },
      scheduledEventsProfile: {
        serializedName: "scheduledEventsProfile",
        type: {
          name: "Composite",
          className: "ScheduledEventsProfile"
        }
      },
      userData: {
        serializedName: "userData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetUpdateOSProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetUpdateOSProfile",
    modelProperties: {
      customData: {
        serializedName: "customData",
        type: {
          name: "String"
        }
      },
      windowsConfiguration: {
        serializedName: "windowsConfiguration",
        type: {
          name: "Composite",
          className: "WindowsConfiguration"
        }
      },
      linuxConfiguration: {
        serializedName: "linuxConfiguration",
        type: {
          name: "Composite",
          className: "LinuxConfiguration"
        }
      },
      secrets: {
        serializedName: "secrets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VaultSecretGroup"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetUpdateStorageProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetUpdateStorageProfile",
    modelProperties: {
      imageReference: {
        serializedName: "imageReference",
        type: {
          name: "Composite",
          className: "ImageReference"
        }
      },
      osDisk: {
        serializedName: "osDisk",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetUpdateOSDisk"
        }
      },
      dataDisks: {
        serializedName: "dataDisks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetDataDisk"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetUpdateOSDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetUpdateOSDisk",
    modelProperties: {
      caching: {
        serializedName: "caching",
        type: {
          name: "Enum",
          allowedValues: ["None", "ReadOnly", "ReadWrite"]
        }
      },
      writeAcceleratorEnabled: {
        serializedName: "writeAcceleratorEnabled",
        type: {
          name: "Boolean"
        }
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "VirtualHardDisk"
        }
      },
      vhdContainers: {
        serializedName: "vhdContainers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      managedDisk: {
        serializedName: "managedDisk",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetManagedDiskParameters"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetUpdateNetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetUpdateNetworkProfile",
    modelProperties: {
      healthProbe: {
        serializedName: "healthProbe",
        type: {
          name: "Composite",
          className: "ApiEntityReference"
        }
      },
      networkInterfaceConfigurations: {
        serializedName: "networkInterfaceConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetUpdateNetworkConfiguration"
            }
          }
        }
      },
      networkApiVersion: {
        serializedName: "networkApiVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetUpdatePublicIPAddressConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetUpdatePublicIPAddressConfiguration",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      idleTimeoutInMinutes: {
        serializedName: "properties.idleTimeoutInMinutes",
        type: {
          name: "Number"
        }
      },
      dnsSettings: {
        serializedName: "properties.dnsSettings",
        type: {
          name: "Composite",
          className:
            "VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings"
        }
      },
      deleteOption: {
        serializedName: "properties.deleteOption",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMInstanceIDs: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMInstanceIDs",
    modelProperties: {
      instanceIds: {
        serializedName: "instanceIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMInstanceRequiredIDs: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMInstanceRequiredIDs",
    modelProperties: {
      instanceIds: {
        serializedName: "instanceIds",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetInstanceView",
    modelProperties: {
      virtualMachine: {
        serializedName: "virtualMachine",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetInstanceViewStatusesSummary"
        }
      },
      extensions: {
        serializedName: "extensions",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetVMExtensionsSummary"
            }
          }
        }
      },
      statuses: {
        serializedName: "statuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      },
      orchestrationServices: {
        serializedName: "orchestrationServices",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OrchestrationServiceSummary"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetInstanceViewStatusesSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetInstanceViewStatusesSummary",
    modelProperties: {
      statusesSummary: {
        serializedName: "statusesSummary",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineStatusCodeCount"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineStatusCodeCount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineStatusCodeCount",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMExtensionsSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMExtensionsSummary",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      statusesSummary: {
        serializedName: "statusesSummary",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineStatusCodeCount"
            }
          }
        }
      }
    }
  }
};

export const OrchestrationServiceSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrchestrationServiceSummary",
    modelProperties: {
      serviceName: {
        serializedName: "serviceName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      serviceState: {
        serializedName: "serviceState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetExtensionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetExtensionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetExtension"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetListWithLinkResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetListWithLinkResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSet"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetListSkusResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetListSkusResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetSku"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetSku",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetSkuCapacity"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetSkuCapacity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetSkuCapacity",
    modelProperties: {
      minimum: {
        serializedName: "minimum",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maximum: {
        serializedName: "maximum",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      defaultCapacity: {
        serializedName: "defaultCapacity",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      scaleType: {
        serializedName: "scaleType",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Automatic", "None"]
        }
      }
    }
  }
};

export const VirtualMachineScaleSetListOSUpgradeHistory: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetListOSUpgradeHistory",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UpgradeOperationHistoricalStatusInfo"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpgradeOperationHistoricalStatusInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpgradeOperationHistoricalStatusInfo",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "UpgradeOperationHistoricalStatusInfoProperties"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpgradeOperationHistoricalStatusInfoProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpgradeOperationHistoricalStatusInfoProperties",
    modelProperties: {
      runningStatus: {
        serializedName: "runningStatus",
        type: {
          name: "Composite",
          className: "UpgradeOperationHistoryStatus"
        }
      },
      progress: {
        serializedName: "progress",
        type: {
          name: "Composite",
          className: "RollingUpgradeProgressInfo"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ApiError"
        }
      },
      startedBy: {
        serializedName: "startedBy",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Unknown", "User", "Platform"]
        }
      },
      targetImageReference: {
        serializedName: "targetImageReference",
        type: {
          name: "Composite",
          className: "ImageReference"
        }
      },
      rollbackInfo: {
        serializedName: "rollbackInfo",
        type: {
          name: "Composite",
          className: "RollbackStatusInfo"
        }
      }
    }
  }
};

export const UpgradeOperationHistoryStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpgradeOperationHistoryStatus",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["RollingForward", "Cancelled", "Completed", "Faulted"]
        }
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const RollingUpgradeProgressInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RollingUpgradeProgressInfo",
    modelProperties: {
      successfulInstanceCount: {
        serializedName: "successfulInstanceCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      failedInstanceCount: {
        serializedName: "failedInstanceCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      inProgressInstanceCount: {
        serializedName: "inProgressInstanceCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      pendingInstanceCount: {
        serializedName: "pendingInstanceCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RollbackStatusInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RollbackStatusInfo",
    modelProperties: {
      successfullyRolledbackInstanceCount: {
        serializedName: "successfullyRolledbackInstanceCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      failedRolledbackInstanceCount: {
        serializedName: "failedRolledbackInstanceCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      rollbackError: {
        serializedName: "rollbackError",
        type: {
          name: "Composite",
          className: "ApiError"
        }
      }
    }
  }
};

export const RollingUpgradeRunningStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RollingUpgradeRunningStatus",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["RollingForward", "Cancelled", "Completed", "Faulted"]
        }
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastAction: {
        serializedName: "lastAction",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Start", "Cancel"]
        }
      },
      lastActionTime: {
        serializedName: "lastActionTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const RecoveryWalkResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecoveryWalkResponse",
    modelProperties: {
      walkPerformed: {
        serializedName: "walkPerformed",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      nextPlatformUpdateDomain: {
        serializedName: "nextPlatformUpdateDomain",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VMScaleSetConvertToSinglePlacementGroupInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VMScaleSetConvertToSinglePlacementGroupInput",
    modelProperties: {
      activePlacementGroupId: {
        serializedName: "activePlacementGroupId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OrchestrationServiceStateInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrchestrationServiceStateInput",
    modelProperties: {
      serviceName: {
        serializedName: "serviceName",
        required: true,
        type: {
          name: "String"
        }
      },
      action: {
        serializedName: "action",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMExtensionsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMExtensionsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetVMExtension"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMInstanceView",
    modelProperties: {
      platformUpdateDomain: {
        serializedName: "platformUpdateDomain",
        type: {
          name: "Number"
        }
      },
      platformFaultDomain: {
        serializedName: "platformFaultDomain",
        type: {
          name: "Number"
        }
      },
      rdpThumbPrint: {
        serializedName: "rdpThumbPrint",
        type: {
          name: "String"
        }
      },
      vmAgent: {
        serializedName: "vmAgent",
        type: {
          name: "Composite",
          className: "VirtualMachineAgentInstanceView"
        }
      },
      maintenanceRedeployStatus: {
        serializedName: "maintenanceRedeployStatus",
        type: {
          name: "Composite",
          className: "MaintenanceRedeployStatus"
        }
      },
      disks: {
        serializedName: "disks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DiskInstanceView"
            }
          }
        }
      },
      extensions: {
        serializedName: "extensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineExtensionInstanceView"
            }
          }
        }
      },
      vmHealth: {
        serializedName: "vmHealth",
        type: {
          name: "Composite",
          className: "VirtualMachineHealthStatus"
        }
      },
      bootDiagnostics: {
        serializedName: "bootDiagnostics",
        type: {
          name: "Composite",
          className: "BootDiagnosticsInstanceView"
        }
      },
      statuses: {
        serializedName: "statuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      },
      assignedHost: {
        serializedName: "assignedHost",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      placementGroupId: {
        serializedName: "placementGroupId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMNetworkProfileConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMNetworkProfileConfiguration",
    modelProperties: {
      networkInterfaceConfigurations: {
        serializedName: "networkInterfaceConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetNetworkConfiguration"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMProtectionPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMProtectionPolicy",
    modelProperties: {
      protectFromScaleIn: {
        serializedName: "protectFromScaleIn",
        type: {
          name: "Boolean"
        }
      },
      protectFromScaleSetActions: {
        serializedName: "protectFromScaleSetActions",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetVM"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LogAnalyticsInputBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogAnalyticsInputBase",
    modelProperties: {
      blobContainerSasUri: {
        serializedName: "blobContainerSasUri",
        required: true,
        type: {
          name: "String"
        }
      },
      fromTime: {
        serializedName: "fromTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      toTime: {
        serializedName: "toTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      groupByThrottlePolicy: {
        serializedName: "groupByThrottlePolicy",
        type: {
          name: "Boolean"
        }
      },
      groupByOperationName: {
        serializedName: "groupByOperationName",
        type: {
          name: "Boolean"
        }
      },
      groupByResourceName: {
        serializedName: "groupByResourceName",
        type: {
          name: "Boolean"
        }
      },
      groupByClientApplicationId: {
        serializedName: "groupByClientApplicationId",
        type: {
          name: "Boolean"
        }
      },
      groupByUserAgent: {
        serializedName: "groupByUserAgent",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const LogAnalyticsOperationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogAnalyticsOperationResult",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LogAnalyticsOutput"
        }
      }
    }
  }
};

export const LogAnalyticsOutput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogAnalyticsOutput",
    modelProperties: {
      output: {
        serializedName: "output",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RunCommandListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunCommandListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunCommandDocumentBase"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RunCommandDocumentBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunCommandDocumentBase",
    modelProperties: {
      schema: {
        serializedName: "$schema",
        required: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      osType: {
        serializedName: "osType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RunCommandParameterDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunCommandParameterDefinition",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "String"
        }
      },
      required: {
        serializedName: "required",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const RunCommandInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunCommandInput",
    modelProperties: {
      commandId: {
        serializedName: "commandId",
        required: true,
        type: {
          name: "String"
        }
      },
      script: {
        serializedName: "script",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunCommandInputParameter"
            }
          }
        }
      }
    }
  }
};

export const RunCommandInputParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunCommandInputParameter",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RunCommandResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunCommandResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineRunCommandScriptSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineRunCommandScriptSource",
    modelProperties: {
      script: {
        serializedName: "script",
        type: {
          name: "String"
        }
      },
      scriptUri: {
        serializedName: "scriptUri",
        type: {
          name: "String"
        }
      },
      commandId: {
        serializedName: "commandId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineRunCommandInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineRunCommandInstanceView",
    modelProperties: {
      executionState: {
        serializedName: "executionState",
        type: {
          name: "String"
        }
      },
      executionMessage: {
        serializedName: "executionMessage",
        type: {
          name: "String"
        }
      },
      exitCode: {
        serializedName: "exitCode",
        type: {
          name: "Number"
        }
      },
      output: {
        serializedName: "output",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime"
        }
      },
      statuses: {
        serializedName: "statuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineRunCommandsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineRunCommandsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineRunCommand"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSkusResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkusResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSku"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Composite",
          className: "ResourceSkuCapacity"
        }
      },
      locations: {
        serializedName: "locations",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      locationInfo: {
        serializedName: "locationInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuLocationInfo"
            }
          }
        }
      },
      apiVersions: {
        serializedName: "apiVersions",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      costs: {
        serializedName: "costs",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuCosts"
            }
          }
        }
      },
      capabilities: {
        serializedName: "capabilities",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuCapabilities"
            }
          }
        }
      },
      restrictions: {
        serializedName: "restrictions",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuRestrictions"
            }
          }
        }
      }
    }
  }
};

export const ResourceSkuCapacity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuCapacity",
    modelProperties: {
      minimum: {
        serializedName: "minimum",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maximum: {
        serializedName: "maximum",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      default: {
        serializedName: "default",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      scaleType: {
        serializedName: "scaleType",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Automatic", "Manual", "None"]
        }
      }
    }
  }
};

export const ResourceSkuLocationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuLocationInfo",
    modelProperties: {
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      zones: {
        serializedName: "zones",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      zoneDetails: {
        serializedName: "zoneDetails",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuZoneDetails"
            }
          }
        }
      }
    }
  }
};

export const ResourceSkuZoneDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuZoneDetails",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      capabilities: {
        serializedName: "capabilities",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuCapabilities"
            }
          }
        }
      }
    }
  }
};

export const ResourceSkuCapabilities: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuCapabilities",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSkuCosts: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuCosts",
    modelProperties: {
      meterID: {
        serializedName: "meterID",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      extendedUnit: {
        serializedName: "extendedUnit",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSkuRestrictions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuRestrictions",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Location", "Zone"]
        }
      },
      values: {
        serializedName: "values",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      restrictionInfo: {
        serializedName: "restrictionInfo",
        type: {
          name: "Composite",
          className: "ResourceSkuRestrictionInfo"
        }
      },
      reasonCode: {
        serializedName: "reasonCode",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["QuotaId", "NotAvailableForSubscription"]
        }
      }
    }
  }
};

export const ResourceSkuRestrictionInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuRestrictionInfo",
    modelProperties: {
      locations: {
        serializedName: "locations",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      zones: {
        serializedName: "zones",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DiskSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskSku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PurchasePlanAutoGenerated: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PurchasePlanAutoGenerated",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        required: true,
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        required: true,
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreationData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreationData",
    modelProperties: {
      createOption: {
        serializedName: "createOption",
        required: true,
        type: {
          name: "String"
        }
      },
      storageAccountId: {
        serializedName: "storageAccountId",
        type: {
          name: "String"
        }
      },
      imageReference: {
        serializedName: "imageReference",
        type: {
          name: "Composite",
          className: "ImageDiskReference"
        }
      },
      galleryImageReference: {
        serializedName: "galleryImageReference",
        type: {
          name: "Composite",
          className: "ImageDiskReference"
        }
      },
      sourceUri: {
        serializedName: "sourceUri",
        type: {
          name: "String"
        }
      },
      sourceResourceId: {
        serializedName: "sourceResourceId",
        type: {
          name: "String"
        }
      },
      sourceUniqueId: {
        serializedName: "sourceUniqueId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      uploadSizeBytes: {
        serializedName: "uploadSizeBytes",
        type: {
          name: "Number"
        }
      },
      logicalSectorSize: {
        serializedName: "logicalSectorSize",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ImageDiskReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageDiskReference",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      lun: {
        serializedName: "lun",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EncryptionSettingsCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionSettingsCollection",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      encryptionSettings: {
        serializedName: "encryptionSettings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EncryptionSettingsElement"
            }
          }
        }
      },
      encryptionSettingsVersion: {
        serializedName: "encryptionSettingsVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionSettingsElement: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionSettingsElement",
    modelProperties: {
      diskEncryptionKey: {
        serializedName: "diskEncryptionKey",
        type: {
          name: "Composite",
          className: "KeyVaultAndSecretReference"
        }
      },
      keyEncryptionKey: {
        serializedName: "keyEncryptionKey",
        type: {
          name: "Composite",
          className: "KeyVaultAndKeyReference"
        }
      }
    }
  }
};

export const KeyVaultAndSecretReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultAndSecretReference",
    modelProperties: {
      sourceVault: {
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "SourceVault"
        }
      },
      secretUrl: {
        serializedName: "secretUrl",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SourceVault: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SourceVault",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyVaultAndKeyReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultAndKeyReference",
    modelProperties: {
      sourceVault: {
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "SourceVault"
        }
      },
      keyUrl: {
        serializedName: "keyUrl",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Encryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Encryption",
    modelProperties: {
      diskEncryptionSetId: {
        serializedName: "diskEncryptionSetId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ShareInfoElement: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ShareInfoElement",
    modelProperties: {
      vmUri: {
        serializedName: "vmUri",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PropertyUpdatesInProgress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PropertyUpdatesInProgress",
    modelProperties: {
      targetTier: {
        serializedName: "targetTier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiskSecurityProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskSecurityProfile",
    modelProperties: {
      securityType: {
        serializedName: "securityType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiskUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "DiskSku"
        }
      },
      osType: {
        serializedName: "properties.osType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      diskSizeGB: {
        serializedName: "properties.diskSizeGB",
        type: {
          name: "Number"
        }
      },
      encryptionSettingsCollection: {
        serializedName: "properties.encryptionSettingsCollection",
        type: {
          name: "Composite",
          className: "EncryptionSettingsCollection"
        }
      },
      diskIopsReadWrite: {
        serializedName: "properties.diskIOPSReadWrite",
        type: {
          name: "Number"
        }
      },
      diskMBpsReadWrite: {
        serializedName: "properties.diskMBpsReadWrite",
        type: {
          name: "Number"
        }
      },
      diskIopsReadOnly: {
        serializedName: "properties.diskIOPSReadOnly",
        type: {
          name: "Number"
        }
      },
      diskMBpsReadOnly: {
        serializedName: "properties.diskMBpsReadOnly",
        type: {
          name: "Number"
        }
      },
      maxShares: {
        serializedName: "properties.maxShares",
        type: {
          name: "Number"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      },
      networkAccessPolicy: {
        serializedName: "properties.networkAccessPolicy",
        type: {
          name: "String"
        }
      },
      diskAccessId: {
        serializedName: "properties.diskAccessId",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "properties.tier",
        type: {
          name: "String"
        }
      },
      burstingEnabled: {
        serializedName: "properties.burstingEnabled",
        type: {
          name: "Boolean"
        }
      },
      purchasePlan: {
        serializedName: "properties.purchasePlan",
        type: {
          name: "Composite",
          className: "PurchasePlanAutoGenerated"
        }
      },
      propertyUpdatesInProgress: {
        serializedName: "properties.propertyUpdatesInProgress",
        type: {
          name: "Composite",
          className: "PropertyUpdatesInProgress"
        }
      },
      supportsHibernation: {
        serializedName: "properties.supportsHibernation",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DiskList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Disk"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GrantAccessData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GrantAccessData",
    modelProperties: {
      access: {
        serializedName: "access",
        required: true,
        type: {
          name: "String"
        }
      },
      durationInSeconds: {
        serializedName: "durationInSeconds",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AccessUri: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccessUri",
    modelProperties: {
      accessSAS: {
        serializedName: "accessSAS",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SnapshotSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SnapshotSku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SnapshotUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SnapshotUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "SnapshotSku"
        }
      },
      osType: {
        serializedName: "properties.osType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      diskSizeGB: {
        serializedName: "properties.diskSizeGB",
        type: {
          name: "Number"
        }
      },
      encryptionSettingsCollection: {
        serializedName: "properties.encryptionSettingsCollection",
        type: {
          name: "Composite",
          className: "EncryptionSettingsCollection"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      },
      networkAccessPolicy: {
        serializedName: "properties.networkAccessPolicy",
        type: {
          name: "String"
        }
      },
      diskAccessId: {
        serializedName: "properties.diskAccessId",
        type: {
          name: "String"
        }
      },
      supportsHibernation: {
        serializedName: "properties.supportsHibernation",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SnapshotList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SnapshotList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Snapshot"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionSetIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionSetIdentity",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyForDiskEncryptionSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyForDiskEncryptionSet",
    modelProperties: {
      sourceVault: {
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "SourceVault"
        }
      },
      keyUrl: {
        serializedName: "keyUrl",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiskEncryptionSetUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskEncryptionSetUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "EncryptionSetIdentity"
        }
      },
      encryptionType: {
        serializedName: "properties.encryptionType",
        type: {
          name: "String"
        }
      },
      activeKey: {
        serializedName: "properties.activeKey",
        type: {
          name: "Composite",
          className: "KeyForDiskEncryptionSet"
        }
      },
      rotationToLatestKeyVersionEnabled: {
        serializedName: "properties.rotationToLatestKeyVersionEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DiskEncryptionSetList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskEncryptionSetList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DiskEncryptionSet"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceUriList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceUriList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiskAccessUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskAccessUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const DiskAccessList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskAccessList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DiskAccess"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      }
    }
  }
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      groupId: {
        serializedName: "properties.groupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyOnlyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyOnlyResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiskRestorePointList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskRestorePointList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DiskRestorePoint"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryIdentifier: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryIdentifier",
    modelProperties: {
      uniqueName: {
        serializedName: "uniqueName",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SharingProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharingProfile",
    modelProperties: {
      permissions: {
        serializedName: "permissions",
        type: {
          name: "String"
        }
      },
      groups: {
        serializedName: "groups",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharingProfileGroup"
            }
          }
        }
      }
    }
  }
};

export const SharingProfileGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharingProfileGroup",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      ids: {
        serializedName: "ids",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const UpdateResourceDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateResourceDefinition",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const GalleryImageIdentifier: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImageIdentifier",
    modelProperties: {
      publisher: {
        serializedName: "publisher",
        required: true,
        type: {
          name: "String"
        }
      },
      offer: {
        serializedName: "offer",
        required: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RecommendedMachineConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecommendedMachineConfiguration",
    modelProperties: {
      vCPUs: {
        serializedName: "vCPUs",
        type: {
          name: "Composite",
          className: "ResourceRange"
        }
      },
      memory: {
        serializedName: "memory",
        type: {
          name: "Composite",
          className: "ResourceRange"
        }
      }
    }
  }
};

export const ResourceRange: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceRange",
    modelProperties: {
      min: {
        serializedName: "min",
        type: {
          name: "Number"
        }
      },
      max: {
        serializedName: "max",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Disallowed: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Disallowed",
    modelProperties: {
      diskTypes: {
        serializedName: "diskTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ImagePurchasePlan: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImagePurchasePlan",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryImageFeature: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImageFeature",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryArtifactPublishingProfileBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryArtifactPublishingProfileBase",
    modelProperties: {
      targetRegions: {
        serializedName: "targetRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TargetRegion"
            }
          }
        }
      },
      replicaCount: {
        serializedName: "replicaCount",
        type: {
          name: "Number"
        }
      },
      excludeFromLatest: {
        serializedName: "excludeFromLatest",
        type: {
          name: "Boolean"
        }
      },
      publishedDate: {
        serializedName: "publishedDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      endOfLifeDate: {
        serializedName: "endOfLifeDate",
        type: {
          name: "DateTime"
        }
      },
      storageAccountType: {
        serializedName: "storageAccountType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TargetRegion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TargetRegion",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      regionalReplicaCount: {
        serializedName: "regionalReplicaCount",
        type: {
          name: "Number"
        }
      },
      storageAccountType: {
        serializedName: "storageAccountType",
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "encryption",
        type: {
          name: "Composite",
          className: "EncryptionImages"
        }
      }
    }
  }
};

export const EncryptionImages: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionImages",
    modelProperties: {
      osDiskImage: {
        serializedName: "osDiskImage",
        type: {
          name: "Composite",
          className: "OSDiskImageEncryption"
        }
      },
      dataDiskImages: {
        serializedName: "dataDiskImages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataDiskImageEncryption"
            }
          }
        }
      }
    }
  }
};

export const DiskImageEncryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskImageEncryption",
    modelProperties: {
      diskEncryptionSetId: {
        serializedName: "diskEncryptionSetId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryImageVersionStorageProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImageVersionStorageProfile",
    modelProperties: {
      source: {
        serializedName: "source",
        type: {
          name: "Composite",
          className: "GalleryArtifactVersionSource"
        }
      },
      osDiskImage: {
        serializedName: "osDiskImage",
        type: {
          name: "Composite",
          className: "GalleryOSDiskImage"
        }
      },
      dataDiskImages: {
        serializedName: "dataDiskImages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalleryDataDiskImage"
            }
          }
        }
      }
    }
  }
};

export const GalleryArtifactVersionSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryArtifactVersionSource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      uri: {
        serializedName: "uri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryDiskImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryDiskImage",
    modelProperties: {
      sizeInGB: {
        serializedName: "sizeInGB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      hostCaching: {
        serializedName: "hostCaching",
        type: {
          name: "Enum",
          allowedValues: ["None", "ReadOnly", "ReadWrite"]
        }
      },
      source: {
        serializedName: "source",
        type: {
          name: "Composite",
          className: "GalleryArtifactVersionSource"
        }
      }
    }
  }
};

export const ReplicationStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReplicationStatus",
    modelProperties: {
      aggregatedState: {
        serializedName: "aggregatedState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      summary: {
        serializedName: "summary",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RegionalReplicationStatus"
            }
          }
        }
      }
    }
  }
};

export const RegionalReplicationStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RegionalReplicationStatus",
    modelProperties: {
      region: {
        serializedName: "region",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      progress: {
        serializedName: "progress",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const UserArtifactSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserArtifactSource",
    modelProperties: {
      mediaLink: {
        serializedName: "mediaLink",
        required: true,
        type: {
          name: "String"
        }
      },
      defaultConfigurationLink: {
        serializedName: "defaultConfigurationLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserArtifactManage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserArtifactManage",
    modelProperties: {
      install: {
        serializedName: "install",
        required: true,
        type: {
          name: "String"
        }
      },
      remove: {
        serializedName: "remove",
        required: true,
        type: {
          name: "String"
        }
      },
      update: {
        serializedName: "update",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Gallery"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryImageList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImageList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalleryImage"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryImageVersionList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImageVersionList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalleryImageVersion"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryApplicationList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryApplicationList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalleryApplication"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryApplicationVersionList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryApplicationVersionList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalleryApplicationVersion"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SharingUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharingUpdate",
    modelProperties: {
      operationType: {
        serializedName: "operationType",
        required: true,
        type: {
          name: "String"
        }
      },
      groups: {
        serializedName: "groups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharingProfileGroup"
            }
          }
        }
      }
    }
  }
};

export const SharedGalleryList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedGalleryList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedGallery"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PirResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PirResource",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SharedGalleryImageList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedGalleryImageList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedGalleryImage"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SharedGalleryImageVersionList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedGalleryImageVersionList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedGalleryImageVersion"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RoleInstance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleInstance",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "InstanceSku"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "RoleInstanceProperties"
        }
      }
    }
  }
};

export const InstanceSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InstanceSku",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RoleInstanceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleInstanceProperties",
    modelProperties: {
      networkProfile: {
        serializedName: "networkProfile",
        type: {
          name: "Composite",
          className: "RoleInstanceNetworkProfile"
        }
      },
      instanceView: {
        serializedName: "instanceView",
        type: {
          name: "Composite",
          className: "RoleInstanceView"
        }
      }
    }
  }
};

export const RoleInstanceNetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleInstanceNetworkProfile",
    modelProperties: {
      networkInterfaces: {
        serializedName: "networkInterfaces",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      }
    }
  }
};

export const RoleInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleInstanceView",
    modelProperties: {
      platformUpdateDomain: {
        serializedName: "platformUpdateDomain",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      platformFaultDomain: {
        serializedName: "platformFaultDomain",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      privateId: {
        serializedName: "privateId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      statuses: {
        serializedName: "statuses",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceInstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const ResourceInstanceViewStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceInstanceViewStatus",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      displayStatus: {
        serializedName: "displayStatus",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      time: {
        serializedName: "time",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      level: {
        serializedName: "level",
        type: {
          name: "Enum",
          allowedValues: ["Info", "Warning", "Error"]
        }
      }
    }
  }
};

export const RoleInstanceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleInstanceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoleInstance"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudServiceRole: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceRole",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "CloudServiceRoleSku"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "CloudServiceRoleProperties"
        }
      }
    }
  }
};

export const CloudServiceRoleSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceRoleSku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CloudServiceRoleProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceRoleProperties",
    modelProperties: {
      uniqueId: {
        serializedName: "uniqueId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudServiceRoleListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceRoleListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudServiceRole"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudService: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudService",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "CloudServiceProperties"
        }
      }
    }
  }
};

export const CloudServiceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceProperties",
    modelProperties: {
      packageUrl: {
        serializedName: "packageUrl",
        type: {
          name: "String"
        }
      },
      configuration: {
        serializedName: "configuration",
        type: {
          name: "String"
        }
      },
      configurationUrl: {
        serializedName: "configurationUrl",
        type: {
          name: "String"
        }
      },
      startCloudService: {
        serializedName: "startCloudService",
        type: {
          name: "Boolean"
        }
      },
      allowModelOverride: {
        serializedName: "allowModelOverride",
        type: {
          name: "Boolean"
        }
      },
      upgradeMode: {
        serializedName: "upgradeMode",
        type: {
          name: "String"
        }
      },
      roleProfile: {
        serializedName: "roleProfile",
        type: {
          name: "Composite",
          className: "CloudServiceRoleProfile"
        }
      },
      osProfile: {
        serializedName: "osProfile",
        type: {
          name: "Composite",
          className: "CloudServiceOsProfile"
        }
      },
      networkProfile: {
        serializedName: "networkProfile",
        type: {
          name: "Composite",
          className: "CloudServiceNetworkProfile"
        }
      },
      extensionProfile: {
        serializedName: "extensionProfile",
        type: {
          name: "Composite",
          className: "CloudServiceExtensionProfile"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      uniqueId: {
        serializedName: "uniqueId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudServiceRoleProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceRoleProfile",
    modelProperties: {
      roles: {
        serializedName: "roles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudServiceRoleProfileProperties"
            }
          }
        }
      }
    }
  }
};

export const CloudServiceRoleProfileProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceRoleProfileProperties",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "CloudServiceRoleSku"
        }
      }
    }
  }
};

export const CloudServiceOsProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceOsProfile",
    modelProperties: {
      secrets: {
        serializedName: "secrets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudServiceVaultSecretGroup"
            }
          }
        }
      }
    }
  }
};

export const CloudServiceVaultSecretGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceVaultSecretGroup",
    modelProperties: {
      sourceVault: {
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      vaultCertificates: {
        serializedName: "vaultCertificates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudServiceVaultCertificate"
            }
          }
        }
      }
    }
  }
};

export const CloudServiceVaultCertificate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceVaultCertificate",
    modelProperties: {
      certificateUrl: {
        serializedName: "certificateUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudServiceNetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceNetworkProfile",
    modelProperties: {
      loadBalancerConfigurations: {
        serializedName: "loadBalancerConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LoadBalancerConfiguration"
            }
          }
        }
      },
      swappableCloudService: {
        serializedName: "swappableCloudService",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      }
    }
  }
};

export const LoadBalancerConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadBalancerConfiguration",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LoadBalancerConfigurationProperties"
        }
      }
    }
  }
};

export const LoadBalancerConfigurationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadBalancerConfigurationProperties",
    modelProperties: {
      frontendIPConfigurations: {
        serializedName: "frontendIPConfigurations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LoadBalancerFrontendIPConfiguration"
            }
          }
        }
      }
    }
  }
};

export const LoadBalancerFrontendIPConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadBalancerFrontendIPConfiguration",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LoadBalancerFrontendIPConfigurationProperties"
        }
      }
    }
  }
};

export const LoadBalancerFrontendIPConfigurationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadBalancerFrontendIPConfigurationProperties",
    modelProperties: {
      publicIPAddress: {
        serializedName: "publicIPAddress",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      subnet: {
        serializedName: "subnet",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      privateIPAddress: {
        serializedName: "privateIPAddress",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudServiceExtensionProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceExtensionProfile",
    modelProperties: {
      extensions: {
        serializedName: "extensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Extension"
            }
          }
        }
      }
    }
  }
};

export const Extension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Extension",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "CloudServiceExtensionProperties"
        }
      }
    }
  }
};

export const CloudServiceExtensionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceExtensionProperties",
    modelProperties: {
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "settings",
        type: {
          name: "String"
        }
      },
      protectedSettings: {
        serializedName: "protectedSettings",
        type: {
          name: "String"
        }
      },
      protectedSettingsFromKeyVault: {
        serializedName: "protectedSettingsFromKeyVault",
        type: {
          name: "Composite",
          className: "CloudServiceVaultAndSecretReference"
        }
      },
      forceUpdateTag: {
        serializedName: "forceUpdateTag",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      rolesAppliedTo: {
        serializedName: "rolesAppliedTo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CloudServiceVaultAndSecretReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceVaultAndSecretReference",
    modelProperties: {
      sourceVault: {
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      secretUrl: {
        serializedName: "secretUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudServiceUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const CloudServiceInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceInstanceView",
    modelProperties: {
      roleInstance: {
        serializedName: "roleInstance",
        type: {
          name: "Composite",
          className: "InstanceViewStatusesSummary"
        }
      },
      sdkVersion: {
        serializedName: "sdkVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateIds: {
        serializedName: "privateIds",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      statuses: {
        serializedName: "statuses",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceInstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const InstanceViewStatusesSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InstanceViewStatusesSummary",
    modelProperties: {
      statusesSummary: {
        serializedName: "statusesSummary",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StatusCodeCount"
            }
          }
        }
      }
    }
  }
};

export const StatusCodeCount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StatusCodeCount",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CloudServiceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudServiceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudService"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RoleInstances: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleInstances",
    modelProperties: {
      roleInstances: {
        serializedName: "roleInstances",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const UpdateDomain: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateDomain",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateDomainListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateDomainListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UpdateDomain"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OSVersion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSVersion",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "OSVersionProperties"
        }
      }
    }
  }
};

export const OSVersionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSVersionProperties",
    modelProperties: {
      family: {
        serializedName: "family",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      familyLabel: {
        serializedName: "familyLabel",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDefault: {
        serializedName: "isDefault",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      isActive: {
        serializedName: "isActive",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const OSVersionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSVersionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OSVersion"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OSFamily: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSFamily",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "OSFamilyProperties"
        }
      }
    }
  }
};

export const OSFamilyProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSFamilyProperties",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      versions: {
        serializedName: "versions",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OSVersionPropertiesBase"
            }
          }
        }
      }
    }
  }
};

export const OSVersionPropertiesBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSVersionPropertiesBase",
    modelProperties: {
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDefault: {
        serializedName: "isDefault",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      isActive: {
        serializedName: "isActive",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const OSFamilyListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSFamilyListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OSFamily"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GalleryArtifactSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryArtifactSource",
    modelProperties: {
      managedImage: {
        serializedName: "managedImage",
        type: {
          name: "Composite",
          className: "ManagedArtifact"
        }
      }
    }
  }
};

export const ManagedArtifact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedArtifact",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResourceWithColocationStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResourceWithColocationStatus",
    modelProperties: {
      ...SubResource.type.modelProperties,
      colocationStatus: {
        serializedName: "colocationStatus",
        type: {
          name: "Composite",
          className: "InstanceViewStatus"
        }
      }
    }
  }
};

export const VirtualMachineImageResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineImageResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      extendedLocation: {
        serializedName: "extendedLocation",
        type: {
          name: "Composite",
          className: "ExtendedLocation"
        }
      }
    }
  }
};

export const ImageReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageReference",
    modelProperties: {
      ...SubResource.type.modelProperties,
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      offer: {
        serializedName: "offer",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      },
      exactVersion: {
        serializedName: "exactVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiskEncryptionSetParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskEncryptionSetParameters",
    modelProperties: {
      ...SubResource.type.modelProperties
    }
  }
};

export const ManagedDiskParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedDiskParameters",
    modelProperties: {
      ...SubResource.type.modelProperties,
      storageAccountType: {
        serializedName: "storageAccountType",
        type: {
          name: "String"
        }
      },
      diskEncryptionSet: {
        serializedName: "diskEncryptionSet",
        type: {
          name: "Composite",
          className: "DiskEncryptionSetParameters"
        }
      }
    }
  }
};

export const NetworkInterfaceReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkInterfaceReference",
    modelProperties: {
      ...SubResource.type.modelProperties,
      primary: {
        serializedName: "properties.primary",
        type: {
          name: "Boolean"
        }
      },
      deleteOption: {
        serializedName: "properties.deleteOption",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetIPConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetIPConfiguration",
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "properties.subnet",
        type: {
          name: "Composite",
          className: "ApiEntityReference"
        }
      },
      primary: {
        serializedName: "properties.primary",
        type: {
          name: "Boolean"
        }
      },
      publicIPAddressConfiguration: {
        serializedName: "properties.publicIPAddressConfiguration",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetPublicIPAddressConfiguration"
        }
      },
      privateIPAddressVersion: {
        serializedName: "properties.privateIPAddressVersion",
        type: {
          name: "String"
        }
      },
      applicationGatewayBackendAddressPools: {
        serializedName: "properties.applicationGatewayBackendAddressPools",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      applicationSecurityGroups: {
        serializedName: "properties.applicationSecurityGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      loadBalancerBackendAddressPools: {
        serializedName: "properties.loadBalancerBackendAddressPools",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      loadBalancerInboundNatPools: {
        serializedName: "properties.loadBalancerInboundNatPools",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetNetworkConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetNetworkConfiguration",
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      primary: {
        serializedName: "properties.primary",
        type: {
          name: "Boolean"
        }
      },
      enableAcceleratedNetworking: {
        serializedName: "properties.enableAcceleratedNetworking",
        type: {
          name: "Boolean"
        }
      },
      enableFpga: {
        serializedName: "properties.enableFpga",
        type: {
          name: "Boolean"
        }
      },
      networkSecurityGroup: {
        serializedName: "properties.networkSecurityGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      dnsSettings: {
        serializedName: "properties.dnsSettings",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetNetworkConfigurationDnsSettings"
        }
      },
      ipConfigurations: {
        serializedName: "properties.ipConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetIPConfiguration"
            }
          }
        }
      },
      enableIPForwarding: {
        serializedName: "properties.enableIPForwarding",
        type: {
          name: "Boolean"
        }
      },
      deleteOption: {
        serializedName: "properties.deleteOption",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineCaptureResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineCaptureResult",
    modelProperties: {
      ...SubResource.type.modelProperties,
      schema: {
        serializedName: "$schema",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      contentVersion: {
        serializedName: "contentVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        readOnly: true,
        type: {
          name: "any"
        }
      },
      resources: {
        serializedName: "resources",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetUpdateIPConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetUpdateIPConfiguration",
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "properties.subnet",
        type: {
          name: "Composite",
          className: "ApiEntityReference"
        }
      },
      primary: {
        serializedName: "properties.primary",
        type: {
          name: "Boolean"
        }
      },
      publicIPAddressConfiguration: {
        serializedName: "properties.publicIPAddressConfiguration",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetUpdatePublicIPAddressConfiguration"
        }
      },
      privateIPAddressVersion: {
        serializedName: "properties.privateIPAddressVersion",
        type: {
          name: "String"
        }
      },
      applicationGatewayBackendAddressPools: {
        serializedName: "properties.applicationGatewayBackendAddressPools",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      applicationSecurityGroups: {
        serializedName: "properties.applicationSecurityGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      loadBalancerBackendAddressPools: {
        serializedName: "properties.loadBalancerBackendAddressPools",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      loadBalancerInboundNatPools: {
        serializedName: "properties.loadBalancerInboundNatPools",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetUpdateNetworkConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetUpdateNetworkConfiguration",
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      primary: {
        serializedName: "properties.primary",
        type: {
          name: "Boolean"
        }
      },
      enableAcceleratedNetworking: {
        serializedName: "properties.enableAcceleratedNetworking",
        type: {
          name: "Boolean"
        }
      },
      enableFpga: {
        serializedName: "properties.enableFpga",
        type: {
          name: "Boolean"
        }
      },
      networkSecurityGroup: {
        serializedName: "properties.networkSecurityGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      dnsSettings: {
        serializedName: "properties.dnsSettings",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetNetworkConfigurationDnsSettings"
        }
      },
      ipConfigurations: {
        serializedName: "properties.ipConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineScaleSetUpdateIPConfiguration"
            }
          }
        }
      },
      enableIPForwarding: {
        serializedName: "properties.enableIPForwarding",
        type: {
          name: "Boolean"
        }
      },
      deleteOption: {
        serializedName: "properties.deleteOption",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailabilitySet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilitySet",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      platformUpdateDomainCount: {
        serializedName: "properties.platformUpdateDomainCount",
        type: {
          name: "Number"
        }
      },
      platformFaultDomainCount: {
        serializedName: "properties.platformFaultDomainCount",
        type: {
          name: "Number"
        }
      },
      virtualMachines: {
        serializedName: "properties.virtualMachines",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      proximityPlacementGroup: {
        serializedName: "properties.proximityPlacementGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      statuses: {
        serializedName: "properties.statuses",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const ProximityPlacementGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProximityPlacementGroup",
    modelProperties: {
      ...Resource.type.modelProperties,
      proximityPlacementGroupType: {
        serializedName: "properties.proximityPlacementGroupType",
        type: {
          name: "String"
        }
      },
      virtualMachines: {
        serializedName: "properties.virtualMachines",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResourceWithColocationStatus"
            }
          }
        }
      },
      virtualMachineScaleSets: {
        serializedName: "properties.virtualMachineScaleSets",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResourceWithColocationStatus"
            }
          }
        }
      },
      availabilitySets: {
        serializedName: "properties.availabilitySets",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResourceWithColocationStatus"
            }
          }
        }
      },
      colocationStatus: {
        serializedName: "properties.colocationStatus",
        type: {
          name: "Composite",
          className: "InstanceViewStatus"
        }
      }
    }
  }
};

export const DedicatedHostGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostGroup",
    modelProperties: {
      ...Resource.type.modelProperties,
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      platformFaultDomainCount: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "properties.platformFaultDomainCount",
        type: {
          name: "Number"
        }
      },
      hosts: {
        serializedName: "properties.hosts",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResourceReadOnly"
            }
          }
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "DedicatedHostGroupInstanceView"
        }
      },
      supportAutomaticPlacement: {
        serializedName: "properties.supportAutomaticPlacement",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DedicatedHost: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHost",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      platformFaultDomain: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "properties.platformFaultDomain",
        type: {
          name: "Number"
        }
      },
      autoReplaceOnFailure: {
        serializedName: "properties.autoReplaceOnFailure",
        type: {
          name: "Boolean"
        }
      },
      hostId: {
        serializedName: "properties.hostId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      virtualMachines: {
        serializedName: "properties.virtualMachines",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResourceReadOnly"
            }
          }
        }
      },
      licenseType: {
        serializedName: "properties.licenseType",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "Windows_Server_Hybrid",
            "Windows_Server_Perpetual"
          ]
        }
      },
      provisioningTime: {
        serializedName: "properties.provisioningTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "DedicatedHostInstanceView"
        }
      }
    }
  }
};

export const SshPublicKeyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SshPublicKeyResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      publicKey: {
        serializedName: "properties.publicKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineExtensionImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineExtensionImage",
    modelProperties: {
      ...Resource.type.modelProperties,
      operatingSystem: {
        serializedName: "properties.operatingSystem",
        type: {
          name: "String"
        }
      },
      computeRole: {
        serializedName: "properties.computeRole",
        type: {
          name: "String"
        }
      },
      handlerSchema: {
        serializedName: "properties.handlerSchema",
        type: {
          name: "String"
        }
      },
      vmScaleSetEnabled: {
        serializedName: "properties.vmScaleSetEnabled",
        type: {
          name: "Boolean"
        }
      },
      supportsMultipleExtensions: {
        serializedName: "properties.supportsMultipleExtensions",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const VirtualMachineExtension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineExtension",
    modelProperties: {
      ...Resource.type.modelProperties,
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "properties.publisher",
        type: {
          name: "String"
        }
      },
      typePropertiesType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "properties.typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      enableAutomaticUpgrade: {
        serializedName: "properties.enableAutomaticUpgrade",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "properties.settings",
        type: {
          name: "any"
        }
      },
      protectedSettings: {
        serializedName: "properties.protectedSettings",
        type: {
          name: "any"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "VirtualMachineExtensionInstanceView"
        }
      }
    }
  }
};

export const VirtualMachine: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachine",
    modelProperties: {
      ...Resource.type.modelProperties,
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      resources: {
        serializedName: "resources",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineExtension"
            }
          }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "VirtualMachineIdentity"
        }
      },
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      extendedLocation: {
        serializedName: "extendedLocation",
        type: {
          name: "Composite",
          className: "ExtendedLocation"
        }
      },
      hardwareProfile: {
        serializedName: "properties.hardwareProfile",
        type: {
          name: "Composite",
          className: "HardwareProfile"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      },
      additionalCapabilities: {
        serializedName: "properties.additionalCapabilities",
        type: {
          name: "Composite",
          className: "AdditionalCapabilities"
        }
      },
      osProfile: {
        serializedName: "properties.osProfile",
        type: {
          name: "Composite",
          className: "OSProfile"
        }
      },
      networkProfile: {
        serializedName: "properties.networkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile"
        }
      },
      securityProfile: {
        serializedName: "properties.securityProfile",
        type: {
          name: "Composite",
          className: "SecurityProfile"
        }
      },
      diagnosticsProfile: {
        serializedName: "properties.diagnosticsProfile",
        type: {
          name: "Composite",
          className: "DiagnosticsProfile"
        }
      },
      availabilitySet: {
        serializedName: "properties.availabilitySet",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      virtualMachineScaleSet: {
        serializedName: "properties.virtualMachineScaleSet",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      proximityPlacementGroup: {
        serializedName: "properties.proximityPlacementGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      priority: {
        serializedName: "properties.priority",
        type: {
          name: "String"
        }
      },
      evictionPolicy: {
        serializedName: "properties.evictionPolicy",
        type: {
          name: "String"
        }
      },
      billingProfile: {
        serializedName: "properties.billingProfile",
        type: {
          name: "Composite",
          className: "BillingProfile"
        }
      },
      host: {
        serializedName: "properties.host",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      hostGroup: {
        serializedName: "properties.hostGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "VirtualMachineInstanceView"
        }
      },
      licenseType: {
        serializedName: "properties.licenseType",
        type: {
          name: "String"
        }
      },
      vmId: {
        serializedName: "properties.vmId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensionsTimeBudget: {
        serializedName: "properties.extensionsTimeBudget",
        type: {
          name: "String"
        }
      },
      platformFaultDomain: {
        serializedName: "properties.platformFaultDomain",
        type: {
          name: "Number"
        }
      },
      scheduledEventsProfile: {
        serializedName: "properties.scheduledEventsProfile",
        type: {
          name: "Composite",
          className: "ScheduledEventsProfile"
        }
      },
      userData: {
        serializedName: "properties.userData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineScaleSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSet",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetIdentity"
        }
      },
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      extendedLocation: {
        serializedName: "extendedLocation",
        type: {
          name: "Composite",
          className: "ExtendedLocation"
        }
      },
      upgradePolicy: {
        serializedName: "properties.upgradePolicy",
        type: {
          name: "Composite",
          className: "UpgradePolicy"
        }
      },
      automaticRepairsPolicy: {
        serializedName: "properties.automaticRepairsPolicy",
        type: {
          name: "Composite",
          className: "AutomaticRepairsPolicy"
        }
      },
      virtualMachineProfile: {
        serializedName: "properties.virtualMachineProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetVMProfile"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      overprovision: {
        serializedName: "properties.overprovision",
        type: {
          name: "Boolean"
        }
      },
      doNotRunExtensionsOnOverprovisionedVMs: {
        serializedName: "properties.doNotRunExtensionsOnOverprovisionedVMs",
        type: {
          name: "Boolean"
        }
      },
      uniqueId: {
        serializedName: "properties.uniqueId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      singlePlacementGroup: {
        serializedName: "properties.singlePlacementGroup",
        type: {
          name: "Boolean"
        }
      },
      zoneBalance: {
        serializedName: "properties.zoneBalance",
        type: {
          name: "Boolean"
        }
      },
      platformFaultDomainCount: {
        serializedName: "properties.platformFaultDomainCount",
        type: {
          name: "Number"
        }
      },
      proximityPlacementGroup: {
        serializedName: "properties.proximityPlacementGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      hostGroup: {
        serializedName: "properties.hostGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      additionalCapabilities: {
        serializedName: "properties.additionalCapabilities",
        type: {
          name: "Composite",
          className: "AdditionalCapabilities"
        }
      },
      scaleInPolicy: {
        serializedName: "properties.scaleInPolicy",
        type: {
          name: "Composite",
          className: "ScaleInPolicy"
        }
      },
      orchestrationMode: {
        serializedName: "properties.orchestrationMode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Image: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Image",
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: "extendedLocation",
        type: {
          name: "Composite",
          className: "ExtendedLocation"
        }
      },
      sourceVirtualMachine: {
        serializedName: "properties.sourceVirtualMachine",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "ImageStorageProfile"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      hyperVGeneration: {
        serializedName: "properties.hyperVGeneration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RestorePointCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePointCollection",
    modelProperties: {
      ...Resource.type.modelProperties,
      source: {
        serializedName: "properties.source",
        type: {
          name: "Composite",
          className: "RestorePointCollectionSourceProperties"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      restorePointCollectionId: {
        serializedName: "properties.restorePointCollectionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      restorePoints: {
        serializedName: "properties.restorePoints",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RestorePoint"
            }
          }
        }
      }
    }
  }
};

export const RollingUpgradeStatusInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RollingUpgradeStatusInfo",
    modelProperties: {
      ...Resource.type.modelProperties,
      policy: {
        serializedName: "properties.policy",
        type: {
          name: "Composite",
          className: "RollingUpgradePolicy"
        }
      },
      runningStatus: {
        serializedName: "properties.runningStatus",
        type: {
          name: "Composite",
          className: "RollingUpgradeRunningStatus"
        }
      },
      progress: {
        serializedName: "properties.progress",
        type: {
          name: "Composite",
          className: "RollingUpgradeProgressInfo"
        }
      },
      error: {
        serializedName: "properties.error",
        type: {
          name: "Composite",
          className: "ApiError"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVM: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVM",
    modelProperties: {
      ...Resource.type.modelProperties,
      instanceId: {
        serializedName: "instanceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      resources: {
        serializedName: "resources",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineExtension"
            }
          }
        }
      },
      zones: {
        serializedName: "zones",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      latestModelApplied: {
        serializedName: "properties.latestModelApplied",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      vmId: {
        serializedName: "properties.vmId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetVMInstanceView"
        }
      },
      hardwareProfile: {
        serializedName: "properties.hardwareProfile",
        type: {
          name: "Composite",
          className: "HardwareProfile"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      },
      additionalCapabilities: {
        serializedName: "properties.additionalCapabilities",
        type: {
          name: "Composite",
          className: "AdditionalCapabilities"
        }
      },
      osProfile: {
        serializedName: "properties.osProfile",
        type: {
          name: "Composite",
          className: "OSProfile"
        }
      },
      securityProfile: {
        serializedName: "properties.securityProfile",
        type: {
          name: "Composite",
          className: "SecurityProfile"
        }
      },
      networkProfile: {
        serializedName: "properties.networkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile"
        }
      },
      networkProfileConfiguration: {
        serializedName: "properties.networkProfileConfiguration",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetVMNetworkProfileConfiguration"
        }
      },
      diagnosticsProfile: {
        serializedName: "properties.diagnosticsProfile",
        type: {
          name: "Composite",
          className: "DiagnosticsProfile"
        }
      },
      availabilitySet: {
        serializedName: "properties.availabilitySet",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      licenseType: {
        serializedName: "properties.licenseType",
        type: {
          name: "String"
        }
      },
      modelDefinitionApplied: {
        serializedName: "properties.modelDefinitionApplied",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      protectionPolicy: {
        serializedName: "properties.protectionPolicy",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetVMProtectionPolicy"
        }
      },
      userData: {
        serializedName: "properties.userData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineRunCommand: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineRunCommand",
    modelProperties: {
      ...Resource.type.modelProperties,
      source: {
        serializedName: "properties.source",
        type: {
          name: "Composite",
          className: "VirtualMachineRunCommandScriptSource"
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunCommandInputParameter"
            }
          }
        }
      },
      protectedParameters: {
        serializedName: "properties.protectedParameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunCommandInputParameter"
            }
          }
        }
      },
      asyncExecution: {
        serializedName: "properties.asyncExecution",
        type: {
          name: "Boolean"
        }
      },
      runAsUser: {
        serializedName: "properties.runAsUser",
        type: {
          name: "String"
        }
      },
      runAsPassword: {
        serializedName: "properties.runAsPassword",
        type: {
          name: "String"
        }
      },
      timeoutInSeconds: {
        serializedName: "properties.timeoutInSeconds",
        type: {
          name: "Number"
        }
      },
      outputBlobUri: {
        serializedName: "properties.outputBlobUri",
        type: {
          name: "String"
        }
      },
      errorBlobUri: {
        serializedName: "properties.errorBlobUri",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "VirtualMachineRunCommandInstanceView"
        }
      }
    }
  }
};

export const Disk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Disk",
    modelProperties: {
      ...Resource.type.modelProperties,
      managedBy: {
        serializedName: "managedBy",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      managedByExtended: {
        serializedName: "managedByExtended",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "DiskSku"
        }
      },
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      extendedLocation: {
        serializedName: "extendedLocation",
        type: {
          name: "Composite",
          className: "ExtendedLocation"
        }
      },
      timeCreated: {
        serializedName: "properties.timeCreated",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      osType: {
        serializedName: "properties.osType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      hyperVGeneration: {
        serializedName: "properties.hyperVGeneration",
        type: {
          name: "String"
        }
      },
      purchasePlan: {
        serializedName: "properties.purchasePlan",
        type: {
          name: "Composite",
          className: "PurchasePlanAutoGenerated"
        }
      },
      creationData: {
        serializedName: "properties.creationData",
        type: {
          name: "Composite",
          className: "CreationData"
        }
      },
      diskSizeGB: {
        serializedName: "properties.diskSizeGB",
        type: {
          name: "Number"
        }
      },
      diskSizeBytes: {
        serializedName: "properties.diskSizeBytes",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      uniqueId: {
        serializedName: "properties.uniqueId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      encryptionSettingsCollection: {
        serializedName: "properties.encryptionSettingsCollection",
        type: {
          name: "Composite",
          className: "EncryptionSettingsCollection"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      diskIopsReadWrite: {
        serializedName: "properties.diskIOPSReadWrite",
        type: {
          name: "Number"
        }
      },
      diskMBpsReadWrite: {
        serializedName: "properties.diskMBpsReadWrite",
        type: {
          name: "Number"
        }
      },
      diskIopsReadOnly: {
        serializedName: "properties.diskIOPSReadOnly",
        type: {
          name: "Number"
        }
      },
      diskMBpsReadOnly: {
        serializedName: "properties.diskMBpsReadOnly",
        type: {
          name: "Number"
        }
      },
      diskState: {
        serializedName: "properties.diskState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      },
      maxShares: {
        serializedName: "properties.maxShares",
        type: {
          name: "Number"
        }
      },
      shareInfo: {
        serializedName: "properties.shareInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ShareInfoElement"
            }
          }
        }
      },
      networkAccessPolicy: {
        serializedName: "properties.networkAccessPolicy",
        type: {
          name: "String"
        }
      },
      diskAccessId: {
        serializedName: "properties.diskAccessId",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "properties.tier",
        type: {
          name: "String"
        }
      },
      burstingEnabled: {
        serializedName: "properties.burstingEnabled",
        type: {
          name: "Boolean"
        }
      },
      propertyUpdatesInProgress: {
        serializedName: "properties.propertyUpdatesInProgress",
        type: {
          name: "Composite",
          className: "PropertyUpdatesInProgress"
        }
      },
      supportsHibernation: {
        serializedName: "properties.supportsHibernation",
        type: {
          name: "Boolean"
        }
      },
      securityProfile: {
        serializedName: "properties.securityProfile",
        type: {
          name: "Composite",
          className: "DiskSecurityProfile"
        }
      }
    }
  }
};

export const Snapshot: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Snapshot",
    modelProperties: {
      ...Resource.type.modelProperties,
      managedBy: {
        serializedName: "managedBy",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "SnapshotSku"
        }
      },
      extendedLocation: {
        serializedName: "extendedLocation",
        type: {
          name: "Composite",
          className: "ExtendedLocation"
        }
      },
      timeCreated: {
        serializedName: "properties.timeCreated",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      osType: {
        serializedName: "properties.osType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      hyperVGeneration: {
        serializedName: "properties.hyperVGeneration",
        type: {
          name: "String"
        }
      },
      purchasePlan: {
        serializedName: "properties.purchasePlan",
        type: {
          name: "Composite",
          className: "PurchasePlanAutoGenerated"
        }
      },
      creationData: {
        serializedName: "properties.creationData",
        type: {
          name: "Composite",
          className: "CreationData"
        }
      },
      diskSizeGB: {
        serializedName: "properties.diskSizeGB",
        type: {
          name: "Number"
        }
      },
      diskSizeBytes: {
        serializedName: "properties.diskSizeBytes",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      diskState: {
        serializedName: "properties.diskState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      uniqueId: {
        serializedName: "properties.uniqueId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      encryptionSettingsCollection: {
        serializedName: "properties.encryptionSettingsCollection",
        type: {
          name: "Composite",
          className: "EncryptionSettingsCollection"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      incremental: {
        serializedName: "properties.incremental",
        type: {
          name: "Boolean"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      },
      networkAccessPolicy: {
        serializedName: "properties.networkAccessPolicy",
        type: {
          name: "String"
        }
      },
      diskAccessId: {
        serializedName: "properties.diskAccessId",
        type: {
          name: "String"
        }
      },
      supportsHibernation: {
        serializedName: "properties.supportsHibernation",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DiskEncryptionSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskEncryptionSet",
    modelProperties: {
      ...Resource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "EncryptionSetIdentity"
        }
      },
      encryptionType: {
        serializedName: "properties.encryptionType",
        type: {
          name: "String"
        }
      },
      activeKey: {
        serializedName: "properties.activeKey",
        type: {
          name: "Composite",
          className: "KeyForDiskEncryptionSet"
        }
      },
      previousKeys: {
        serializedName: "properties.previousKeys",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyForDiskEncryptionSet"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      rotationToLatestKeyVersionEnabled: {
        serializedName: "properties.rotationToLatestKeyVersionEnabled",
        type: {
          name: "Boolean"
        }
      },
      lastKeyRotationTimestamp: {
        serializedName: "properties.lastKeyRotationTimestamp",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const DiskAccess: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskAccess",
    modelProperties: {
      ...Resource.type.modelProperties,
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      timeCreated: {
        serializedName: "properties.timeCreated",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Gallery: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Gallery",
    modelProperties: {
      ...Resource.type.modelProperties,
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      identifier: {
        serializedName: "properties.identifier",
        type: {
          name: "Composite",
          className: "GalleryIdentifier"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sharingProfile: {
        serializedName: "properties.sharingProfile",
        type: {
          name: "Composite",
          className: "SharingProfile"
        }
      }
    }
  }
};

export const GalleryImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImage",
    modelProperties: {
      ...Resource.type.modelProperties,
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      eula: {
        serializedName: "properties.eula",
        type: {
          name: "String"
        }
      },
      privacyStatementUri: {
        serializedName: "properties.privacyStatementUri",
        type: {
          name: "String"
        }
      },
      releaseNoteUri: {
        serializedName: "properties.releaseNoteUri",
        type: {
          name: "String"
        }
      },
      osType: {
        serializedName: "properties.osType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      osState: {
        serializedName: "properties.osState",
        type: {
          name: "Enum",
          allowedValues: ["Generalized", "Specialized"]
        }
      },
      hyperVGeneration: {
        serializedName: "properties.hyperVGeneration",
        type: {
          name: "String"
        }
      },
      endOfLifeDate: {
        serializedName: "properties.endOfLifeDate",
        type: {
          name: "DateTime"
        }
      },
      identifier: {
        serializedName: "properties.identifier",
        type: {
          name: "Composite",
          className: "GalleryImageIdentifier"
        }
      },
      recommended: {
        serializedName: "properties.recommended",
        type: {
          name: "Composite",
          className: "RecommendedMachineConfiguration"
        }
      },
      disallowed: {
        serializedName: "properties.disallowed",
        type: {
          name: "Composite",
          className: "Disallowed"
        }
      },
      purchasePlan: {
        serializedName: "properties.purchasePlan",
        type: {
          name: "Composite",
          className: "ImagePurchasePlan"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      features: {
        serializedName: "properties.features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalleryImageFeature"
            }
          }
        }
      }
    }
  }
};

export const GalleryImageVersion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImageVersion",
    modelProperties: {
      ...Resource.type.modelProperties,
      publishingProfile: {
        serializedName: "properties.publishingProfile",
        type: {
          name: "Composite",
          className: "GalleryImageVersionPublishingProfile"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "GalleryImageVersionStorageProfile"
        }
      },
      replicationStatus: {
        serializedName: "properties.replicationStatus",
        type: {
          name: "Composite",
          className: "ReplicationStatus"
        }
      }
    }
  }
};

export const GalleryApplication: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryApplication",
    modelProperties: {
      ...Resource.type.modelProperties,
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      eula: {
        serializedName: "properties.eula",
        type: {
          name: "String"
        }
      },
      privacyStatementUri: {
        serializedName: "properties.privacyStatementUri",
        type: {
          name: "String"
        }
      },
      releaseNoteUri: {
        serializedName: "properties.releaseNoteUri",
        type: {
          name: "String"
        }
      },
      endOfLifeDate: {
        serializedName: "properties.endOfLifeDate",
        type: {
          name: "DateTime"
        }
      },
      supportedOSType: {
        serializedName: "properties.supportedOSType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      }
    }
  }
};

export const GalleryApplicationVersion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryApplicationVersion",
    modelProperties: {
      ...Resource.type.modelProperties,
      publishingProfile: {
        serializedName: "properties.publishingProfile",
        type: {
          name: "Composite",
          className: "GalleryApplicationVersionPublishingProfile"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      replicationStatus: {
        serializedName: "properties.replicationStatus",
        type: {
          name: "Composite",
          className: "ReplicationStatus"
        }
      }
    }
  }
};

export const AvailabilitySetUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilitySetUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      platformUpdateDomainCount: {
        serializedName: "properties.platformUpdateDomainCount",
        type: {
          name: "Number"
        }
      },
      platformFaultDomainCount: {
        serializedName: "properties.platformFaultDomainCount",
        type: {
          name: "Number"
        }
      },
      virtualMachines: {
        serializedName: "properties.virtualMachines",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      proximityPlacementGroup: {
        serializedName: "properties.proximityPlacementGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      statuses: {
        serializedName: "properties.statuses",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InstanceViewStatus"
            }
          }
        }
      }
    }
  }
};

export const ProximityPlacementGroupUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProximityPlacementGroupUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties
    }
  }
};

export const DedicatedHostGroupUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostGroupUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      platformFaultDomainCount: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "properties.platformFaultDomainCount",
        type: {
          name: "Number"
        }
      },
      hosts: {
        serializedName: "properties.hosts",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResourceReadOnly"
            }
          }
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "DedicatedHostGroupInstanceView"
        }
      },
      supportAutomaticPlacement: {
        serializedName: "properties.supportAutomaticPlacement",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DedicatedHostUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      platformFaultDomain: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "properties.platformFaultDomain",
        type: {
          name: "Number"
        }
      },
      autoReplaceOnFailure: {
        serializedName: "properties.autoReplaceOnFailure",
        type: {
          name: "Boolean"
        }
      },
      hostId: {
        serializedName: "properties.hostId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      virtualMachines: {
        serializedName: "properties.virtualMachines",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResourceReadOnly"
            }
          }
        }
      },
      licenseType: {
        serializedName: "properties.licenseType",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "Windows_Server_Hybrid",
            "Windows_Server_Perpetual"
          ]
        }
      },
      provisioningTime: {
        serializedName: "properties.provisioningTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "DedicatedHostInstanceView"
        }
      }
    }
  }
};

export const SshPublicKeyUpdateResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SshPublicKeyUpdateResource",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      publicKey: {
        serializedName: "properties.publicKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineExtensionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineExtensionUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "properties.publisher",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "properties.typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      enableAutomaticUpgrade: {
        serializedName: "properties.enableAutomaticUpgrade",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "properties.settings",
        type: {
          name: "any"
        }
      },
      protectedSettings: {
        serializedName: "properties.protectedSettings",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ImageUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      sourceVirtualMachine: {
        serializedName: "properties.sourceVirtualMachine",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "ImageStorageProfile"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      hyperVGeneration: {
        serializedName: "properties.hyperVGeneration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "VirtualMachineIdentity"
        }
      },
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      hardwareProfile: {
        serializedName: "properties.hardwareProfile",
        type: {
          name: "Composite",
          className: "HardwareProfile"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      },
      additionalCapabilities: {
        serializedName: "properties.additionalCapabilities",
        type: {
          name: "Composite",
          className: "AdditionalCapabilities"
        }
      },
      osProfile: {
        serializedName: "properties.osProfile",
        type: {
          name: "Composite",
          className: "OSProfile"
        }
      },
      networkProfile: {
        serializedName: "properties.networkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile"
        }
      },
      securityProfile: {
        serializedName: "properties.securityProfile",
        type: {
          name: "Composite",
          className: "SecurityProfile"
        }
      },
      diagnosticsProfile: {
        serializedName: "properties.diagnosticsProfile",
        type: {
          name: "Composite",
          className: "DiagnosticsProfile"
        }
      },
      availabilitySet: {
        serializedName: "properties.availabilitySet",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      virtualMachineScaleSet: {
        serializedName: "properties.virtualMachineScaleSet",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      proximityPlacementGroup: {
        serializedName: "properties.proximityPlacementGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      priority: {
        serializedName: "properties.priority",
        type: {
          name: "String"
        }
      },
      evictionPolicy: {
        serializedName: "properties.evictionPolicy",
        type: {
          name: "String"
        }
      },
      billingProfile: {
        serializedName: "properties.billingProfile",
        type: {
          name: "Composite",
          className: "BillingProfile"
        }
      },
      host: {
        serializedName: "properties.host",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      hostGroup: {
        serializedName: "properties.hostGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "VirtualMachineInstanceView"
        }
      },
      licenseType: {
        serializedName: "properties.licenseType",
        type: {
          name: "String"
        }
      },
      vmId: {
        serializedName: "properties.vmId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensionsTimeBudget: {
        serializedName: "properties.extensionsTimeBudget",
        type: {
          name: "String"
        }
      },
      platformFaultDomain: {
        serializedName: "properties.platformFaultDomain",
        type: {
          name: "Number"
        }
      },
      scheduledEventsProfile: {
        serializedName: "properties.scheduledEventsProfile",
        type: {
          name: "Composite",
          className: "ScheduledEventsProfile"
        }
      },
      userData: {
        serializedName: "properties.userData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RestorePointCollectionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePointCollectionUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      source: {
        serializedName: "properties.source",
        type: {
          name: "Composite",
          className: "RestorePointCollectionSourceProperties"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      restorePointCollectionId: {
        serializedName: "properties.restorePointCollectionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      restorePoints: {
        serializedName: "properties.restorePoints",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RestorePoint"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetIdentity"
        }
      },
      upgradePolicy: {
        serializedName: "properties.upgradePolicy",
        type: {
          name: "Composite",
          className: "UpgradePolicy"
        }
      },
      automaticRepairsPolicy: {
        serializedName: "properties.automaticRepairsPolicy",
        type: {
          name: "Composite",
          className: "AutomaticRepairsPolicy"
        }
      },
      virtualMachineProfile: {
        serializedName: "properties.virtualMachineProfile",
        type: {
          name: "Composite",
          className: "VirtualMachineScaleSetUpdateVMProfile"
        }
      },
      overprovision: {
        serializedName: "properties.overprovision",
        type: {
          name: "Boolean"
        }
      },
      doNotRunExtensionsOnOverprovisionedVMs: {
        serializedName: "properties.doNotRunExtensionsOnOverprovisionedVMs",
        type: {
          name: "Boolean"
        }
      },
      singlePlacementGroup: {
        serializedName: "properties.singlePlacementGroup",
        type: {
          name: "Boolean"
        }
      },
      additionalCapabilities: {
        serializedName: "properties.additionalCapabilities",
        type: {
          name: "Composite",
          className: "AdditionalCapabilities"
        }
      },
      scaleInPolicy: {
        serializedName: "properties.scaleInPolicy",
        type: {
          name: "Composite",
          className: "ScaleInPolicy"
        }
      },
      proximityPlacementGroup: {
        serializedName: "properties.proximityPlacementGroup",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      }
    }
  }
};

export const VirtualMachineRunCommandUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineRunCommandUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      source: {
        serializedName: "properties.source",
        type: {
          name: "Composite",
          className: "VirtualMachineRunCommandScriptSource"
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunCommandInputParameter"
            }
          }
        }
      },
      protectedParameters: {
        serializedName: "properties.protectedParameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunCommandInputParameter"
            }
          }
        }
      },
      asyncExecution: {
        serializedName: "properties.asyncExecution",
        type: {
          name: "Boolean"
        }
      },
      runAsUser: {
        serializedName: "properties.runAsUser",
        type: {
          name: "String"
        }
      },
      runAsPassword: {
        serializedName: "properties.runAsPassword",
        type: {
          name: "String"
        }
      },
      timeoutInSeconds: {
        serializedName: "properties.timeoutInSeconds",
        type: {
          name: "Number"
        }
      },
      outputBlobUri: {
        serializedName: "properties.outputBlobUri",
        type: {
          name: "String"
        }
      },
      errorBlobUri: {
        serializedName: "properties.errorBlobUri",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "VirtualMachineRunCommandInstanceView"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetExtension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetExtension",
    modelProperties: {
      ...SubResourceReadOnly.type.modelProperties,
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "properties.publisher",
        type: {
          name: "String"
        }
      },
      typePropertiesType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "properties.typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      enableAutomaticUpgrade: {
        serializedName: "properties.enableAutomaticUpgrade",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "properties.settings",
        type: {
          name: "any"
        }
      },
      protectedSettings: {
        serializedName: "properties.protectedSettings",
        type: {
          name: "any"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisionAfterExtensions: {
        serializedName: "properties.provisionAfterExtensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetExtensionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetExtensionUpdate",
    modelProperties: {
      ...SubResourceReadOnly.type.modelProperties,
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "properties.publisher",
        type: {
          name: "String"
        }
      },
      typePropertiesType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "properties.typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      enableAutomaticUpgrade: {
        serializedName: "properties.enableAutomaticUpgrade",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "properties.settings",
        type: {
          name: "any"
        }
      },
      protectedSettings: {
        serializedName: "properties.protectedSettings",
        type: {
          name: "any"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisionAfterExtensions: {
        serializedName: "properties.provisionAfterExtensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMExtension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMExtension",
    modelProperties: {
      ...SubResourceReadOnly.type.modelProperties,
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "properties.publisher",
        type: {
          name: "String"
        }
      },
      typePropertiesType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "properties.typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      enableAutomaticUpgrade: {
        serializedName: "properties.enableAutomaticUpgrade",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "properties.settings",
        type: {
          name: "any"
        }
      },
      protectedSettings: {
        serializedName: "properties.protectedSettings",
        type: {
          name: "any"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "VirtualMachineExtensionInstanceView"
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMExtensionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMExtensionUpdate",
    modelProperties: {
      ...SubResourceReadOnly.type.modelProperties,
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "properties.publisher",
        type: {
          name: "String"
        }
      },
      typePropertiesType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "properties.typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      enableAutomaticUpgrade: {
        serializedName: "properties.enableAutomaticUpgrade",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "properties.settings",
        type: {
          name: "any"
        }
      },
      protectedSettings: {
        serializedName: "properties.protectedSettings",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DedicatedHostInstanceViewWithName: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DedicatedHostInstanceViewWithName",
    modelProperties: {
      ...DedicatedHostInstanceView.type.modelProperties,
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageOSDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageOSDisk",
    modelProperties: {
      ...ImageDisk.type.modelProperties,
      osType: {
        serializedName: "osType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      osState: {
        serializedName: "osState",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Generalized", "Specialized"]
        }
      }
    }
  }
};

export const ImageDataDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImageDataDisk",
    modelProperties: {
      ...ImageDisk.type.modelProperties,
      lun: {
        serializedName: "lun",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RestorePoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RestorePoint",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      sourceMetadata: {
        serializedName: "sourceMetadata",
        type: {
          name: "Composite",
          className: "RestorePointSourceMetadata"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      consistencyMode: {
        serializedName: "consistencyMode",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningDetails: {
        serializedName: "provisioningDetails",
        type: {
          name: "Composite",
          className: "RestorePointProvisioningDetails"
        }
      },
      excludeDisks: {
        serializedName: "excludeDisks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiEntityReference"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetVMReimageParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetVMReimageParameters",
    modelProperties: {
      ...VirtualMachineReimageParameters.type.modelProperties
    }
  }
};

export const RequestRateByIntervalInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RequestRateByIntervalInput",
    modelProperties: {
      ...LogAnalyticsInputBase.type.modelProperties,
      intervalLength: {
        serializedName: "intervalLength",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["ThreeMins", "FiveMins", "ThirtyMins", "SixtyMins"]
        }
      }
    }
  }
};

export const ThrottledRequestsInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ThrottledRequestsInput",
    modelProperties: {
      ...LogAnalyticsInputBase.type.modelProperties
    }
  }
};

export const RunCommandDocument: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunCommandDocument",
    modelProperties: {
      ...RunCommandDocumentBase.type.modelProperties,
      script: {
        serializedName: "script",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunCommandParameterDefinition"
            }
          }
        }
      }
    }
  }
};

export const DiskRestorePoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiskRestorePoint",
    modelProperties: {
      ...ProxyOnlyResource.type.modelProperties,
      timeCreated: {
        serializedName: "properties.timeCreated",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      sourceResourceId: {
        serializedName: "properties.sourceResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      osType: {
        serializedName: "properties.osType",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      hyperVGeneration: {
        serializedName: "properties.hyperVGeneration",
        type: {
          name: "String"
        }
      },
      purchasePlan: {
        serializedName: "properties.purchasePlan",
        type: {
          name: "Composite",
          className: "PurchasePlanAutoGenerated"
        }
      },
      familyId: {
        serializedName: "properties.familyId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sourceUniqueId: {
        serializedName: "properties.sourceUniqueId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      },
      supportsHibernation: {
        serializedName: "properties.supportsHibernation",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const GalleryUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryUpdate",
    modelProperties: {
      ...UpdateResourceDefinition.type.modelProperties,
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      identifier: {
        serializedName: "properties.identifier",
        type: {
          name: "Composite",
          className: "GalleryIdentifier"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sharingProfile: {
        serializedName: "properties.sharingProfile",
        type: {
          name: "Composite",
          className: "SharingProfile"
        }
      }
    }
  }
};

export const GalleryImageUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImageUpdate",
    modelProperties: {
      ...UpdateResourceDefinition.type.modelProperties,
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      eula: {
        serializedName: "properties.eula",
        type: {
          name: "String"
        }
      },
      privacyStatementUri: {
        serializedName: "properties.privacyStatementUri",
        type: {
          name: "String"
        }
      },
      releaseNoteUri: {
        serializedName: "properties.releaseNoteUri",
        type: {
          name: "String"
        }
      },
      osType: {
        serializedName: "properties.osType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      osState: {
        serializedName: "properties.osState",
        type: {
          name: "Enum",
          allowedValues: ["Generalized", "Specialized"]
        }
      },
      hyperVGeneration: {
        serializedName: "properties.hyperVGeneration",
        type: {
          name: "String"
        }
      },
      endOfLifeDate: {
        serializedName: "properties.endOfLifeDate",
        type: {
          name: "DateTime"
        }
      },
      identifier: {
        serializedName: "properties.identifier",
        type: {
          name: "Composite",
          className: "GalleryImageIdentifier"
        }
      },
      recommended: {
        serializedName: "properties.recommended",
        type: {
          name: "Composite",
          className: "RecommendedMachineConfiguration"
        }
      },
      disallowed: {
        serializedName: "properties.disallowed",
        type: {
          name: "Composite",
          className: "Disallowed"
        }
      },
      purchasePlan: {
        serializedName: "properties.purchasePlan",
        type: {
          name: "Composite",
          className: "ImagePurchasePlan"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      features: {
        serializedName: "properties.features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalleryImageFeature"
            }
          }
        }
      }
    }
  }
};

export const GalleryImageVersionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImageVersionUpdate",
    modelProperties: {
      ...UpdateResourceDefinition.type.modelProperties,
      publishingProfile: {
        serializedName: "properties.publishingProfile",
        type: {
          name: "Composite",
          className: "GalleryImageVersionPublishingProfile"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "GalleryImageVersionStorageProfile"
        }
      },
      replicationStatus: {
        serializedName: "properties.replicationStatus",
        type: {
          name: "Composite",
          className: "ReplicationStatus"
        }
      }
    }
  }
};

export const GalleryApplicationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryApplicationUpdate",
    modelProperties: {
      ...UpdateResourceDefinition.type.modelProperties,
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      eula: {
        serializedName: "properties.eula",
        type: {
          name: "String"
        }
      },
      privacyStatementUri: {
        serializedName: "properties.privacyStatementUri",
        type: {
          name: "String"
        }
      },
      releaseNoteUri: {
        serializedName: "properties.releaseNoteUri",
        type: {
          name: "String"
        }
      },
      endOfLifeDate: {
        serializedName: "properties.endOfLifeDate",
        type: {
          name: "DateTime"
        }
      },
      supportedOSType: {
        serializedName: "properties.supportedOSType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      }
    }
  }
};

export const GalleryApplicationVersionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryApplicationVersionUpdate",
    modelProperties: {
      ...UpdateResourceDefinition.type.modelProperties,
      publishingProfile: {
        serializedName: "properties.publishingProfile",
        type: {
          name: "Composite",
          className: "GalleryApplicationVersionPublishingProfile"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      replicationStatus: {
        serializedName: "properties.replicationStatus",
        type: {
          name: "Composite",
          className: "ReplicationStatus"
        }
      }
    }
  }
};

export const GalleryImageVersionPublishingProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryImageVersionPublishingProfile",
    modelProperties: {
      ...GalleryArtifactPublishingProfileBase.type.modelProperties
    }
  }
};

export const GalleryApplicationVersionPublishingProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryApplicationVersionPublishingProfile",
    modelProperties: {
      ...GalleryArtifactPublishingProfileBase.type.modelProperties,
      source: {
        serializedName: "source",
        type: {
          name: "Composite",
          className: "UserArtifactSource"
        }
      },
      manageActions: {
        serializedName: "manageActions",
        type: {
          name: "Composite",
          className: "UserArtifactManage"
        }
      },
      enableHealthCheck: {
        serializedName: "enableHealthCheck",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const OSDiskImageEncryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSDiskImageEncryption",
    modelProperties: {
      ...DiskImageEncryption.type.modelProperties
    }
  }
};

export const DataDiskImageEncryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataDiskImageEncryption",
    modelProperties: {
      ...DiskImageEncryption.type.modelProperties,
      lun: {
        serializedName: "lun",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GalleryOSDiskImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryOSDiskImage",
    modelProperties: {
      ...GalleryDiskImage.type.modelProperties
    }
  }
};

export const GalleryDataDiskImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GalleryDataDiskImage",
    modelProperties: {
      ...GalleryDiskImage.type.modelProperties,
      lun: {
        serializedName: "lun",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PirSharedGalleryResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PirSharedGalleryResource",
    modelProperties: {
      ...PirResource.type.modelProperties,
      uniqueId: {
        serializedName: "identifier.uniqueId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualMachineImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineImage",
    modelProperties: {
      ...VirtualMachineImageResource.type.modelProperties,
      plan: {
        serializedName: "properties.plan",
        type: {
          name: "Composite",
          className: "PurchasePlan"
        }
      },
      osDiskImage: {
        serializedName: "properties.osDiskImage",
        type: {
          name: "Composite",
          className: "OSDiskImage"
        }
      },
      dataDiskImages: {
        serializedName: "properties.dataDiskImages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataDiskImage"
            }
          }
        }
      },
      automaticOSUpgradeProperties: {
        serializedName: "properties.automaticOSUpgradeProperties",
        type: {
          name: "Composite",
          className: "AutomaticOSUpgradeProperties"
        }
      },
      hyperVGeneration: {
        serializedName: "properties.hyperVGeneration",
        type: {
          name: "String"
        }
      },
      disallowed: {
        serializedName: "properties.disallowed",
        type: {
          name: "Composite",
          className: "DisallowedConfiguration"
        }
      },
      features: {
        serializedName: "properties.features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineImageFeature"
            }
          }
        }
      }
    }
  }
};

export const VirtualMachineScaleSetReimageParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualMachineScaleSetReimageParameters",
    modelProperties: {
      ...VirtualMachineScaleSetVMReimageParameters.type.modelProperties,
      instanceIds: {
        serializedName: "instanceIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SharedGallery: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedGallery",
    modelProperties: {
      ...PirSharedGalleryResource.type.modelProperties
    }
  }
};

export const SharedGalleryImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedGalleryImage",
    modelProperties: {
      ...PirSharedGalleryResource.type.modelProperties,
      osType: {
        serializedName: "properties.osType",
        type: {
          name: "Enum",
          allowedValues: ["Windows", "Linux"]
        }
      },
      osState: {
        serializedName: "properties.osState",
        type: {
          name: "Enum",
          allowedValues: ["Generalized", "Specialized"]
        }
      },
      endOfLifeDate: {
        serializedName: "properties.endOfLifeDate",
        type: {
          name: "DateTime"
        }
      },
      identifier: {
        serializedName: "properties.identifier",
        type: {
          name: "Composite",
          className: "GalleryImageIdentifier"
        }
      },
      recommended: {
        serializedName: "properties.recommended",
        type: {
          name: "Composite",
          className: "RecommendedMachineConfiguration"
        }
      },
      disallowed: {
        serializedName: "properties.disallowed",
        type: {
          name: "Composite",
          className: "Disallowed"
        }
      },
      hyperVGeneration: {
        serializedName: "properties.hyperVGeneration",
        type: {
          name: "String"
        }
      },
      features: {
        serializedName: "properties.features",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalleryImageFeature"
            }
          }
        }
      },
      purchasePlan: {
        serializedName: "properties.purchasePlan",
        type: {
          name: "Composite",
          className: "ImagePurchasePlan"
        }
      }
    }
  }
};

export const SharedGalleryImageVersion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedGalleryImageVersion",
    modelProperties: {
      ...PirSharedGalleryResource.type.modelProperties,
      publishedDate: {
        serializedName: "properties.publishedDate",
        type: {
          name: "DateTime"
        }
      },
      endOfLifeDate: {
        serializedName: "properties.endOfLifeDate",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};
