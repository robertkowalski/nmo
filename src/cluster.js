import path from 'path';

import Promise from 'bluebird';

// FIXME for win
// FIXME for installations
const configFile = cc.find('.couchadminrc');

export const add = function add (node, name) {
  return new Promise((resolve, reject) => {

  });
}


/*
(23:59:26) [robert@tequila-osx] ~/apache/couchadmin (0.0.1) $ # create cluster emma
(01:49:20) [robert@tequila-osx] ~/apache/couchadmin (0.0.1) $ # add http://127.0.0.0.1:5984 emma
(01:50:27) [robert@tequila-osx] ~/apache/couchadmin (0.0.1) $ # add http://127.0.0.0.1:15984 emma
(01:50:34) [robert@tequila-osx] ~/apache/couchadmin (0.0.1) $ # add http://127.0.0.0.1:25984 emma
(01:50:34) [robert@tequila-osx] ~/apache/couchadmin (0.0.1) $ # set http://127.0.0.0.1:25984 http://127.0.2.0.1:55984 emma
(01:50:37) [robert@tequila-osx] ~/apache/couchadmin (0.0.1) $ # remove http://127.0.0.0.1:25984 emma

(01:51:45) [robert@tequila-osx] ~/apache/couchadmin (0.0.1) $ # auth http://127.0.0.0.1:25984 foo bar
(01:52:58) [robert@tequila-osx] ~/apache/couchadmin (0.0.1) $ # auth http://127.0.0.0.1:25984 foo bar --cookie
(01:53:04) [robert@tequila-osx] ~/apache/couchadmin (0.0.1) $ # auth http://127.0.0.0.1:25984 foo bar --basic
*/
