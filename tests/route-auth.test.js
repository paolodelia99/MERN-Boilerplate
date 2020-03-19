const should = require('should');
const assert = require('assert');
const request = require('supertest');
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
var expect = chai.expect;


describe( 'User Registration', () => {
    it('Should return 201 and confirmation for valid input', done => {
        const sampleUser = {
            firstName: 'Mario',
            lastName: 'Rossi',
            email: 'mario.rossi@gmail.com',
            password: 'supermario'
        }

        //Send request to the app
        request(app)
            .post('/api/users')
            .send(sampleUser)
            .then((res) => {
                //asserion
                expect(res).to.have.status(200);
                expect(res.body.message).to.be.equal("User created!");
                expect(res.body.errors.length).to.be.equal(0);
                done()
            }).catch( err => {
            console.log(err.message)
        })
    })
});

describe( 'Auth', () => {

    //Test POST api/auth
    describe('Auth user', () => {
        it('should auth a user', (done) => {
            const sampleUser = {
                firstName : 'John',
                lastName: 'Doe',
                email: 'john.doe@gmail.com',
                password: '123456'
            };

            request(app)
                .post('/api/auth')
                .send(sampleUser)
                .expect(200,done)
        })
    });

    // Test GET api/auth
    describe('Get User after is authenticated', () => {
        it('should get the user', done => {
            //Send request to the app
            request(app)
                .get('/api/auth')
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
