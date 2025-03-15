/// <reference types="cypress" />

describe('BDD Style assertions ', () => {

    it('Validate Login Page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('have.text','Login',)
        cy.get(`div[class='orangehrm-login-form'] p:nth-child(2)`).should('include.text','admin123')
        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('not.contain','Login Page')
        cy.get(`input[placeholder='Username']`).should('be.visible')
        cy.get(`input[placeholder='Username']`).should('exist')
        cy.get(`input[placeholder='Username']`).should('be.enabled').and('not.be.disabled')
        cy.get(`input[placeholder='Username']`).type('admin')
        cy.get(`input[placeholder='Username']`).invoke('val').should('eq','admin')
    })

    let PhoneNumber;

    it('Validate phone number regex', () =>  {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get(`input[placeholder='Username']`).type('646.765.0217')
        cy.get(`input[placeholder='Username']`).invoke('val')
        .then((val) => {
            PhoneNumber = val;
            cy.log('Stored Phone Number: ' + PhoneNumber);
        })
    })

    it('Final stage', () => {
        const phoneNewString = PhoneNumber.toString();

        const phoneRegex = /^(\(\d{3}\)\s?|\d{3}[-.\s])\d{3}[-.\s]?\d{4}$/;

        expect(phoneNewString).to.match(phoneRegex, 'Phone number matches the standard US format');
    });

})