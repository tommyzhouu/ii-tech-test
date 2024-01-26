import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
	emailField = 'Email Address';
    passwordField = 'Password';

	async login(email: string) {
		await expect(this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')).toBeVisible();
		await this.verifyFieldToBeVisibleWithPlaceholder(this.passwordField);
		await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
		await this.fieldNamePlaceholder('Password').fill(
			process.env.COMMON_PASSWORD as string
		);
		await this.clickOnButtonName('Login');
	}
}
