import { expect, Page } from '@playwright/test';
import ElementAssertions from '../assertions/elementAssertions';

export class BasePage {
	readonly page: Page;

	readonly assertions: ElementAssertions;

	constructor(page: Page) {
		this.page = page;
		this.assertions = new ElementAssertions();
	}

	async verifyFieldToBeVisible(nameOfTheField: string): Promise<void> {
		await this.assertions.assertThatElementToBeVisible(
			this.fieldNameLabel(nameOfTheField)
		);
	}

	async verifyFieldToBeVisibleWithPlaceholder(nameOfTheField: string): Promise<void> {
		await this.assertions.assertThatElementToBeVisible(
			this.fieldNamePlaceholder(nameOfTheField)
		);
	}

	async verifyFieldToBeVisibleWithName(nameOfTheField: string): Promise<void> {
		await this.assertions.assertThatElementToBeVisible(
			this.fieldName(nameOfTheField)
		);
	}

    async clickOnButtonName(buttonName: string) {
		await this.page.getByRole('button', { name: `${buttonName}` }).isEnabled();
		await this.page.getByRole('button', { name: `${buttonName}` }).click();
	}
	
	async clickOnButtonWithLink(buttonName: string) {
		await this.page.getByRole('link', { name: `${buttonName}` }).isVisible();
		await this.page.getByRole('link', { name: buttonName }).click();
	}

	async verifyTextToBeVisible(expectedText: string) {
		await this.assertions.assertTextToBeVisible(this.page.getByText(expectedText))
	}
    
    fieldNameLabel(nameOfTheField: string) {
		return this.page.getByLabel(nameOfTheField);
	}

	fieldNamePlaceholder(nameOfTheField: string) {
		return this.page.getByPlaceholder(nameOfTheField);
	}

	fieldName(nameOfTheField: string) {
		return this.page.locator(`[name=${nameOfTheField}]`);
	}
	
	}