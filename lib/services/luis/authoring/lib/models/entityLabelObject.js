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
 * Defines the entity type and position of the extracted entity within the
 * example.
 *
 */
class EntityLabelObject {
  /**
   * Create a EntityLabelObject.
   * @property {string} entityName The entity type.
   * @property {number} startCharIndex The index within the utterance where the
   * extracted entity starts.
   * @property {number} endCharIndex The index within the utterance where the
   * extracted entity ends.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EntityLabelObject
   *
   * @returns {object} metadata of EntityLabelObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EntityLabelObject',
      type: {
        name: 'Composite',
        className: 'EntityLabelObject',
        modelProperties: {
          entityName: {
            required: true,
            serializedName: 'entityName',
            type: {
              name: 'String'
            }
          },
          startCharIndex: {
            required: true,
            serializedName: 'startCharIndex',
            type: {
              name: 'Number'
            }
          },
          endCharIndex: {
            required: true,
            serializedName: 'endCharIndex',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = EntityLabelObject;
