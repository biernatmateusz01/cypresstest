describe('Strona główna', () => {
  it('zawiera tytuł i pozwala dodać do koszyka', () => {
    cy.visit('/product/1');

    // Sprawdza, czy h3 zawiera tytuł produktu
    cy.get('h3').contains('Nazwa produktu'); // <- zmień na swój tekst

    // Znajduje przycisk i klika go
    cy.contains('button', 'Dodaj do koszyka').click();

    // Sprawdza, czy coś się zmieniło, np. ilość w koszyku
    // Przykład: koszyk pokazuje "(1)" po kliknięciu
    // cy.get('[data-test=cart-count]').should('contain', '1');
  });
});
