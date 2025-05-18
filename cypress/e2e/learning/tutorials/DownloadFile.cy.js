/// <reference types="cypress" />

describe('File Download tutorial', () => {

  it('Download a file', () => {
   
    cy.downloadFile('https://www.pngegg.com/en/png-bbbyc', 'mydownloads', 'toad.png')
  })
});