//Cypress test
describe('Login with Discord and buy a propertie', () => {

    it('should log in successfully', () => {
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

        // Hasta aquí se ha verificado login con discord

        // Estamos en Home
        // Escogemos un marcador del mapa
        cy.get('img[src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/images/marker-icon.png"]')
            .eq(0) // Aquí puedes cambiar el número para seleccionar un marcador diferente
            .click();

        // Hacemos click en ver más del popup
        cy.get('.leaflet-popup-content')
            .contains('Ver más')
            .click();

        // Quitamos excepciones para posibles errores 400 durante la carga de la página
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Permite que la prueba continúe sin marcarla como fallida
            return false;
        });

        // Intentamos comprar hasta que la compra sea exitosa
        cy.get('body').then(($body) => {
            // Repetir el clic hasta que aparezca el toastify o se agote el tiempo máximo
            const maxAttempts = 10;
            let attempts = 0;
            let toastifyVisible = false;

            const checkToastifyVisible = () => {
                cy.contains('Comprada').then(($button) => {
                    if ($button.length > 0) {
                        toastifyVisible = true; // Salir del bucle si se encuentra el botón "Comprada"
                    } else {
                        attempts++;
                        if (attempts < maxAttempts) {
                            // Esperar antes de volver a verificar
                            cy.wait(1000);
                            cy.contains('Comprar').click();
                            checkToastifyVisible();
                        }
                    }
                });
            };

            checkToastifyVisible();
        });
    });
});
