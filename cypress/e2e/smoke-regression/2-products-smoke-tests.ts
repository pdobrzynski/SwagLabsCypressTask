/// <reference types="cypress" />

import { loginPage } from "../../support/page_objects/LoginPageObject"; 
import { inventoryPage } from "../../support/page_objects/InventoryPageObject";

describe('Products test suite', () => {

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

    it('should add products to cart and update cart value', () => {
        
        for (const product of products) {
            inventoryPage.addItemToCart(product)
        }

        inventoryPage.validateShoppingCartValue(products.length);
    });

    it('should remove products from cart and update cart value', () => {
        
        for (const product of products) {
            inventoryPage.addItemToCart(product)
        }

        for (const product of products) {
            inventoryPage.removeItemFromCart(product)
        }
        
        inventoryPage.validateShoppingCartValue(0);
    });
});