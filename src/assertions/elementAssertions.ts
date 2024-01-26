import { expect, Locator } from '@playwright/test';

export default class ElementAssertions {
	async assertThatElementToBeVisible(element: Locator) {
		await expect(element).toBeVisible();
	}

	async assertTextToBeVisible(element: Locator) {
		await expect(element).toBeVisible();
	}
}