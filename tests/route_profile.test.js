const should = require('should');
const assert = require('assert');
const request = require('supertest');
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../server');

// // Configure chai
// chai.use(chaiHttp);
// var expect = chai.expect;
//
//
// describe( 'Profile Test', () => {
//     //Test POST api/auth
//     describe('Auth user', () => {
//         it('should auth a user', (done) => {
//             const sampleUser = {
//                 firstName : 'John',
//                 lastName: 'Doe',
//                 email: 'john.doe@gmail.com',
//                 password: '123456'
//             };
//
//             request(app)
//                 .post('/api/auth')
//                 .send(sampleUser)
//                 .expect(200,done)
//         })
//     });
//
//     //Send request to the app
//     request(app)
//         .get('/api/auth')
//         .then((res) => {
//             //asserion
//             expect(res).to.have.status(200);
//             done()
//         }).catch( err => {
//         console.log(err.message)
//     })
// });
