var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('request');
chai.should();
chai.use(sinonChai);

var getUsers = require('../get_users');

describe('GetUsers Tests', function () {
    var spy;

    beforeEach(function() {
        spy = sinon.spy();
        sinon.stub(request, 'get').callsFake(function(url, cb) {
            cb({}, {body: '{"users":["user1", "user2"]}'});
        });
    });

    this.afterEach(function () {
        sinon.restore();
    })

    it('Calls the callback', function () {
        getUsers(spy);
        spy.should.have.been.calledOnce;
    });

    it('Calls the correct URL', function () {
        getUsers(spy);
        request.get.should.have.been.calledWith('https://www.mysite.com/api/users');
    });
});