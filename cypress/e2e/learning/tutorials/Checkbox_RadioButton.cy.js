/// <reference types="cypress" />

describe("Validate checkbox and radio buttons", () => {

    it('Validate Checkbox', function(){
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        //check all boxes
        cy.get(`input[value='red']`).check()
        //cy.timeout(100)  
        cy.get(`input[value='red']`).uncheck()

        //Check specific box
        cy.get(`input[value='blue']`).invoke('val').then((value) =>{
            cy.log('value of input field:',value)
            expect(value).equals('blue')
        })

        //check multiole boxes
        cy.get(`input[type='checkbox']`).each(($checkboxes,index) => {
            cy.log(`Input field ${index + 1}: ${$checkboxes.val()}`);
            
        })
        //number of checkboxes
        .then(($NofCheckbox) => { 
        cy.log(`total number of checkboxes: ${$NofCheckbox.length}`);
        });

    });

    it('check example',() => {
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        cy.get(`input[type='checkbox']`).check(['red','blue','purple'])
    })

    it.only('Validate Radio Buttons',() => {
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
        cy.get(`input[type='radio']`).first().check()
        //cy.get(`input[type='radio']`).check("Opera")
        
    })
})