/// <reference types ="Cypress"/>

import Homepage1 from "../../pageobjects/Homepage1";

describe("My first Test Suite", function () {
  before(function () {
    cy.fixture("biodata").then(function (values) {
      this.data = values;
    });
  });

  it("My First Test Case", function () {
    const homepage1 = new Homepage1();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homepage1.getName().type(this.data.name);
    homepage1.getEmail().type(this.data.email);
    homepage1.getPassword().type(this.data.password);
    homepage1.getdateOfBirth().type(this.data.dateofbirth);
    homepage1.getBinding().should("have.value", this.data.name);
    cy.get('input[name="name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      "2"
    );
    cy.get("input[value='option3']").should("be.disabled");
    cy.get(":nth-child(2) > .nav-link").click();
    cy.selectProduct("iphone");
    cy.selectProduct("Samsung");
    cy.selectProduct("Nokia");
    cy.get('a[class="nav-link btn btn-primary"]').click();
  });
});
