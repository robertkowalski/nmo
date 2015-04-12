const commands = [
  'isonline',
  'help'
];

export const couchadmin = {
  commands: []
};

commands.forEach(function (cmd) {
  couchadmin.commands[cmd] = require('./' + cmd + '.js');
});
