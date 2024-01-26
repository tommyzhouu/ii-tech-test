import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class SignUpPage extends BasePage {
	emailField = 'Email address';
	nameField = 'Name';
	firstNameField = 'First name';
	passwordField = 'Password';
	lastNameField = 'Last name';
	addressField = 'Address';
	stateField = 'State';
	cityField = 'City';
	zipCodeField = 'Zip code';
	mobileNumberField = 'Mobile number';

	async signup(email: string, firstName: string) {
		await expect(this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')).toBeVisible();
		await this.verifyFieldToBeVisible(this.nameField);
		await this.fieldName(this.nameField).fill(firstName);
		await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
		//await this.fieldName(this.nameField).fill(firstName);
		await this.clickOnButtonName('Signup');
	}


	async signupForm(password: string, lastName: string, address: string, state: string, city: string, zipCode: string, mobileNumber: string) {
		await this.verifyFieldToBeVisible(this.passwordField);
		//await this.verifyFieldToBeVisible(this.firstNameField);
		await this.verifyFieldToBeVisible(this.lastNameField);
		await this.verifyFieldToBeVisible(this.addressField);
		await this.verifyFieldToBeVisible(this.stateField);
		await this.verifyFieldToBeVisible(this.cityField);
		await this.verifyFieldToBeVisible(this.zipCodeField);
		await this.verifyFieldToBeVisible(this.mobileNumberField);

		await this.fieldName(this.passwordField).fill(password);
		await this.fieldName(this.lastNameField).fill(lastName);
		await this.fieldName(this.addressField).fill(address);
		await this.fieldName(this.stateField).fill(state);
		await this.fieldName(this.cityField).fill(city);
		await this.fieldName(this.zipCodeField).fill(zipCode);
		await this.fieldName(this.mobileNumberField).fill(mobileNumber);

	}
}