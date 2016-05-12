/// <reference path="../typings/browser.d.ts" />

var soap = require('soap');
let base_url = 'http://192.168.88.141:6894/ormrpc/services/';

function easLogin(user, pass) {
    var url = base_url + 'EASLogin?wsdl';
    var args = {
        userName: user,
        password: pass,
        slnName: 'eas',
        dcName: 'aa',
        language: 'l2',
        dbType: 2
    };
    soap.createClient(url, function (err, client) {
        client.login(args, function (err, result) {
            console.log(result);
        });
    });
}

function getEasData(req, res, next) {
    var url = base_url + 'EASLogin?wsdl';
    var en_data = new Buffer(req.params.data).toString('base64');
    var args = {name: 'value'};
    soap.createClient(url, function (err, client) {
        client.loginRequest1(args, function (err, result) {
            console.log(result);
        });
    }, {wsdl_headers: ""});

    res.send('hello ' + req.params.name);
    next();
}

export {easLogin};

