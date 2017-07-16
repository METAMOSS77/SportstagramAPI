/**
 * Created by samybenyoub on 15/07/2017.
 */
'use strict';

var request = require('supertest');
var app = require('../server');

var test = require('tape');

test('Correct users returned', function (t) {
    request(app)
        .get('/getUserFollowed?idUser=21')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            t.error(err, 'No error');
            t.end();
        });
});

test('Correct users returned', function (t) {
    request(app)
        .get('/getUserFollowed?idUser=21')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            t.error(err, 'No error');
            t.end();
        });
});

