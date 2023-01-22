class Homepage {
  getEditbox() {
    return cy.get("input[name='name']:nth-child(2)");
  }
  getGender() {
    return cy.get("select");
  }
  getBindingexample() {
    return cy.get("input[name='name']:nth-child(1)");
  }
  getEntrpreneurbutton() {
    return cy.get("#inlineRadio3");
  }
  getShoppage() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}
export default Homepage;
