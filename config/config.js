/*
 * Copyright 2015-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 *
 */

module.exports = {
  mqtt: {
    // type: 'redis',
    // url: 'redis://localhost:6379/mqtt',
    pubsubCollection: 'ascoltatori',
    redis: {},
    wsServer: {
      enabled: true,
      port: 3000
    }
  },
  forecast: {
    // replace with your own apiKey from forecast.io
    apiKey: '2893d8cf367d5827de7f62d1a87c4cb8',
    url: 'api.forecast.io'
  }
}