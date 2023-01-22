/// <reference types ="Cypress"/>

describe("Test Suite", function () {
  it("First Test Case", function () {
    cy.visit("https://www.instagram.com/");
    cy.get(":nth-child(1) > .x1i10hfl > ._acan > ._aacl").click();
    cy.get('input[name="username"]').type("abc@gmail.com");
    cy.get('input[type="password"]').type("password");
    cy.get("._abc2 > :nth-child(3)").click();
    cy.get("#slfErrorAlert").should("include.text", "Sorry, your password");
  });
});
