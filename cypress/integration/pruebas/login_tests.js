describe('Login Test', function(){
 it('Login Invalido', function(){
    cy.visit('http://localhost:4200/login');
    cy.get('#userName')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
    cy.get('#password')
      .type('1234')
    cy.contains('Entrar').click();
    cy.get('#toast-container').should('contain.text','Credenciales');
 });

 it('Login Valido', function(){
  cy.visit('http://localhost:4200/login');
  cy.get('#userName')
    .type('prueba1@prueba')
    .should('have.value', 'prueba1@prueba')
  cy.get('#password')
    .type('777')
  cy.contains('Entrar').click();
  cy.get('#toast-container').should('contain.text','Login exitoso');
});
})
