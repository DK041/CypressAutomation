class Homepage1 {
  getName() {
    return cy.get("input[name='name']:nth-child(2)");
  }
  getEmail() {
    return cy.get('input[name="email"]');
  }
  getPassword() {
    return cy.get('input[type="password"]');
  }
  getdateOfBirth() {
    return cy.get('input[type="date"]');
  }
  getBinding() {
    return cy.get('input[name="name"]:nth-child(1)');
  }
}
export default Homepage1;
