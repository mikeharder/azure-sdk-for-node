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
 * The response of a list operation.
 */
class NotificationChannelList extends Array {
  /**
   * Create a NotificationChannelList.
   * @property {string} [nextLink] Link for next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NotificationChannelList
   *
   * @returns {object} metadata of NotificationChannelList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NotificationChannelList',
      type: {
        name: 'Composite',
        className: 'NotificationChannelList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NotificationChannelElementType',
                  type: {
                    name: 'Composite',
                    className: 'NotificationChannel'
                  }
              }
            }
          },
          nextLink: {
            required: false,
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

module.exports = NotificationChannelList;
