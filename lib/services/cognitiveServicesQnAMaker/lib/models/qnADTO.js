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
 * Q-A object.
 *
 */
class QnADTO {
  /**
   * Create a QnADTO.
   * @property {number} [id] Unique id for the Q-A.
   * @property {string} answer Answer text
   * @property {string} [source] Source from which Q-A was indexed. eg.
   * https://docs.microsoft.com/en-us/azure/cognitive-services/QnAMaker/FAQs
   * @property {array} questions List of questions associated with the answer.
   * @property {array} [metadata] List of metadata associated with the answer.
   */
  constructor() {
  }

  /**
   * Defines the metadata of QnADTO
   *
   * @returns {object} metadata of QnADTO
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'QnADTO',
      type: {
        name: 'Composite',
        className: 'QnADTO',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          answer: {
            required: true,
            serializedName: 'answer',
            constraints: {
              MaxLength: 25000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          source: {
            required: false,
            serializedName: 'source',
            constraints: {
              MaxLength: 300
            },
            type: {
              name: 'String'
            }
          },
          questions: {
            required: true,
            serializedName: 'questions',
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
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetadataDTOElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetadataDTO'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = QnADTO;
