///<reference types="cypress" />

describe('Handle Multiple tabs', function () {

    it('Testing tabs',function () {
        cy.visit('https://workspace.google.com/gmail/')
        cy.get(':nth-child(3) > .link > .link__label').invoke('removeAttr', 'target').click()
        
        
       
        
    })
});

