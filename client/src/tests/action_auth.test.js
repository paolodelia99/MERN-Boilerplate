import * as actions from '../actions/auth';
import * as types from '../actions/types';

describe('auth actions', () => {
    it('should auth the user', () => {
        const user = {
            email: 'paolo.delia99@gmail.com',
            password:'mcrapadam99'
        };
        const sampleRes = {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3NGUwMGM5MjIzNjkwNzVjNGUzOTM2In0sImlhdCI6MTU4NDcyMDQxNSwiZXhwIjoxNTg1MDgwNDE1fQ.YQSkGdKItTzQ4JEaJ3Lqr__lgt6MSdvEg5ZrmiyRyUc'
        };
        const expectedAction = {
            type: types.LOGIN_SUCCESS,
            sampleRes
        };
        expect(actions.login(user.email,user.password)).toEqual(expectedAction);
    })
})
