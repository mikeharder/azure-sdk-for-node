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
 * Class representing a HierarchicalModel.
 */
class HierarchicalModel {
  /**
   * Create a HierarchicalModel.
   * @member {string} [name]
   * @member {array} [children]
   * @member {object} [inherits]
   * @member {string} [inherits.domainName]
   * @member {string} [inherits.modelName]
   * @member {array} [roles]
   */
  constructor() {
  }

  /**
   * Defines the metadata of HierarchicalModel
   *
   * @returns {object} metadata of HierarchicalModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HierarchicalModel',
      type: {
        name: 'Composite',
        className: 'HierarchicalModel',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          children: {
            required: false,
            serializedName: 'children',
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
          inherits: {
            required: false,
            serializedName: 'inherits',
            type: {
              name: 'Composite',
              className: 'PrebuiltDomainObject'
            }
          },
          roles: {
            required: false,
            serializedName: 'roles',
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
          }
        }
      }
    };
  }
}

module.exports = HierarchicalModel;