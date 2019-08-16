import React from 'react'
import { mount } from 'enzyme';
import { LoginPage }  from '../LoginPage/LoginPage';
import { store } from '../_helpers/store';



describe('Teste unit / Component login', () => {
    const pwdId         = 'input[id="password"]';
    const loginId       = 'input[id="login"]';
    const idButtonLogin = 'input[id="idButtonLogin"]'
    const idLoginError  = 'div[id="idErrorLogin"]'

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
        expect(component.find(loginId).prop('placeholder')).toBe(namePlaceHolder);
    });

    it('test check placeHolder input password ', () => {

        const namePlaceHolder = 'password';
        expect(component.find(pwdId).prop('placeholder')).toBe(namePlaceHolder);
    });

    it('test check placeHolder input type button ', () => {

        const typeButton = 'button';
        expect(component.find(idButtonLogin).prop('type')).toBe(typeButton);
    });

    it('test click button show menssage <Error! Login or Password>', () => {
        const exptectedMessage = "Error! Login or Password"
        component.find(idButtonLogin).simulate('click');
        expect(component.find(idLoginError).text()).toBe(exptectedMessage); 
    });

    it('test not click button dont show menssage <Error! Login or Password>', () => {
        const componentLoadNew = mount(<LoginPage store={store} loggingIn={user} {...props} />)
        expect(componentLoadNew.find(idLoginError).isEmpty()).toBe(true);
    });

    it('test change value input password ', () => {

        const pwd = component.find(pwdId)
        const textValueInitial = '';
        expect(pwd.instance().value).toBe(textValueInitial);

        const textValueFinal = '1234';
        pwd.instance().value = textValueFinal;
        pwd.simulate('change');
        expect(pwd.instance().value).toBe(textValueFinal);
    });

    it('test change value input login ', () => {

        const loginInput = component.find(loginId)
        const textValueInitial = '';
        expect(loginInput.instance().value).toBe(textValueInitial);

        const textValueFinal = '1234';
        loginInput.instance().value = textValueFinal;
        loginInput.simulate('change');
        expect(loginInput.instance().value).toBe(textValueFinal);
    });

    

});