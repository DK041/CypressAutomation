class Purchasepage {
  termsandcond() {
    return cy.get('label[for="checkbox2"]');
  }
  purchase() {
    return cy.get('input[value="Purchase"]');
  }
  success() {
    return cy.get(".alert").then(function (element) {
      const text = element.text();
      expect(text).contains("Success");
    });
  }
}
export default Purchasepage;
