'use strict';

var nopt = require('nopt');

var couchadmin = require('../lib/couchadmin.js').couchadmin;
var parsed = nopt({}, {}, process.argv, 2);
var cmd = parsed.argv.remain.shift();


if (!cmd || !couchadmin.commands[cmd]) {
  return couchadmin.commands.help();
}

console.log(parsed);

couchadmin
  .commands[cmd]
  .call(couchadmin.commands[cmd], parsed.argv.remain)
  .catch(errorHandler);

function errorHandler(err) {
  console.error(err);
  process.exit(1);
}
