import React from "react";
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

import Login from "../components/auth/Login";
import {Provider} from "react-redux";

configure({ adapter: new Adapter() });

describe('test case from testing login', ()=> {
    let store;
    let wrapper;
    const initialState = {
        auth:{
            isAuthenticated: null,
            token: null,
            loading: true,
            user: null
        }
    }; // here it is possible to pass in any middleware if needed into //configureStore
    const mockStore = configureStore();

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<Provider store={store}><Login/></Provider>)
    });
    test('email check',()=>
    {
        wrapper.find('#email-input').simulate('change', {target: {name: 'email', value: 'krishankantsinghal'}});
        expect(wrapper.state('email')).toEqual('krishankantsinghal');
    })
})
