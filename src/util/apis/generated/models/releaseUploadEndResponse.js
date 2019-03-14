/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * A response containing information about the uploaded release.
 *
 */
class ReleaseUploadEndResponse {
  /**
   * Create a ReleaseUploadEndResponse.
   * @property {number} [releaseId] The ID of the release.
   * @property {string} [releaseUrl] A URL to the new release. If upload was
   * aborted will be null.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleaseUploadEndResponse
   *
   * @returns {object} metadata of ReleaseUploadEndResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReleaseUploadEndResponse',
      type: {
        name: 'Composite',
        className: 'ReleaseUploadEndResponse',
        modelProperties: {
          releaseId: {
            required: false,
            serializedName: 'release_id',
            type: {
              name: 'Number'
            }
          },
          releaseUrl: {
            required: false,
            serializedName: 'release_url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReleaseUploadEndResponse;
