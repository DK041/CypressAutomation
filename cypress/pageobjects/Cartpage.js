class Cartpage {
  finalCheckout() {
    return cy.get(":nth-child(6) > :nth-child(5) > .btn");
  }
}
export default Cartpage;
