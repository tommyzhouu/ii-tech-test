import { Page } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { NavigationPage } from './pages/navigation.page';
import { SignUpPage } from './pages/signUp.page';
import { BasePage } from './pages/base.page';
import { ProductsPage } from './pages/products.page';
import { CheckoutPage } from './pages/checkout.page';
import { PaymentPage } from './pages/payment.page';

export class ApplicationManager {
	
	readonly page: Page;

	readonly navigateTo: NavigationPage;

    readonly basePage: BasePage;

	readonly signUp: SignUpPage;

	readonly loginPage: LoginPage;

	readonly productsPage: ProductsPage;

	readonly checkoutPage: CheckoutPage;

	readonly paymentPage: PaymentPage;

	constructor(page: Page) {
		this.page = page;
		this.basePage = new BasePage(this.page);
		this.navigateTo = new NavigationPage(this.page);
		this.loginPage = new LoginPage(this.page);
		this.signUp = new SignUpPage(this.page);
		this.productsPage = new ProductsPage(this.page);
		this.checkoutPage = new CheckoutPage(this.page);
		this.paymentPage = new PaymentPage(this.page);
	}
}
