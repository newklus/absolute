// Copyright (c) 2017 The Absolute Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const assert = require('assert');
const fs = require('fs');
const execSync= require('child_process').execSync;

describe('Clean Test', () => {
  it('Is out directory cleaned?', () => {
    execSync('absolute start');
	execSync('absolute stop');
	execSync('absolute clean');
    assert(fs.existsSync('./out/') == false);
  });
});
