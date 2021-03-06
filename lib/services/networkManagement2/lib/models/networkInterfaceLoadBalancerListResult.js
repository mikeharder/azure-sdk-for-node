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
 * Response for list ip configurations API service call.
 */
class NetworkInterfaceLoadBalancerListResult extends Array {
  /**
   * Create a NetworkInterfaceLoadBalancerListResult.
   * @property {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NetworkInterfaceLoadBalancerListResult
   *
   * @returns {object} metadata of NetworkInterfaceLoadBalancerListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkInterfaceLoadBalancerListResult',
      type: {
        name: 'Composite',
        className: 'NetworkInterfaceLoadBalancerListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LoadBalancerElementType',
                  type: {
                    name: 'Composite',
                    className: 'LoadBalancer'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkInterfaceLoadBalancerListResult;
