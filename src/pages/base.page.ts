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
			this.fieldName(nameOfTheField)
		);
	}

    async clickOnButtonName(buttonName: string) {
		await this.page.getByRole('button', { name: `${buttonName}` }).isEnabled();
		await this.page.getByRole('button', { name: `${buttonName}` }).click();
	}
    
    fieldName(nameOfTheField: string) {
		return this.page.getByLabel(nameOfTheField);
	}
	}