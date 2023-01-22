class Productpage {
  checkout() {
    return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
  }
}
export default Productpage;
