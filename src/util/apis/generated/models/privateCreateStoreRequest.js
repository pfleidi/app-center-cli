/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * create the store through private API. Used by UI.
 *
 */
class PrivateCreateStoreRequest {
  /**
   * Create a PrivateCreateStoreRequest.
   * @property {string} [type] store Type. Possible values include: 'intune'
   * @property {string} [name] name of the store.
   * @property {object} [intuneDetails]
   * @property {object} [intuneDetails.targetAudience]
   * @property {string} [intuneDetails.targetAudience.name] display name for
   * the target audience/group
   * @property {object} [intuneDetails.appCategory]
   * @property {string} [intuneDetails.appCategory.name] display name for the
   * app category
   * @property {string} [intuneDetails.tenantId] tenant id of the intune store
   */
  constructor() {
  }

  /**
   * Defines the metadata of PrivateCreateStoreRequest
   *
   * @returns {object} metadata of PrivateCreateStoreRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PrivateCreateStoreRequest',
      type: {
        name: 'Composite',
        className: 'PrivateCreateStoreRequest',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          intuneDetails: {
            required: false,
            serializedName: 'intune_details',
            type: {
              name: 'Composite',
              className: 'PrivateIntuneStoreRequest'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateCreateStoreRequest;
