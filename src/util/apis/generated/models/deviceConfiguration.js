/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DeviceConfiguration.
 */
class DeviceConfiguration {
  /**
   * Create a DeviceConfiguration.
   * @property {string} [name] The name of the device model and OS version
   * @property {uuid} [id] The unique id of the device configuration
   * @property {number} [tier] The tier
   * @property {object} [image]
   * @property {string} [image.full]
   * @property {string} [image.thumb]
   * @property {object} [model]
   * @property {string} [model.name]
   * @property {string} [model.manufacturer]
   * @property {string} [model.model]
   * @property {string} [model.platform]
   * @property {object} [model.dimensions]
   * @property {object} [model.dimensions.depth]
   * @property {object} [model.dimensions.height]
   * @property {object} [model.dimensions.width]
   * @property {object} [model.resolution]
   * @property {string} [model.resolution.height]
   * @property {string} [model.resolution.width]
   * @property {string} [model.resolution.ppi]
   * @property {string} [model.releaseDate]
   * @property {string} [model.formFactor]
   * @property {object} [model.screenSize]
   * @property {string} [model.screenSize.cm]
   * @property {string} [model.screenSize.inProperty]
   * @property {object} [model.cpu]
   * @property {string} [model.cpu.frequency]
   * @property {string} [model.cpu.core]
   * @property {string} [model.cpu.text]
   * @property {object} [model.memory]
   * @property {string} [model.memory.formattedSize]
   * @property {number} [model.screenRotation]
   * @property {object} [model.deviceFrame]
   * @property {object} [model.deviceFrame.grid]
   * @property {number} [model.deviceFrame.grid.width]
   * @property {number} [model.deviceFrame.grid.height]
   * @property {string} [model.deviceFrame.grid.frameUrl]
   * @property {array} [model.deviceFrame.grid.screen]
   * @property {object} [model.deviceFrame.full]
   * @property {number} [model.deviceFrame.full.width]
   * @property {number} [model.deviceFrame.full.height]
   * @property {string} [model.deviceFrame.full.frameUrl]
   * @property {array} [model.deviceFrame.full.screen]
   * @property {number} [model.availabilityCount]
   * @property {string} [os]
   * @property {string} [osName]
   * @property {number} [marketShare]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceConfiguration
   *
   * @returns {object} metadata of DeviceConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceConfiguration',
      type: {
        name: 'Composite',
        className: 'DeviceConfiguration',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          tier: {
            required: false,
            serializedName: 'tier',
            type: {
              name: 'Number'
            }
          },
          image: {
            required: false,
            serializedName: 'image',
            type: {
              name: 'Composite',
              className: 'DeviceConfigurationImage'
            }
          },
          model: {
            required: false,
            serializedName: 'model',
            type: {
              name: 'Composite',
              className: 'DeviceModel'
            }
          },
          os: {
            required: false,
            serializedName: 'os',
            type: {
              name: 'String'
            }
          },
          osName: {
            required: false,
            serializedName: 'osName',
            type: {
              name: 'String'
            }
          },
          marketShare: {
            required: false,
            serializedName: 'marketShare',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceConfiguration;
