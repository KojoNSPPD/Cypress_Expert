/// <reference types="cypress" />

describe('Validate Login Functionality', () => 
    {
    it('Login with valid credentials', () => 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#welcome').should('be.visible')
       
    });

    it('Login with invalid credentials', () => 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin1234')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be.visible') 
        
    });


});