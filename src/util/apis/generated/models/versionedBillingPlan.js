/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Billing Plan with a version
 *
 */
class VersionedBillingPlan {
  /**
   * Create a VersionedBillingPlan.
   * @property {object} [document]
   * @property {string} [document.id] The Billing Plan ID
   * @property {string} [document.version] Version of the Billing Plan schema
   * @property {number} [document.price] Price of the Billing Plan
   * @property {string} [document.paymentSource] Service that receives payments
   * for this billing plan. Possible values include: 'None', 'AppCenter',
   * 'GitHub', 'Xtc'
   * @property {string} [document.service] Name of the service that the plan
   * applies to. Possible values include: 'Build', 'Push', 'Test'
   * @property {object} [document.limits]
   * @property {object} [document.attributes]
   * @property {string} [document.parentId]
   * @property {string} [etag] The version of the object
   */
  constructor() {
  }

  /**
   * Defines the metadata of VersionedBillingPlan
   *
   * @returns {object} metadata of VersionedBillingPlan
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VersionedBillingPlan',
      type: {
        name: 'Composite',
        className: 'VersionedBillingPlan',
        modelProperties: {
          document: {
            required: false,
            serializedName: 'document',
            type: {
              name: 'Composite',
              className: 'BillingPlan'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VersionedBillingPlan;
