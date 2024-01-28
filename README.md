# ii-tech-test
Tasked to create a basic testing framework for the website, https://automationexercise.com/

Having looked at the website, I have identified the following as 6 of the most important user journeys:

  1. Register, Login, Delete Account, Attempt to Login Again
  2. View Products
  3. Place Order: Register while Checkout
  4. Place Order: Register before Checkout
  5. Place Order: Login before Checkout
  6. Verify address details in checkout page

These journeys were chosen with consideration for the business goals, it is critical to the business that their website displays all their products, user is able to add/remove products from cart and successfully checkout with the correct delivery information to complete order. 

Out of these 6 user journeys. I have decided to automate 1, 3, 4, 5. These will add the most value when automating as they cover registering and logging in as a user, which is an important but repetitive task. In addition, they also cover the most important functionalities of the site, viewing products and able to checkout which should be prioritized when creating a test framework from scratch. If any of these tests fail in a CI/CD pipeline, the release should be stopped. 

The design of the test framework has taken into consideration both maintainability and scalability. 
