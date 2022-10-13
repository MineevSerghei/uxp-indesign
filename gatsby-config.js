/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/indesign/uxp/scripting/',
  siteMetadata: {
    versions: [
      {
        title: 'v2.0',
        selected: true
      },
      {
        title: 'v1.4',
        path: 'https://github.com/AdobeDocs/dev-site'
      }
    ],
    pages: [
      {
        title: 'Cat Analytics',
        path: '/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'API Reference',
        menu: [
          {
            title: 'InDesign APIs',
            description: 'Document Object Model',
            path: '/omv/index.md'
          },
          {
            title: 'UXP API',
            description: 'UXP API Reference',
            path: '/uxp/index.md'
          }
        ]
      },
      {
        title: 'Support',
        path: '/support/'
      },
          {
        title: 'Community',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Get Started',
        path: '/guides/',
        pages: [
          {
            title: 'Getting Started',
            path: '/guides/getting-started/basics/'
          },
          {
            title: 'Debugging a Script',
            path: '/guides/debugging/'
          },
          {
            title: 'Migrating',
            path: '/guides/migrating-to-UXPScript/'
          },
          {
            title: 'Object Model',
            path: '/guides/object-modal/'
          },
          {
            title: 'Right to Left Scripting',
            path: '/guides/rtl-scripting/'
          },
          {
            title: 'IDJS File Association',
            path: '/guides/text-editor-association/'
          }
        ]
      },
      {
        title: 'Cat Metrics API',
        path: '/guides/dummy_metrics_api/'
      },
      {
        title: 'Migrating',
        path: '/guides/migrating/'
      },
      {
        title: 'Overview',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
      }
        ]
    }
    ]
  },
plugins: [`@adobe/gatsby-theme-aio`]
};