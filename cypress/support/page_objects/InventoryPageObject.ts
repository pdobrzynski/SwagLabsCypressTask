export class InventoryPageObject {

    shoppingCart = '.shopping_cart_badge';
    addToCartElement = (itemName: string) => {
        return `button#add-to-cart-sauce-labs-${itemName}`;
    }
    removeFromCartElement = (itemName: string) => {
        return `button#remove-sauce-labs-${itemName}`;
    }

    addItemToCart(itemName: string) {
        cy.get(this.addToCartElement(itemName)).click();
    }

    removeItemFromCart(itemName: string) {
        cy.get(this.removeFromCartElement(itemName)).click();
    }

    validateShoppingCartValue(quantity: number) {
        if(quantity == 0) {
            cy.get(this.shoppingCart).should('not.exist');
        } else {
            cy.get(this.shoppingCart).should('contain', quantity);
        }
    }



}

export const inventoryPage = new InventoryPageObject();