import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class SignUpPage extends BasePage {
	emailField = 'Email address';
	nameField = 'Name';
	firstNameField = 'First name';
	passwordField = 'Password';
	lastNameField = 'Last name';
	addressField = 'Address * (Street address, P.';
	stateField = 'State';
	cityField = 'City *';
	mobileNumberField = 'Mobile number';

	async signup(email: string, firstName: string) {
		await expect(this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')).toBeVisible();
		await expect(this.page.getByPlaceholder('Name')).toBeVisible();
		await this.page.getByPlaceholder('Name').fill(firstName);
		await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
		await this.clickOnButtonName('Signup');
	}


	async signupForm(password: string,firstName: string, lastName: string, address: string, state: string, city: string, zipCode: string, mobileNumber: string) {
		await this.verifyFieldToBeVisible(this.passwordField);
		await this.verifyFieldToBeVisible(this.firstNameField);
		await this.verifyFieldToBeVisible(this.lastNameField);
		await this.verifyFieldToBeVisible(this.addressField);
		await this.verifyFieldToBeVisible(this.stateField);
		await this.verifyFieldToBeVisible(this.cityField);
		await expect(this.page.locator('#zipcode')).toBeVisible();
		await this.verifyFieldToBeVisible(this.mobileNumberField);

		await this.fieldNameLabel(this.passwordField).fill(password);
		await this.fieldNameLabel(this.firstNameField).fill(firstName);
		await this.fieldNameLabel(this.lastNameField).fill(lastName);
		await this.fieldNameLabel(this.addressField).fill(address);
		await this.fieldNameLabel(this.stateField).fill(state);
		await this.fieldNameLabel(this.cityField).fill(city);
		await this.page.locator('#zipcode').fill(zipCode);
		await this.fieldNameLabel(this.mobileNumberField).fill(mobileNumber);

		await this.clickOnButtonName('Create Account');
		await expect(this.page.getByText('Account Created!')).toBeVisible();
		await this.clickOnButtonWithLink('Continue');
	}
}