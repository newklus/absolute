// Copyright (c) 2017 The Absolute Authors.
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

import Application from '../../base/application.js';
import * as auth from '../controller/auth_controller';

/**
 * It is class of rest api for generate user id.
 * And it's temporary api. We will refactor this api
 */
@Application.route('/userid')
export default class UserIdRouter {
  get(request, response) {
    if (request.query.userid) {
      auth.getUserId(request.query.userid).then((authInfo) => {
        response.json(authInfo);
      }, (error) => {
        //FIXME Please define error code to common area.
        response.sendStatus(error);
      });
    } else {
      //FIXME Please define error code to common area.
      response.sendStatus(error);
    }
  }

  post(request, response) {
    auth.generateUserId().then((authInfo) => {
      response.send(authInfo);
    }, (error) => {
      //FIXME Please define error code to common area.
      response.sendStatus(error);
    });
  }
}