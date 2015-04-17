import assert from 'assert';

import Lab from 'lab';
export const lab = Lab.script();

import * as config from '../src/config.js';
import ini from 'ini';
import fs from 'fs';

lab.experiment('config', () => {

  const data = `
[clusters.clusterone]
node0=127.0.0.1
node1='192.168.0.1'

[gang]
rocko=artischocko
z=zmeister
j=janjuleschlie
mussman=dermussmaen
`;


  lab.beforeEach((done) => {
    fs.writeFileSync(__dirname + '/fixtures/randomini', data, 'utf-8');
    done();
  });

  lab.test('loads a defined config', (done) => {

    config.load(__dirname + '/fixtures/randomini')
      .then((res) => {
        assert.equal(res.get('gang').rocko, 'artischocko');
        done();
      });
  });

  lab.test('saves a value', (done) => {

    config.load(__dirname + '/fixtures/randomini')
      .then((res) => {
        config.set('clusters', {'cluster1337': {'node1337': '192.168.133.7'}}).then((e) => {
          const c = ini.parse(fs.readFileSync(__dirname + '/fixtures/randomini', 'utf-8'));
          assert.equal(c.clusters.clusterone.node1, '192.168.0.1');
          assert.equal(c.gang.rocko, 'artischocko');
          assert.equal(c.clusters.cluster1337.node1337, '192.168.133.7');
          done();
        });
      });
  });

  lab.test('saves can overwrite old values', (done) => {

    config.load(__dirname + '/fixtures/randomini')
      .then((res) => {
        config.set('clusters', {'clusterone': {'node1': '192.168.133.7'}}).then((e) => {
          const c = ini.parse(fs.readFileSync(__dirname + '/fixtures/randomini', 'utf-8'));
          assert.equal(c.clusters.clusterone.node1, '192.168.133.7');
          done();
        });
      });
  });

});

