/// <reference types="cypress" />

describe("this is a fixtures tutorial", function () {

  beforeEach(function () {
    //call fixture file
    cy.fixture('example').then(function (Logindata) {
      this.Logindata = Logindata
    })
  }
  )

  it("data driven testing", function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(`input[placeholder='Username']`).type(this.Logindata.username)
    cy.get(`input[placeholder='Password']`).type(this.Logindata.password)
    cy.get(`button[type='submit']`).click()

  })
    
});