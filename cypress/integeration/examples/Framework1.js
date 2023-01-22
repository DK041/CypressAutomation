/// <reference types ="Cypress"/>
import Homepage from "../../pageobjects/Homepage";
import Productpage from "../../pageobjects/Productpage";
import Cartpage from "../../pageobjects/Cartpage";
import Purchasepage from "../../pageobjects/Purchasepage";
import Homepage1 from "../../pageobjects/Homepage1";
describe("Test Suite", function () {
  beforeEach(function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.fixture("example").then(function (database) {
      this.data = database;
    });
  });
  it("Framework test case", function () {
    const homepage = new Homepage();
    const productpage = new Productpage();
    const cartpage = new Cartpage();
    const purchasepage = new Purchasepage();
    // cy.visit("https://rahulshettyacademy.com/angularpractice/");

    homepage.getEditbox().type(this.data.name);
    homepage.getGender().select(this.data.gender);

    //check
    homepage.getBindingexample().should("have.value", this.data.name);
    homepage.getEditbox().should("have.attr", "minlength", 2);
    homepage.getEntrpreneurbutton().should("be.disabled");
    homepage.getShoppage().click();

    this.data.productname.forEach((element) => cy.selectProduct(element));
    productpage.checkout().click();
    var sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, $list) => {
        const price = $el.text();
        var amount = price.split(" ");
        sum = Number(sum) + Number(amount[1]);
      })
      .then(function () {
        const totalprice = "₹. " + sum;
        cy.get("tr td:nth-child(5) strong").then(function (element) {
          const totalamount = element.text();
          cy.log(totalamount);
          expect(totalamount).to.equal(totalprice);
        });
      });

    cy.contains("Checkout").click();
    cy.get("#country").type("Ind");
    cy.get(".suggestions > :nth-child(1) > li > a").click();
    purchasepage.termsandcond().click();
    purchasepage.purchase().click();
    purchasepage.success();
  });

  it("Framework test2 case", function () {
    const homepage1 = new Homepage1();
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
