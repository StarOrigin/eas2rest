/// <reference path="../typings/browser.d.ts" />

import {easLogin} from './data';

var restify = require('restify');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer({
    name: 'eas2rest'
});
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(2979, function () {
    console.log('%s listening at %s', server.name, server.url);

    var result = easLogin('xiaxy', 'xxy123');
});