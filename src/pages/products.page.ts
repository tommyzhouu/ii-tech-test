import { BasePage } from './base.page';
import { waitForPageUrl } from '../helpers/waitHelper';
import { expect } from '@playwright/test';

export class ProductsPage extends BasePage {

    searchProductsField = 'Search Product';

    async productSearchAdd(productsName: string) {
    
        await this.verifyFieldToBeVisibleWithPlaceholder(this.searchProductsField);
        await this.page.getByPlaceholder(this.searchProductsField).fill(productsName);
        await this.page.locator('#submit_search').click();
        await this.page.getByText(productsName).nth(1).isVisible();
        (await this.page.waitForSelector('text="Add to cart"')).click();
        await this.verifyTextToBeVisible('Your product has been added to cart. View Cart');
    }

    async goToCart() {
        await this.clickOnButtonWithLink('View Cart');
        await waitForPageUrl(this.page, '/view_cart');
    }

    async confirmTshirtInCart() {
        await expect(this.page.locator('#product-28')).toContainText('Pure Cotton V-Neck T-Shirt');
        await expect(this.page.locator('#product-28')).toContainText('Rs. 1299');
        await expect(this.page.locator('#product-28')).toContainText('1');
        await expect(this.page.locator('#product-28')).toContainText('Rs. 1299');
    }

    async goToCheckout() {
        await this.page.getByText('Proceed To Checkout').click();
    }
    
};