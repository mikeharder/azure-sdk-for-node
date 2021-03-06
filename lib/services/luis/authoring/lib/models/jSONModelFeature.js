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
 * Exported Model - Phraselist Model Feature.
 *
 */
class JSONModelFeature {
  /**
   * Create a JSONModelFeature.
   * @property {boolean} [activated] Indicates if the feature is enabled.
   * @property {string} [name] The Phraselist name.
   * @property {string} [words] List of comma-separated phrases that represent
   * the Phraselist.
   * @property {boolean} [mode] An exchangeable phrase list feature are serves
   * as single feature to the LUIS underlying training algorithm. It is used as
   * a lexicon lookup feature where its value is 1 if the lexicon contains a
   * given word or 0 if it doesn’t. Think of an exchangeable as a synonyms
   * list. A non-exchangeable phrase list feature has all the phrases in the
   * list serve as separate features to the underlying training algorithm. So,
   * if you your phrase list feature contains 5 phrases, they will be mapped to
   * 5 separate features. You can think of the non-exchangeable phrase list
   * feature as an additional bag of words that you are willing to add to LUIS
   * existing vocabulary features. Think of a non-exchangeable as set of
   * different words. Default value is true.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JSONModelFeature
   *
   * @returns {object} metadata of JSONModelFeature
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JSONModelFeature',
      type: {
        name: 'Composite',
        className: 'JSONModelFeature',
        modelProperties: {
          activated: {
            required: false,
            serializedName: 'activated',
            type: {
              name: 'Boolean'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          words: {
            required: false,
            serializedName: 'words',
            type: {
              name: 'String'
            }
          },
          mode: {
            required: false,
            serializedName: 'mode',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = JSONModelFeature;
