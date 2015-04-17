import cc from 'config-chain';
import ini from 'ini';
import fs from 'fs';
import xtend from 'xtend';

import couchadmin from '../src/couchadmin.js';

let config;

export const load = function load (conf = '.couchadminrc') {
  const confFile = cc.find(conf);
  return new Promise((resolve, reject) => {
    config = cc({})
      .addFile(confFile, 'ini', 'config')
      .on('load', () => {
        resolve(config);
      });
  });
};

export const set = function set (key, value) {
  return new Promise((resolve, reject) => {
    const newValue = xtend(config.get(key, 'config'), value);
    config.set(key, newValue, 'config');
    config.save('config', 'ini', () => {
      resolve();
    });
  });
};

export const get = function get (section = false, key, {silent: true}) {
  return new Promise((resolve, reject) => {
    if ()
    config.get(key, 'config');
  });
};
