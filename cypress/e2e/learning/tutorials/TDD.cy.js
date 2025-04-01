/// <reference types="cypress" />   

describe('Validate complex data using assert', () => {

    it('Validate Complex Data using assert', function(){
    cy.visit('www.google.com')

    //Assertion Strings

    let firstname = 'Kojo'
    let lastname = 'Agyeman'
    
    assert .equal(firstname,'Kojo')
    assert.equal(firstname, 'Kojo', 'First name is Kojo')
    assert.equal(lastname, 'Agyeman', 'Last name is Agyeman')
    })
})