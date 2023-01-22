/// <reference types ="Cypress"/>

describe("My Third Test Suite", function () {
  it("My third Test Case dropdown", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("select").select("option3");
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.get('[value="radio2"]').check().should("be.checked");
  });
});
