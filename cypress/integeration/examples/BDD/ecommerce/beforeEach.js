before(function () {
  cy.fixture("example").then(function (database) {
    this.data = database;
  });
});
