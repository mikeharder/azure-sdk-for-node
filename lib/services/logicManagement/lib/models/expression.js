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

const models = require('./index');

/**
 * Class representing a Expression.
 */
class Expression {
  /**
   * Create a Expression.
   * @member {string} [text]
   * @member {object} [value]
   * @member {array} [subexpressions]
   * @member {object} [error]
   * @member {string} [error.message] The error message.
   * @member {array} [error.details] The error details.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Expression
   *
   * @returns {object} metadata of Expression
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Expression',
      type: {
        name: 'Composite',
        className: 'Expression',
        modelProperties: {
          text: {
            required: false,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Object'
            }
          },
          subexpressions: {
            required: false,
            serializedName: 'subexpressions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExpressionElementType',
                  type: {
                    name: 'Composite',
                    className: 'Expression'
                  }
              }
            }
          },
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'AzureResourceErrorInfo'
            }
          }
        }
      }
    };
  }
}

module.exports = Expression;