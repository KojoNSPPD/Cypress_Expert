/// <reference types="cypress" />

describe("Drag and Drop", function () {
  it(" Learn drag and Drop", function () {
    cy.visit("http://vishalok12.github.io/jquery-dragarrange/");
    cy.get(".d-1").drag(".d-3",{force: true});

    cy.get(".d-1")
      .drag(".d-3")
      .then((success) => {
        expect(success).to.be.true;
      });
  });
});
