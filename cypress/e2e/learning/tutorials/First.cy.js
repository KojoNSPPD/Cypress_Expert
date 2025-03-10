/// <reference types="cypress" />

describe('Validate Login Functionality', () => 
    {
    it('Login with valid credentials', () => 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
    });

    it('Login with invalid credentials', () => 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
    });


});