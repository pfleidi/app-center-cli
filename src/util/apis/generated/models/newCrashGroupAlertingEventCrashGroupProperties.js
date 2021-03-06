/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Properties of new crash group
 *
 */
class NewCrashGroupAlertingEventCrashGroupProperties {
  /**
   * Create a NewCrashGroupAlertingEventCrashGroupProperties.
   * @property {string} id
   * @property {string} name
   * @property {string} reason
   * @property {string} url
   * @property {string} appDisplayName
   * @property {string} appPlatform
   * @property {string} appVersion
   * @property {array} stackTrace
   */
  constructor() {
  }

  /**
   * Defines the metadata of NewCrashGroupAlertingEventCrashGroupProperties
   *
   * @returns {object} metadata of NewCrashGroupAlertingEventCrashGroupProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NewCrashGroupAlertingEvent_crash_group_properties',
      type: {
        name: 'Composite',
        className: 'NewCrashGroupAlertingEventCrashGroupProperties',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          reason: {
            required: true,
            serializedName: 'reason',
            type: {
              name: 'String'
            }
          },
          url: {
            required: true,
            serializedName: 'url',
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
          appPlatform: {
            required: true,
            serializedName: 'app_platform',
            type: {
              name: 'String'
            }
          },
          appVersion: {
            required: true,
            serializedName: 'app_version',
            type: {
              name: 'String'
            }
          },
          stackTrace: {
            required: true,
            serializedName: 'stack_trace',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NewCrashGroupAlertingEventCrashGroupProperties;
