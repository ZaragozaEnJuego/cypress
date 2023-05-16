// Cypress test
describe('Login with Discord and do an offer', () => {
  it('should log in successfully and do an offer', () => {
    // Visitar la página de login
    cy.visit('https://client-lyart-five.vercel.app/');

    // Hacer clic en el botón de inicio de sesión con Discord
    cy.get('a.flex.items-center.justify-center.p-2.mt-4.bg-primary.text-secondary.rounded-lg')
      .eq(2)
      .click();

    // Ingresa tus credenciales de Discord y haz clic en el botón de inicio de sesión
    cy.origin('https://discord.com', () => {
      cy.get('input#uid_6').type('peperamonprueba@gmail.com');
      cy.get('input[type="password"]').type('123seg123');
      cy.get('button[type="submit"]').click();
      cy.contains('Autorizar').click();
    });

    // Hasta aquí se ha verificado el inicio de sesión con Discord

    // Esperar a que se cargue la página de inicio
    cy.url().should('include', 'https://client-lyart-five.vercel.app/home');

    // Escogemos el elemento 87 de la lista (se ha guardado este sin comprar para tests)
    cy.get('.flex.justify-between.items-center.border-opacity-30.border.w-full.rounded-3xl.border-secondary.py-2.px-4.mt-3.h-36')
      .eq(87)
      .click();

    // Quitamos excepciones para posibles errores 400 durante la carga de la página
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Permite que la prueba continúe sin marcarla como fallida
      return false;
    });

    // Le damos al botón de negociar
    cy.contains('Negociar')
      .click();

    // Hacer click en el botón de ofrecer
    cy.contains('Ofrecer')
      .click()

    // Hacer click en el botón de cerrar sesión
    cy.contains('Cerrar sesión')
      .click()

    // Visitar la página de login
    cy.visit('https://client-lyart-five.vercel.app/');

    // Hacer clic en el botón de inicio de sesión con Discord
    cy.get('a.flex.items-center.justify-center.p-2.mt-4.bg-primary.text-secondary.rounded-lg')
      .eq(2)
      .click();

    // Ingresa tus credenciales de Discord y haz clic en el botón de inicio de sesión
    cy.origin('https://discord.com', () => {
      cy.get('input#uid_6').type('stwpruebadeclase@gmail.com');
      cy.get('input[type="password"]').type('123seg123');
      cy.get('button[type="submit"]').click();
      cy.contains('Autorizar').click();
    });

    // Esperar a que se cargue la página de inicio
    cy.url().should('include', 'https://client-lyart-five.vercel.app/home');

    // Hacer click en el botón de ofertas
    cy.get('svg[fill="inherit"]').eq(2).click();

    // Hacer click en el botón de rechazar
    cy.contains('Rechazar').click()
  });
});