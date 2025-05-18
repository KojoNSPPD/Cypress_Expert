/// <reference types="cypress" />

describe('File Upload tutorial', () => {
  it('upload a file', () => {
    // Add your file upload test steps here
    cy.visit('https://the-internet.herokuapp.com/upload');

    const file = 'toad.png'; // Replace with the path to your file
    cy.get('#file-upload').attachFile(file);
    cy.get('#file-submit').click();

    cy.get('#uploaded-files').should('contain', file);
    // Verify that the file was uploaded successfully
  })
});