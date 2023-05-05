import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Homepage from "../../../../pageobjects/Homepage";
import Productpage from "../../../../pageobjects/Productpage";
import Cartpage from "../../../../pageobjects/Cartpage";
import Purchasepage from "../../../../pageobjects/Purchasepage";
const homepage = new Homepage();
const productpage = new Productpage();
const cartpage = new Cartpage();
const purchasepage = new Purchasepage();

Given("Load the ecommerce url", () => {
  cy.visit("https://rahulshettyacademy.com/angularpractice/");
});

When("click on shop button and add three phones to cart", () => {
  homepage.getShoppage().click();
  cy.selectProduct("iphone");
  cy.selectProduct("Samsung");
  cy.selectProduct("Nokia");
  cy.get('a[class="nav-link btn btn-primary"]').click();
});
When("Select country for shipping and click checkout", () => {
  cy.contains("Checkout").click();
  cy.get("#country").type("Ind");
  cy.get(".suggestions > :nth-child(1) > li > a").click();
  purchasepage.termsandcond().click();
  purchasepage.purchase().click();
});

Then("Order must places successfully and messsage should be displayed", () => {
  purchasepage.success();
});

When("enter the valid name and gender", function () {
  homepage.getEditbox().type(this.data.name);
  homepage.getGender().select(this.data.gender);
});

Then("verify the two way binding example", function () {
  homepage.getBindingexample().should("have.value", this.data.name);
});
