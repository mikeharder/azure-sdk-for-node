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
 * Azure storage specific error information
 *
 */
class AzureWorkloadErrorInfo {
  /**
   * Create a AzureWorkloadErrorInfo.
   * @member {number} [errorCode] Error code.
   * @member {string} [errorString] Localized error string.
   * @member {string} [errorTitle] Title: Typically, the entity that the error
   * pertains to.
   * @member {array} [recommendations] List of localized recommendations for
   * above error code.
   * @member {string} [additionalDetails] Additional details for above error
   * code.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureWorkloadErrorInfo
   *
   * @returns {object} metadata of AzureWorkloadErrorInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureWorkloadErrorInfo',
      type: {
        name: 'Composite',
        className: 'AzureWorkloadErrorInfo',
        modelProperties: {
          errorCode: {
            required: false,
            serializedName: 'errorCode',
            type: {
              name: 'Number'
            }
          },
          errorString: {
            required: false,
            serializedName: 'errorString',
            type: {
              name: 'String'
            }
          },
          errorTitle: {
            required: false,
            serializedName: 'errorTitle',
            type: {
              name: 'String'
            }
          },
          recommendations: {
            required: false,
            serializedName: 'recommendations',
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
          additionalDetails: {
            required: false,
            serializedName: 'additionalDetails',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureWorkloadErrorInfo;
