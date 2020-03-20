const should = require('should');
const assert = require('assert');
const request = require('supertest');
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
var expect = chai.expect;

// Test get profile after the user is authenticated
describe( 'Profile Test', () => {
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
                }).catch( err => {
                    console.log(err.message)
                });
        })
    });

    // Test GET api/profile/me
    describe('Get User profile after is authenticated', () => {
        it('should create the user profile', async () => {
            //Send request to the app
            await request(app)
                .get('/api/profile/me')
                .then((res) => {
                    //asserion
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("_id");
                    expect(res.body).to.have.property("user");
                    expect(res.body).to.have.property("user").to.have.property("_id");
                    expect(res.body).to.have.property("user").to.have.property("firstName");
                    expect(res.body).to.have.property("user").to.have.property("lastName");
                    expect(res.body).to.have.property("user").to.have.property("email");
                    expect(res.body).to.have.property("date");
                }).catch( err => {
                console.log(err.message)
            })
        })
    })
});


describe( 'Register and create profile Test', () => {
    // Create new user
    it('Should return 201 and confirmation for valid input', async () => {
        const sampleUser = {
            firstName : 'Luigi',
            lastName: 'Ferrari',
            email: 'luigi.ferrari@gmail.com',
            password: 'superferrari'
        };

        //Send request to the app
        await request(app)
            .post('/api/users')
            .send(sampleUser)
            .then((res) => {
                //asserion
                expect(res).to.have.status(201);
                expect(res.body.message).to.be.equal("User created!");
                expect(res.body.errors.length).to.be.equal(0);
            }).catch( err => {
            console.log(err.message)
        })
    });

    // Test POST api/profile
    describe('Create User Profile', () => {
        it('should create the user profile', async () => {
            //Send request to the app
            await request(app)
                .post('/api/profile')
                .then((res) => {
                    //asserion
                    expect(res).to.have.status(201);
                    expect(res.body).to.have.property("_id");
                    expect(res.body).to.have.property("user");
                    expect(res.body).to.have.property("date");
                }).catch( err => {
                    console.log(err.message)
                })
        })
    })
});
