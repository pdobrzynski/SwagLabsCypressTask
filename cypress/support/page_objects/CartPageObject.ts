export class CartPageObject {

    shoppingCart = '#shopping_cart_container';
    checkoutButton = 'button#checkout';
    firstNameInput = 'input#first-name';
    lastNameInput = 'input#last-name';
    postalCodeInput = 'input#postal-code';
    continueButton = 'input#continue';
    inventoryItemName = '.inventory_item_name';
    finishButton = 'button#finish';
    checkoutComplete = '#checkout_complete_container';
    errorContainer = '.error-message-container';
  
    validateCheckout(firstName: string, lastName: string, postalCode: string, itemsQuantity: number) {
        cy.get(this.shoppingCart).click();
        cy.get(this.checkoutButton).click();
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.postalCodeInput).type(postalCode);
        cy.get(this.continueButton).click();
        cy.get(this.inventoryItemName).then((items) => {
            expect(itemsQuantity).to.equal(items.length);
        })
        cy.get(this.finishButton).click();
        cy.get(this.checkoutComplete).should('be.visible');
    }

    validateErrorString(errorMessage: string) {
        cy.get(this.shoppingCart).click();
        cy.get(this.checkoutButton).click();
        cy.get(this.continueButton).click();
        cy.get(this.firstNameInput).should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)');
        cy.get(this.lastNameInput).should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)');
        cy.get(this.postalCodeInput).should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)');
        cy.get(this.errorContainer).should('contain', errorMessage);
    }
}

export const cartPage = new CartPageObject();