var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('request');
chai.should();
chai.use(sinonChai);

var getUsers = require('../get_users');

describe('GetUsers Tests', function () {
    it('Can get users', function () {
        getUsers();
    });
});