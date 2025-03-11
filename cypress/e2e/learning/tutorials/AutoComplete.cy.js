/// <reference types="cypress" />

describe('Validate AutoComplete', () => {
    
    it('Validate AutoComplete', () => {
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('Cypress automation')   //{enter} is used to press enter key
        cy.contains('cypress automation interview questions')
    });

})