
/// <reference types="cypress" />

describe('Smoke test', () => {

  
     beforeEach('Login with Valid Credentials',function ()    //This will run before each test case
     {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
     });
       
    it('Validate link', () => {       //This is the test case
        cy.get(`a[id='item_4_title_link'] div[class='inventory_item_name ']`).click()
    }); 

    it('Validate Add to Cart', () => {  //This is the test case
        cy.get(`#add-to-cart-sauce-labs-backpack`).click()
    }); 

    afterEach("Logout",function (){                     //This will run after each test case
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
})
