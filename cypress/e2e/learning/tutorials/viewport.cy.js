/// <reference types="cypress" />

describe('Learning view port', function () {

    beforeEach(() => {
        cy.visit('https://www.google.com')
    })

    it('ipad-2', function () {
        cy.viewport('ipad-2','portrait')
        cy.log('ipad-2')
        cy.wait(2000)
    })

    it('iphone-x landscape', function () {
        cy.viewport('iphone-x', 'landscape')
        cy.log('iphone-x landscape')
        cy.wait(2000)
    })

    it('macbook-15', function () {
        cy.viewport('macbook-15')
        cy.log('macbook-15')
    })

});