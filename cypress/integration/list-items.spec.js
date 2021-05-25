describe("List items", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it("properly displays completed items", () => {
    cy.get(".todo-list li")
      .filter(".completed")
      .should("have.length", 1)
      .and("contain", "Eggs")
      .find(".toggle")
      .should("be.checked");
  });

  it("Shows remaining todos in the footer", () => {
    cy.get(".todo-count").should("contain", 3);
  });

  it.only("Removes a todo", () => {
    cy.route({
      url: "/api/todos/1",
      method: "DELETE",
      status: 200,
      response: {},
    });

    const list = cy.get(".todo-list li");

    list.first().find(".destroy").invoke("show").click();

    list.should("have.length", 3).and("not.contain", "Milk");
  });
});
