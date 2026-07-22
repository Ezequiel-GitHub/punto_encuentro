describe('Usuario test', () => {
  it('Debería registrar un nuevo usuario', () => {
    cy.visit('http://localhost/punto_encuentro/registro.html');

    cy.get('#nombre').type('Juan Pérez');
    cy.get('#email').type('juan.perez@example.com');
    cy.get('#telefono').type('1234567890');
    cy.get('#password').type('password123');
    cy.get('#password2').type('password123');
    cy.get('#estadoAcademico').type('Estudiante');


    cy.get('#registrarseBtn').click();

    cy.contains('Registrado con exito').should('be.visible');
  });
});