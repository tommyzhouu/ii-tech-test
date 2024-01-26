import { Page } from '@playwright/test';

export async function waitForPageUrl(page: Page, url: string | RegExp) {
	await page.waitForURL(`${process.env.BASE_URL}${url}`);
}