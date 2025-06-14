// cypress/e2e/home.cy.ts
describe('Strona główna', () => {
  it('zawiera nagłówek', () => {
    cy.visit('http://localhost:3000');
    cy.contains('h1', 'Strona główna'); // lub Twój tekst
cy.get('p').invoke('text').should('not.be.empty');

  });
});