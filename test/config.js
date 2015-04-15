import assert from 'assert';

import Lab from 'lab';
export const lab = Lab.script();

import * as config from '../src/config.js';
import ini from 'ini';
import fs from 'fs';

lab.experiment('config', () => {

  lab.test('loads a defined config', (done) => {

    config.load(__dirname + '/fixtures/randomini')
      .then((res) => {
        assert.equal(res.get('clusters').rocko, 'artischocko');
        done();
      });
  });

  lab.test('saves a value', (done) => {

    config.load(__dirname + '/fixtures/randomini')
      .then((res) => {
        config.set({'cluster': {'node1': 'rocko'}}, 'foo').then((e) => {
          var c = ini.parse(fs.readFileSync(__dirname + '/fixtures/randomini', 'utf-8'));
          console.log(c);
          done();
        });
      });
  });

});

