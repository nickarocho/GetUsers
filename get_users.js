var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('request');
chai.should();
chai.use(sinonChai);

describe('GetUsers Tests', function () {
    it('is true', function () {
        expect(true).to.equal(true);
    });
});