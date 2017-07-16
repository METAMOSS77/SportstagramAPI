/**
 * Created by samybenyoub on 15/07/2017.
 */
'use strict';

var server = require('./server');

server.listen(server.get('port'));
console.log('Express server listening on port ' + server.get('port'));