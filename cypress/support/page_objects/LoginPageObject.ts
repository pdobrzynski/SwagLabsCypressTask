export class LoginPageObject {
    
    username = 'input#user-name';
    password = 'input#password';
    loginButton = 'input#login-button';
    errorContainer = '.error-message-container';

    logIn(username: string, password: string) {
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }

    validateElementsOnLoginPage() {
        cy.get(this.username).invoke('attr', 'placeholder').should('contain','Username');
        cy.get(this.password).invoke('attr', 'placeholder').should('contain', 'Password');
        cy.get(this.loginButton).should('be.visible');
    }

    validateErrorStrings(errorMessage: string) {
        cy.get(this.username).should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)');
        cy.get(this.password).should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)');
        cy.get(this.errorContainer).should('contain', errorMessage);
    }
}

export const loginPage = new LoginPageObject();