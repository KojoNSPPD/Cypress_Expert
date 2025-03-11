/// <reference types="cypress" />   

describe('Validate Dropdowns/Select', () => {

    beforeEach('Login with Valid Credentials',function ()    //This will run before each test case
    {
       cy.visit('https://www.saucedemo.com/')
       cy.get('#user-name').type('standard_user')
       cy.get('#password').type('secret_sauce')
       cy.get('#login-button').click()
    });

    it('Validate Select based dropdown', () => {       //This is the test case
        cy.get('.product_sort_container').select('Price (high to low)')  //Selecting the dropdown value 
    }); 


})