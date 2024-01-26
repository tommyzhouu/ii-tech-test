import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class CheckoutPage extends BasePage {

    async checkDeliveryAddress(address: string){
        await expect(this.page.getByText('Your delivery address .')).toBeVisible();
        await expect(this.page.locator('#address_delivery')).toContainText(address);
    }

    async checkBillingAddress(address: string){
        await expect(this.page.getByText('Your billing address .')).toBeVisible();
        await expect(this.page.locator('#address_invoice')).toContainText(address);
    }

    async placeOrder () {
        await this.clickOnButtonWithLink('Place Order');
    }
}