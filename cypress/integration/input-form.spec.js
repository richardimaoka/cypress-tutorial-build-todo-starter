describe("Input form", () => {
  it("focuses input on load", () => {
    cy.visit("http://localhost:3030");
    cy.focused().should("have.class", "new-todo");
  });

  it.only("accepts input", () => {
    cy.visit("http://localhost:3030");

    cy.get(".new-todo").type("Buy Milk").should("have.value", "Buy Milk");
  });
});
