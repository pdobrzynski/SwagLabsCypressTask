/// <reference types="cypress" />

import { loginPage } from "../../support/page_objects/LoginPageObject"; 
import { inventoryPage } from "../../support/page_objects/InventoryPageObject";
import { cartPage } from "../../support/page_objects/CartPageObject";

describe('Checkout test suite', () => {

    const products = [
        "backpack",
        "bike-light",
        "bolt-t-shirt",
        "fleece-jacket",
        "onesie"
    ]

    const standardUsername = Cypress.env('standardUsername');
    const password = Cypress.env('password');

    beforeEach(() => {
        cy.visit('./');
        loginPage.logIn(standardUsername, password);
    });

    it('should add products and complete order', () => {
        
        for (const product of products) {
            inventoryPage.addItemToCart(product)
        }

        inventoryPage.validateShoppingCartValue(products.length);
        cartPage.validateCheckout('Test', 'Test', '11-000', products.length);
    });

    it('should display proper error when data is missing', () => {
        
        for (const product of products) {
            inventoryPage.addItemToCart(product)
        }

        inventoryPage.validateShoppingCartValue(products.length);
        cartPage.validateErrorString('Error: First Name is required')
    });
});