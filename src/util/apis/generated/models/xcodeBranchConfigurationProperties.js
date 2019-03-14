/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Build configuration when Xcode is part of the build steps
 *
 */
class XcodeBranchConfigurationProperties {
  /**
   * Create a XcodeBranchConfigurationProperties.
   * @property {string} projectOrWorkspacePath Xcode project/workspace path
   * @property {string} [podfilePath] Path to CococaPods file, if present
   * @property {string} [cartfilePath] Path to Carthage file, if present
   * @property {string} [provisioningProfileEncoded]
   * @property {string} [certificateEncoded]
   * @property {string} [provisioningProfileFileId]
   * @property {string} [certificateFileId]
   * @property {string} [provisioningProfileUploadId]
   * @property {array} [appExtensionProvisioningProfileFiles]
   * @property {string} [certificateUploadId]
   * @property {string} [certificatePassword]
   * @property {string} scheme
   * @property {string} xcodeVersion
   * @property {string} [provisioningProfileFilename]
   * @property {string} [certificateFilename]
   * @property {string} [teamId]
   * @property {boolean} [automaticSigning]
   * @property {string} [xcodeProjectSha] The selected pbxproject hash to the
   * repositroy
   * @property {string} [archiveConfiguration] The build configuration of the
   * target to archive
   * @property {string} [targetToArchive] The target id of the selected scheme
   * to archive
   */
  constructor() {
  }

  /**
   * Defines the metadata of XcodeBranchConfigurationProperties
   *
   * @returns {object} metadata of XcodeBranchConfigurationProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'XcodeBranchConfigurationProperties',
      type: {
        name: 'Composite',
        className: 'XcodeBranchConfigurationProperties',
        modelProperties: {
          projectOrWorkspacePath: {
            required: true,
            serializedName: 'projectOrWorkspacePath',
            type: {
              name: 'String'
            }
          },
          podfilePath: {
            required: false,
            serializedName: 'podfilePath',
            type: {
              name: 'String'
            }
          },
          cartfilePath: {
            required: false,
            serializedName: 'cartfilePath',
            type: {
              name: 'String'
            }
          },
          provisioningProfileEncoded: {
            required: false,
            serializedName: 'provisioningProfileEncoded',
            type: {
              name: 'String'
            }
          },
          certificateEncoded: {
            required: false,
            serializedName: 'certificateEncoded',
            type: {
              name: 'String'
            }
          },
          provisioningProfileFileId: {
            required: false,
            serializedName: 'provisioningProfileFileId',
            type: {
              name: 'String'
            }
          },
          certificateFileId: {
            required: false,
            serializedName: 'certificateFileId',
            type: {
              name: 'String'
            }
          },
          provisioningProfileUploadId: {
            required: false,
            serializedName: 'provisioningProfileUploadId',
            type: {
              name: 'String'
            }
          },
          appExtensionProvisioningProfileFiles: {
            required: false,
            serializedName: 'appExtensionProvisioningProfileFiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProvisioningProfileFileElementType',
                  type: {
                    name: 'Composite',
                    className: 'ProvisioningProfileFile'
                  }
              }
            }
          },
          certificateUploadId: {
            required: false,
            serializedName: 'certificateUploadId',
            type: {
              name: 'String'
            }
          },
          certificatePassword: {
            required: false,
            serializedName: 'certificatePassword',
            type: {
              name: 'String'
            }
          },
          scheme: {
            required: true,
            serializedName: 'scheme',
            type: {
              name: 'String'
            }
          },
          xcodeVersion: {
            required: true,
            serializedName: 'xcodeVersion',
            type: {
              name: 'String'
            }
          },
          provisioningProfileFilename: {
            required: false,
            serializedName: 'provisioningProfileFilename',
            type: {
              name: 'String'
            }
          },
          certificateFilename: {
            required: false,
            serializedName: 'certificateFilename',
            type: {
              name: 'String'
            }
          },
          teamId: {
            required: false,
            serializedName: 'teamId',
            type: {
              name: 'String'
            }
          },
          automaticSigning: {
            required: false,
            serializedName: 'automaticSigning',
            type: {
              name: 'Boolean'
            }
          },
          xcodeProjectSha: {
            required: false,
            serializedName: 'xcodeProjectSha',
            type: {
              name: 'String'
            }
          },
          archiveConfiguration: {
            required: false,
            serializedName: 'archiveConfiguration',
            type: {
              name: 'String'
            }
          },
          targetToArchive: {
            required: false,
            serializedName: 'targetToArchive',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = XcodeBranchConfigurationProperties;
