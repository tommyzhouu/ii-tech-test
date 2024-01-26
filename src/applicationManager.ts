import { Page } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { NavigationPage } from './pages/navigation.page';
import { SignUpPage } from './pages/signUp.page';
import { BasePage } from './pages/base.page';

export class ApplicationManager {
	
	readonly page: Page;

	readonly navigateTo: NavigationPage;

    readonly basePage: BasePage;

	readonly signUp: SignUpPage;

	readonly loginPage: LoginPage;

	constructor(page: Page) {
		this.page = page;
		this.basePage = new BasePage(this.page);
		this.navigateTo = new NavigationPage(this.page);
		this.loginPage = new LoginPage(this.page);
		this.signUp = new SignUpPage(this.page);
	}
}
