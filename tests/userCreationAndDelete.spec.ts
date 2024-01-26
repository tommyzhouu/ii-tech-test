import { newUserSignUp } from '../src/testData/signup.testData';
import { test } from './base';


test.describe(
    `@User creates new account and logs in`,
  () => {

test('User signs up', async ({ app }) => {
    const newUser =  await newUserSignUp();
    const password = process.env.COMMON_PASSWORD as string;
    const emailAddress = newUser.email;
  
    //User navigates to the login page
    await app.navigateTo.homePage();
    await app.navigateTo.menuName('Signup / Login', 'login');

    //User signs up to create new account
    await app.signUp.signup(emailAddress, newUser.firstName);
    await app.signUp.signupForm(password, newUser.firstName, newUser.lastName, newUser.address, newUser.state, newUser.city, newUser.zipCode, newUser.mobileNumber);
		
    //User logs out
    await app.navigateTo.menuName('Logout', 'login');
    
    //User logs back in with the same credentials
    await app.navigateTo.menuName('Signup / Login', 'login');
    await app.loginPage.login(emailAddress);

    //User deletes account
    await app.navigateTo.menuName('Delete Account', 'delete_account');
    await app.basePage.verifyTextToBeVisible('Account Deleted!');
    await app.basePage.clickOnButtonWithLink('Continue');

    //User attempts to log in with deleted account
    await app.navigateTo.menuName('Signup / Login', 'login')
    await app.loginPage.login(emailAddress);
    await app.loginPage.verifyTextToBeVisible('Your email or password is incorrect!');

  }) 
  })