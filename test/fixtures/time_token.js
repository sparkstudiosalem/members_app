// Copyright 2019 Iced Development, LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const { faker } = require('@faker-js/faker');
const { Factory } = require('rosie');
const { v4: uuidV4 } = require('uuid');

const time_token = new Factory();

time_token
  .attr('id', uuidV4)
  .attr('user_id', faker.internet.userName)
  .attr('token_type')
  .attr('created_at')
  .attr('used_at');

const fixture = [
  time_token.build({
    token_type: 'RESET',
  }),
  time_token.build({
    token_type: 'RESET',
  }),
  time_token.build({
    token_type: 'VALIDATION',
  }),
  time_token.build({
    token_type: 'VALIDATION',
  }),
];

module.exports = fixture;
