const expect = require("chai").expect;
const UserService = require('../services/user.service');
const sandbox = require('sinon').createSandbox();

let userServiceJson = {
    users: [
    {
        "id": 1,
        "username": "Ali",
        "email": "Ali@sample.com"
    },
    {
        "id": 2,
        "username": "irfan",
        "email": "irfan@sample.com"
    }
    ]
  }

describe ('Unit Test for UserService Class', function() {

    describe('When ISOLATED (Stubbed)', function() {
        this.timeout(50000);
        
        beforeEach(function () {
            userservice = new UserService();
            sandbox.stub(UserService.prototype,'getAll').returns(Promise.resolve(userServiceJson))
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Verify Keys of \'getAll\' JSON Output - Stubbed', async function() {
            
            var res_userservice = await userservice.getAll();
            // check that json contains users
            expect(res_userservice).to.have.keys('users');
            
            // check that users array contains desired keys
            for (var i=0; i<(res_userservice.users).length; i++) {
                expect(res_userservice.users[i]).to.have.all.keys('id','username','email');
            }
        });


        it('Verify \'Users\' is an Array in \'getAll\' JSON Output - Stubbed', async function() {
            
            var res_userservice = await userservice.getAll();
            expect(res_userservice.users).to.be.an('array');

        });

        it('Verify \'id\' is NUMBER in \'getAll\' JSON Output - Stubbed', async function() {
            
            var res_userservice = await userservice.getAll();
            for (var i=0; i<(res_userservice.users).length; i++) {
                expect(res_userservice.users[i].id).to.be.a('number');
            }
        });

        it('Verify \'username\' is STRING in \'getAll\' JSON Output - Stubbed', async function() {
            
            var res_userservice = await userservice.getAll();
            for (var i=0; i<(res_userservice.users).length; i++) {
                expect(res_userservice.users[i].username).to.be.a('string');
            }
        });

        it('Verify \'email\' is STRING in \'getAll\' JSON Output - Stubbed', async function() {
            
            var res_userservice = await userservice.getAll();
            for (var i=0; i<(res_userservice.users).length; i++) {
                expect(res_userservice.users[i].email).to.be.a('string');
            }
        });

    });

    describe('When NOT ISOLATED', function() {
        this.timeout(50000);
        
        beforeEach(function () {
            userservice = new UserService();
        });

        it('Verify Keys of \'getAll\' JSON Output', async function() {
            
            var res_userservice = await userservice.getAll();
            // check that json contains users
            expect(res_userservice).to.have.keys('users');
            
            // check that users array contains desired keys
            for (var i=0; i<(res_userservice.users).length; i++) {
                expect(res_userservice.users[i]).to.have.all.keys('id','username','email');
            }
        });


        it('Verify \'Users\' is an Array in \'getAll\' JSON Output', async function() {
            
            var res_userservice = await userservice.getAll();
            expect(res_userservice.users).to.be.an('array');

        });

        it('Verify \'id\' is NUMBER in \'getAll\' JSON Output', async function() {
            
            var res_userservice = await userservice.getAll();
            for (var i=0; i<(res_userservice.users).length; i++) {
                expect(res_userservice.users[i].id).to.be.a('number');
            }
        });

        it('Verify \'username\' is STRING in \'getAll\' JSON Output', async function() {
            
            var res_userservice = await userservice.getAll();
            for (var i=0; i<(res_userservice.users).length; i++) {
                expect(res_userservice.users[i].username).to.be.a('string');
            }
        });

        it('Verify \'email\' is STRING in \'getAll\' JSON Output', async function() {
            
            var res_userservice = await userservice.getAll();
            for (var i=0; i<(res_userservice.users).length; i++) {
                expect(res_userservice.users[i].email).to.be.a('string');
            }
        });

    });

});