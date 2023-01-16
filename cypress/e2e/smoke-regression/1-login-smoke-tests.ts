/// <reference types="cypress" />

import { loginPage } from "../../support/page_objects/LoginPageObject";

describe('Login test suite', () => {

    const standardUsername = Cypress.env('standardUsername');
    const lockedUsername = Cypress.env('lockedUsername');
    const password = Cypress.env('password');

    beforeEach(() => {
        cy.visit('./');
    });

    it('should display proper elements', () => {
        loginPage.validateElementsOnLoginPage();
    });

    it('login as standard user', () => {
        loginPage.logIn(standardUsername, password);
    });

    it('should display proper error after login with invalid username', () => {
        loginPage.logIn('user', password);
        loginPage.validateErrorStrings('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display proper error after login with locked out user', () => {
        loginPage.logIn(lockedUsername, password);
        loginPage.validateErrorStrings('Epic sadface: Sorry, this user has been locked out.');
    });
});