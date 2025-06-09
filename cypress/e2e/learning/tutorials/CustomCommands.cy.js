/// <reference types="cypress" />

describe('learn custom commands', () => {
  it('Validate login using custom commands', () => {
    cy.login('Admin', 'admin123');
    
  });
}
);  