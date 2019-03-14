/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DeleteReleasesContainer.
 */
class DeleteReleasesContainer {
  /**
   * Create a DeleteReleasesContainer.
   * @property {array} releases
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeleteReleasesContainer
   *
   * @returns {object} metadata of DeleteReleasesContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeleteReleasesContainer',
      type: {
        name: 'Composite',
        className: 'DeleteReleasesContainer',
        modelProperties: {
          releases: {
            required: true,
            serializedName: 'releases',
            constraints: {
              MinItems: 1
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReleaseElementType',
                  type: {
                    name: 'Composite',
                    className: 'Release'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeleteReleasesContainer;
