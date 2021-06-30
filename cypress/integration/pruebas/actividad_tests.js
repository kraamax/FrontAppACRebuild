describe('Login Test', function(){

 it('Puedo registrar una actividad a un docente', function(){
  cy.visit('http://localhost:4200/login');
  cy.get('#userName')
    .type('prueba1@prueba')
    .should('have.value', 'prueba1@prueba')
  cy.get('#password')
    .type('777')
  cy.contains('Entrar').click();
  cy.get('#toast-container').should('contain.text','Login exitoso');
  cy.get('#toast-container').within(() => {
    cy.get('button').click() // Only yield inputs within form
  })
  cy.contains('Docente').click();
  cy.contains('Asignar Actividad').click();
  cy.wait(1000);
  cy.get('#tipoActividad').click();
  cy.get('#mat-option-0').click();
  cy.get('#horasAsignadas').type(20);
  cy.contains('Agregar').click();
  cy.contains('Cerrar Sesión').click();

});

it('Puedo registrar plazo Apertura', function(){
  cy.visit('http://localhost:4200/login');
  cy.get('#userName')
    .type('prueba1@prueba')
    .should('have.value', 'prueba1@prueba')
  cy.get('#password')
    .type('777')
  cy.contains('Entrar').click();
  cy.get('#toast-container').should('contain.text','Login exitoso');
  cy.get('#toast-container').within(() => {
    cy.get('button').click() // Only yield inputs within form
  })
  cy.contains('Plazo Apertura').click();
  cy.get('#fechaInicio').type("2021-06-29");
  cy.get('#fechaFin').type("2021-07-09");
  cy.contains('Actualizar').click();
  cy.get('#toast-container').should('contain.text','correctamente');
});


it('Puedo registrar plan accion', function(){
  cy.visit('http://localhost:4200/login');
  cy.get('#userName')
    .type('prueba2@prueba')
    .should('have.value', 'prueba2@prueba')
  cy.get('#password')
    .type('777')
  cy.contains('Entrar').click();
  cy.get('#toast-container').should('contain.text','Login exitoso');
  cy.get('#toast-container').within(() => {
    cy.get('button').click() // Only yield inputs within form
  })
  cy.contains('Plan Accion').click();
  cy.contains('Registrar Plan').click();
  cy.get('textarea').type("hola");
  cy.contains('Agregar').click();
  cy.contains('Registrar Plan').click();
});

it('Puedo registrar acciones realizadas', function(){
  cy.visit('http://localhost:4200/login');
  cy.get('#userName')
    .type('prueba2@prueba')
    .should('have.value', 'prueba2@prueba')
  cy.get('#password')
    .type('777')
  cy.contains('Entrar').click();
  cy.get('#toast-container').should('contain.text','Login exitoso');
  cy.get('#toast-container').within(() => {
    cy.get('button').click() // Only yield inputs within form
  })
  cy.contains('Plan Accion').click();
  cy.contains('Acciones Realizadas').click();
  cy.contains('Registrar').click();
  cy.get('textarea').type("lo que sea");
  cy.get('#evidencia').type("documento");
  cy.contains('Guardar').click();

});

})
