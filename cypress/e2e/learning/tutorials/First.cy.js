/// <reference types="cypress" />

describe('Validate Login Functionality', () => 
    {
    it('Login with valid credentials', () => 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        //cy.get('#welcome').should('be.visible')
       
    });

    it('Login with invalid credentials', () => 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234')
        cy.get('.oxd-button').click()
       // cy.get('#spanMessage').should('be.visible') 
        
    });


});