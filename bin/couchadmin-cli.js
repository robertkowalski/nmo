'use strict';

var nopt = require('nopt');

var couchadmin = require('../lib/couchadmin.js');
var parsed = nopt({}, {}, process.argv, 2);
var cmd = parsed.argv.remain.shift();


console.log(parsed);

couchadmin.load().then(function (ca) {

  if (!cmd || !couchadmin.commands[cmd]) {
    return couchadmin.commands.help();
  }

  couchadmin
    .commands[cmd]
    .call(couchadmin.commands[cmd], parsed.argv.remain)
    .catch(errorHandler);
});


function errorHandler(err) {
  console.error(err);
  process.exit(1);
}
