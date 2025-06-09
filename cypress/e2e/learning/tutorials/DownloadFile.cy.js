/// <reference types="cypress" />

describe('File Download tutorial', () => {

  it('Download a file', () => {
   
    cy.downloadFile('https://upload.wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'toad.png')
  })
});