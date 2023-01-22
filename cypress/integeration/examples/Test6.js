/// <reference types ="Cypress"/>

describe("My sixth Test Suite", function () {
  it("My sixth Test Case web table", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get(".table-display tr td:nth-child(2)").each(($el, index, $list) => {
      let text = $el.text();
      if (text.includes("SoapUI")) {
        cy.get(".table-display tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            let priceText = price.text();
            expect(priceText).to.equal("35");
          });
      }
    });
  });
});
