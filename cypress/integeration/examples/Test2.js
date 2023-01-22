/// <reference types ="Cypress"/>

describe("My Second Test Suite", function () {
  it("My Second Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck();
  });
});
