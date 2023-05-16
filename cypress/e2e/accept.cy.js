// Cypress test
describe('Login with Discord and decline an offer', () => {
  it('should log in successfully and decline an offer', () => {
    
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
    cy.contains('Rechazar')
      .click()
  });
});