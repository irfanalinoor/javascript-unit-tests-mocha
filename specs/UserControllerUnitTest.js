const expect = require("chai").expect;
const UserController = require('../ctrls/user.ctrl');
const sandbox = require('sinon').createSandbox();

let userServiceJson = {
    users: [
    {
        "id": 1,
        "username": "Alpha",
        "email": "Alpha@sample.com"
    },
    {
        "id": 2,
        "username": "Beta",
        "email": "Beta@sample.com"
    }
    ]
  }
  
describe('Unit Test for UserController Class', function() {

    describe('When ISOLATED (Stubbed)', function() {
        this.timeout(50000);
        
        beforeEach(function () {
            usectrl = new UserController();
            sandbox.stub(UserController.prototype,'getAll').returns(Promise.resolve(userServiceJson.users))
            
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('Verify Keys of \'getAll\' JSON Output - Stubbed', async function() {

            res_usectrl = await usectrl.getAll();
            // check that users array contains desired keys
            for (var i=0; i<(res_usectrl).length; i++) {
                expect(res_usectrl[i]).to.have.all.keys('id','username','email');
            }
        });


        it('Verify \'Users\' is an Array in \'getAll\' JSON Output - Stubbed', async function() {
            
            res_usectrl = await usectrl.getAll();
            expect(res_usectrl).to.be.an('array');

        });

        it('Verify \'id\' is NUMBER in \'getAll\' JSON Output - Stubbed', async function() {
            
            res_usectrl = await usectrl.getAll();
            for (var i=0; i<(res_usectrl).length; i++) {
                expect(res_usectrl[i].id).to.be.a('number');
            }
        });

        it('Verify \'username\' is STRING in \'getAll\' JSON Output - Stubbed', async function() {
            
            res_usectrl = await usectrl.getAll();
            for (var i=0; i<(res_usectrl).length; i++) {
                expect(res_usectrl[i].username).to.be.a('string');
            }
        });

        it('Verify \'email\' is STRING in \'getAll\' JSON Output - Stubbed', async function() {
            
            res_usectrl = await usectrl.getAll();
            for (var i=0; i<(res_usectrl).length; i++) {
                expect(res_usectrl[i].email).to.be.a('string');
            }
        });

    });

    describe('When NOT ISOLATED', function() {
        this.timeout(50000);
        
        beforeEach(function () {
            usectrl = new UserController();            
        });

        it('Verify Keys of \'getAll\' JSON Output', async function() {

            res_usectrl = await usectrl.getAll();
            // check that users array contains desired keys
            for (var i=0; i<(res_usectrl).length; i++) {
                expect(res_usectrl[i]).to.have.all.keys('id','username','email');
            }
        });


        it('Verify \'Users\' is an Array in \'getAll\' JSON Output', async function() {
            
            res_usectrl = await usectrl.getAll();
            expect(res_usectrl.users).to.be.an('array');

        });

        it('Verify \'id\' is NUMBER in \'getAll\' JSON Output', async function() {
            
            res_usectrl = await usectrl.getAll();
            for (var i=0; i<(res_usectrl).length; i++) {
                expect(res_usectrl[i].id).to.be.a('number');
            }
        });

        it('Verify \'username\' is STRING in \'getAll\' JSON Output', async function() {
            
            res_usectrl = await usectrl.getAll();
            for (var i=0; i<(res_usectrl).length; i++) {
                expect(res_usectrl[i].username).to.be.a('string');
            }
        });

        it('Verify \'email\' is STRING in \'getAll\' JSON Output', async function() {
            
            res_usectrl = await usectrl.getAll();
            for (var i=0; i<(res_usectrl).length; i++) {
                expect(res_usectrl[i].email).to.be.a('string');
            }
        });

    });
});
