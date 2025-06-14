describe('Strona główna', () => {
  it('zawiera tytuł i pozwala dodać do koszyka', () => {
    cy.visit('/product/1');

    cy.get('h3').contains('Nazwa produktu'); 

    cy.contains('button', 'Dodaj do koszyka').click();
    // cy.get('[data-test=cart-count]').should('contain', '1');
  });
});
