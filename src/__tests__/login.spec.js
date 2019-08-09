import React from 'react'
import { shallow } from 'enzyme';
import Login from '../Login';
import App from '../App';


describe('Teste unit / Component login', () => {

    const component = shallow(<Login />);
    it('test if exists component', () => {

        const componentExists = true;
        expect(component.exists()).toBe(componentExists);
    });


    it('test check placeHolder input login ', () => {

        const namePlaceHolder = 'login';
        expect(component.find('input[id="login"]').prop('placeholder')).toBe(namePlaceHolder);
    });

    it('test check placeHolder input password ', () => {

        const namePlaceHolder = 'password';
        expect(component.find('input[id="password"]').prop('placeholder')).toBe(namePlaceHolder);
    });

    it('test check placeHolder input type button ', () => {

        const typeButton = 'button';
        expect(component.find('input[id="idButtonLogin"]').prop('type')).toBe(typeButton);
    });

    it('test click button ', () => {

        //component.find('input[id="idButtonLogin"]').simulate('click');
    });

});