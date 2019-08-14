import React from 'react'
import { shallow, mount } from 'enzyme';
import { LoginPage }  from '../LoginPage/LoginPage';
import { store } from '../_helpers/store';
import { Provider } from "react-redux";



describe('Teste unit / Component login', () => {
    const user = {
        id: 1,
        username: "PortalAdmin",
        firstName: "Portal",
        lastName: "Admin",
        token: 'fake-jwt-token'
    }
    const props = {
        login: jest.fn(),
        logout: jest.fn()
    }
    const component = mount(<LoginPage store={store} loggingIn={user} {...props} />);
    
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

    it('test click button show menssage <Error! Login or Password>', () => {
        component.find('input[id="idButtonLogin"]').simulate('click');
        expect(component.find('div[id="idErrorLogin"]').text()).toBe("Error! Login or Password");
        
    });

    it('test not click button dont show menssage <Error! Login or Password>', () => {
        const componentLoadNew = mount(<LoginPage store={store} loggingIn={user} {...props} />)
        expect(componentLoadNew.find('div[id="idErrorLogin"]').isEmpty()).toBe(true);
        
    });

    // it('test change value input password ', () => {
    //     const textValueInitial = '';
    //     expect(component.find('input[id="password"]').instance().value).toBe(textValueInitial);
        
    //     const event = {target: {value: "1234"}};
    //     component.find('input[id="password"]').simulate('change', event);;
        
        

    //     const textValueFinal = '1234';
    //     expect(component.find('input[id="password"]').instance().value).toBe(textValueFinal);
    // });

    

});