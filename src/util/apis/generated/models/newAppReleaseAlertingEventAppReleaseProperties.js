/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Properties of new application release
 *
 */
class NewAppReleaseAlertingEventAppReleaseProperties {
  /**
   * Create a NewAppReleaseAlertingEventAppReleaseProperties.
   * @property {string} appName
   * @property {string} appDisplayName
   * @property {string} releaseId
   * @property {string} platform
   * @property {string} uploadedAt Date and time in ISO 8601 format
   * @property {string} [fingerprint]
   * @property {string} [releaseNotes]
   * @property {string} version
   * @property {string} shortVersion
   * @property {string} [minOs]
   * @property {boolean} [mandatoryUpdate]
   * @property {number} size
   * @property {string} [provisioningProfileName]
   * @property {string} [provisioningProfileType]
   * @property {string} bundleIdentifier
   * @property {string} installLink
   * @property {string} [iconLink]
   * @property {string} [distributionGroupId]
   * @property {boolean} [installable]
   */
  constructor() {
  }

  /**
   * Defines the metadata of NewAppReleaseAlertingEventAppReleaseProperties
   *
   * @returns {object} metadata of NewAppReleaseAlertingEventAppReleaseProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NewAppReleaseAlertingEvent_app_release_properties',
      type: {
        name: 'Composite',
        className: 'NewAppReleaseAlertingEventAppReleaseProperties',
        modelProperties: {
          appName: {
            required: true,
            serializedName: 'app_name',
            type: {
              name: 'String'
            }
          },
          appDisplayName: {
            required: true,
            serializedName: 'app_display_name',
            type: {
              name: 'String'
            }
          },
          releaseId: {
            required: true,
            serializedName: 'release_id',
            type: {
              name: 'String'
            }
          },
          platform: {
            required: true,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          uploadedAt: {
            required: true,
            serializedName: 'uploaded_at',
            type: {
              name: 'String'
            }
          },
          fingerprint: {
            required: false,
            serializedName: 'fingerprint',
            type: {
              name: 'String'
            }
          },
          releaseNotes: {
            required: false,
            serializedName: 'release_notes',
            type: {
              name: 'String'
            }
          },
          version: {
            required: true,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          shortVersion: {
            required: true,
            serializedName: 'short_version',
            type: {
              name: 'String'
            }
          },
          minOs: {
            required: false,
            serializedName: 'min_os',
            type: {
              name: 'String'
            }
          },
          mandatoryUpdate: {
            required: false,
            serializedName: 'mandatory_update',
            type: {
              name: 'Boolean'
            }
          },
          size: {
            required: true,
            serializedName: 'size',
            type: {
              name: 'Number'
            }
          },
          provisioningProfileName: {
            required: false,
            serializedName: 'provisioning_profile_name',
            type: {
              name: 'String'
            }
          },
          provisioningProfileType: {
            required: false,
            serializedName: 'provisioning_profile_type',
            type: {
              name: 'String'
            }
          },
          bundleIdentifier: {
            required: true,
            serializedName: 'bundle_identifier',
            type: {
              name: 'String'
            }
          },
          installLink: {
            required: true,
            serializedName: 'install_link',
            type: {
              name: 'String'
            }
          },
          iconLink: {
            required: false,
            serializedName: 'icon_link',
            type: {
              name: 'String'
            }
          },
          distributionGroupId: {
            required: false,
            serializedName: 'distribution_group_id',
            type: {
              name: 'String'
            }
          },
          installable: {
            required: false,
            serializedName: 'installable',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = NewAppReleaseAlertingEventAppReleaseProperties;
