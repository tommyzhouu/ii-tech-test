import { newUserSignUp } from '../src/testData/signup.testData';
import { test } from './base';
import { paymentInformation } from '../src/testData/payment.testData';

test.describe(
    `Unregistered user searches for product, registers during checkout, places order`,
  () => {

test('User searches for product', async ({ app }) => {
    const newUser =  await newUserSignUp();
    const newPaymentDetails = await paymentInformation();
    const password = process.env.COMMON_PASSWORD as string;
    const emailAddress = newUser.email;
    const address = newUser.address;

    //User navigates to the login page
    await app.navigateTo.homePage();
    await app.navigateTo.menuName('Signup / Login', 'login');
    
    //User signs up to create new account
    await app.signUp.signup(emailAddress, newUser.firstName);
    await app.signUp.signupForm(password, newUser.firstName, newUser.lastName, newUser.address, newUser.state, newUser.city, newUser.zipCode, newUser.mobileNumber);
    
    //User logs out
    await app.navigateTo.menuName('Logout', 'login');

    //User navigates to the products page, search for v-neck t-shirt, add to cart, go to checkout
    await app.navigateTo.homePage();
    await app.navigateTo.menuName('Products', 'products');
    await app.productsPage.productSearchAdd('v-neck');
    await app.productsPage.goToCart();
    await app.productsPage.confirmTshirtInCart();
    await app.productsPage.goToCheckout();
    await app.productsPage.clickOnButtonWithLink('Register / Login');

    //User signs up to create new account
    await app.loginPage.login(emailAddress);
    await app.navigateTo.menuName('Cart', 'view_cart');
    await app.productsPage.confirmTshirtInCart();
    await app.productsPage.goToCheckout();

    //User checks delivery and billing address, places order
    await app.checkoutPage.checkDeliveryAddress(address);
    await app.checkoutPage.checkBillingAddress(address);
    await app.checkoutPage.placeOrder();

    //User enters payment details
    await app.paymentPage.fillInPaymentDetails(newPaymentDetails.NameOnCard, newPaymentDetails.CardNumber, newPaymentDetails.CVC, newPaymentDetails.ExpiryMonth, newPaymentDetails.ExpiryYear);
    await app.paymentPage.payAndConfirm();

    //User deletes account
    await app.navigateTo.menuName('Delete Account', 'delete_account');
    await app.basePage.verifyTextToBeVisible('Account Deleted!');
    await app.basePage.clickOnButtonWithLink('Continue');



});
})