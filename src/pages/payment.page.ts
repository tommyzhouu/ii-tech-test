import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class PaymentPage extends BasePage {
    async fillInPaymentDetails(nameOnCard: string, cardNumber: string, cvv: string, expirationMonth: string,  expirationYear: string) {

    await this.verifyFieldToBeVisibleWithName('name_on_card');
    await this.verifyFieldToBeVisibleWithName('card_number');
    await this.verifyFieldToBeVisibleWithName('cvc');
    await this.verifyFieldToBeVisibleWithName('expiry_month');
    await this.verifyFieldToBeVisibleWithName('expiry_year');
    
    await this.fieldName('name_on_card').fill(nameOnCard);
    await this.fieldName('card_number').fill(cardNumber);
    await this.fieldName('cvc').fill(cvv);
    await this.fieldName('expiry_month').fill(expirationMonth);
    await this.fieldName('expiry_year').fill(expirationYear);

    }

    async payAndConfirm() {
        await this.clickOnButtonName('Pay and Confirm Order');
        await this.verifyTextToBeVisible('Order Placed!')
        await this.verifyTextToBeVisible('Order Placed! Congratulations! Your order has been confirmed!');
        await this.clickOnButtonWithLink('Continue');
        
    }
}