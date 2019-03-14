/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Apple secret details
 *
 */
class AppleSecretDetailsResponse {
  /**
   * Create a AppleSecretDetailsResponse.
   * @property {string} username username to connect to apple store
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppleSecretDetailsResponse
   *
   * @returns {object} metadata of AppleSecretDetailsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleSecretDetailsResponse',
      type: {
        name: 'Composite',
        className: 'AppleSecretDetailsResponse',
        modelProperties: {
          username: {
            required: true,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleSecretDetailsResponse;
