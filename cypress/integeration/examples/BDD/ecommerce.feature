Feature: Login and Add the phones to cart and checkout successfully

Scenario: Login with valid credentials
Given Load the ecommerce url 
When enter the valid name and gender
Then verify the two way binding example


Scenario: Add three phones to cart and checkout
Given Load the ecommerce url
When  click on shop button and add three phones to cart
When  Select country for shipping and click checkout
Then Order must places successfully and messsage should be displayed
