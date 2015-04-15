import cc from 'config-chain';
import couchadmin from '../src/couchadmin.js';

let config;

export const load = function load (conf = '.couchadminrc') {
  const confFile = cc.find(conf);
  return new Promise((resolve, reject) => {
    config = cc({})
      .addFile(confFile, 'ini', 'main')
      .on('load', () => {
        resolve(config);
      });
  });
};

export const set = function set (key, value) {
  return new Promise((resolve, reject) => {
    config.on('save', () => {
      resolve();
    });
    config.set(key, value, 'main');
    config.save('main', 'ini');
  });
};
