const should = require('should');
const assert = require('assert');
const request = require('supertest');
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
var expect = chai.expect;

// Test auth endpoints
describe( 'Auth Tests', () => {

    let token;
    //Test POST api/auth
    describe('Auth user', () => {
        it('should auth a user', async () => {
            const sampleUser = {
                email: 'john.doe@gmail.com',
                password: '123456'
            };

             await request(app)
                .post('/api/auth')
                .send(sampleUser)
                .then((res) => {
                    //asserion
                    expect(res).to.have.status(202);

                    expect(res.body).to.have.property("token");
                    token = res.body.token;
                }).catch( err => {
                console.log(err.message)
            });
        })
    });

    // Test GET api/auth
    describe('Get User after is authenticated', () => {
        it('should get the user', done => {
            //Send request to the app
            request(app)
                .get('/api/auth')
                .set('x-auth-token',token)
                .then((res) => {
                    //asserion
                    expect(res).to.have.status(200);

                    done()
                }).catch( err => {
                console.log(err.message)
            })
        })
    })
});
