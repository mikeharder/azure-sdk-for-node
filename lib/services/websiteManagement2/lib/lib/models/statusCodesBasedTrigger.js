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
 * Trigger based on status code.
 *
 */
class StatusCodesBasedTrigger {
  /**
   * Create a StatusCodesBasedTrigger.
   * @member {number} [status] HTTP status code.
   * @member {number} [subStatus] Request Sub Status.
   * @member {number} [win32Status] Win32 error code.
   * @member {number} [count] Request Count.
   * @member {string} [timeInterval] Time interval.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StatusCodesBasedTrigger
   *
   * @returns {object} metadata of StatusCodesBasedTrigger
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StatusCodesBasedTrigger',
      type: {
        name: 'Composite',
        className: 'StatusCodesBasedTrigger',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'Number'
            }
          },
          subStatus: {
            required: false,
            serializedName: 'subStatus',
            type: {
              name: 'Number'
            }
          },
          win32Status: {
            required: false,
            serializedName: 'win32Status',
            type: {
              name: 'Number'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          timeInterval: {
            required: false,
            serializedName: 'timeInterval',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StatusCodesBasedTrigger;