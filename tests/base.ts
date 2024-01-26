import { test as base } from '@playwright/test';
import { ApplicationManager } from '../src/applicationManager';

export const test = base.extend<{ app: ApplicationManager }>({
	app: async ({ page }, use) => {
		const app = new ApplicationManager(page);
		await use(app);
	}
});