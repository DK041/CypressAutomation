/// <reference types ="Cypress"/>

describe("My Fifth Test Suite", function () {
  it("My fifth Test Case window handling", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.go("back");
  });
});
