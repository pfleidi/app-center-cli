/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Responses for requests that detect billing plans change type
 *
 */
class BillingPlansChangeTypeResponse {
  /**
   * Create a BillingPlansChangeTypeResponse.
   * @property {string} [result] Possible values include: 'NoChange',
   * 'Downgrade', 'Upgrade'
   */
  constructor() {
  }

  /**
   * Defines the metadata of BillingPlansChangeTypeResponse
   *
   * @returns {object} metadata of BillingPlansChangeTypeResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingPlansChangeTypeResponse',
      type: {
        name: 'Composite',
        className: 'BillingPlansChangeTypeResponse',
        modelProperties: {
          result: {
            required: false,
            serializedName: 'result',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BillingPlansChangeTypeResponse;
