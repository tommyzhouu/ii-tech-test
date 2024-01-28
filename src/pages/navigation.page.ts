import { BasePage } from './base.page';
import { waitForPageUrl } from '../helpers/waitHelper';

export class NavigationPage extends BasePage {

	homePage() {
		const safeURL = process.env.BASE_URL as string;
		return this.page.goto(safeURL);
		
	}

	// Items inside navigation bar
	async menuName(tabName: string, url: string) {
		await this.page.getByRole('link', { name: tabName }).click();
		await waitForPageUrl(this.page, `/${url}`);
		
	}
	}

