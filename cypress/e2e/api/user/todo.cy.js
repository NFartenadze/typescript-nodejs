/// <reference types="cypress" />

describe("Testing User Endpoints", () => {
  it("should receive all users", () => {
    cy.request("GET", "/users").then((response) => {
      //working on it
    });
  });
});
