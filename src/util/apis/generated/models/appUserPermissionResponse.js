/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AppUserPermissionResponse.
 */
class AppUserPermissionResponse {
  /**
   * Create a AppUserPermissionResponse.
   * @property {uuid} appId The unique id (UUID) of the app
   * @property {array} permissions The permissions the user has for the app
   * @property {string} userEmail The email of the user
   * @property {uuid} userId The unique id (UUID) of the user
   * @property {string} appOrigin The creation origin of this app. Possible
   * values include: 'appcenter', 'hockeyapp', 'codepush'
   * @property {string} appSecret A unique and secret key used to identify the
   * app in communication with the ingestion endpoint for crash reporting and
   * analytics
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppUserPermissionResponse
   *
   * @returns {object} metadata of AppUserPermissionResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppUserPermissionResponse',
      type: {
        name: 'Composite',
        className: 'AppUserPermissionResponse',
        modelProperties: {
          appId: {
            required: true,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          permissions: {
            required: true,
            serializedName: 'permissions',
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
          },
          userEmail: {
            required: true,
            serializedName: 'user_email',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: true,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          },
          appOrigin: {
            required: true,
            serializedName: 'app_origin',
            type: {
              name: 'String'
            }
          },
          appSecret: {
            required: true,
            serializedName: 'app_secret',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppUserPermissionResponse;
