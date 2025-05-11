///<reference types="cypress" />

describe('Handle Alerts', function () {

    it('handling of basic alerts in cypress',function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert',(alert_text)=>{                          //window:alert is a event
           expect(alert_text).to.contain('I am a JS Alert')
        })
       cy.get('#result').should('have.text','You successfully clicked an alert')
        
    })

})