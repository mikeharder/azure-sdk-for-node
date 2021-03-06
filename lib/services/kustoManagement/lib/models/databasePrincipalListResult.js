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
 * The list Kusto database principals operation response.
 */
class DatabasePrincipalListResult extends Array {
  /**
   * Create a DatabasePrincipalListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DatabasePrincipalListResult
   *
   * @returns {object} metadata of DatabasePrincipalListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabasePrincipalListResult',
      type: {
        name: 'Composite',
        className: 'DatabasePrincipalListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DatabasePrincipalElementType',
                  type: {
                    name: 'Composite',
                    className: 'DatabasePrincipal'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DatabasePrincipalListResult;
