const {Login} = require("../fixtures/selectors.js");
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('Given I am on the product page', () => {
    beforeEach( function () {
      //cy.intercept('GET', '**/api/**', { fixture: 'apiResponse.json' });
        cy.visit('/')
    });
  it("Verify user can login", function(){
    cy.get(Login.usernameField).type(Login.username)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    
  });
  it("Verify user can sort by Name A - Z", function(){
    cy.get(Login.usernameField).type(Login.username)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Name (A to Z)').should("be.visible")
  });
  it("Verify user can change the sort sorting by Name (Z - A)", function(){
    cy.get(Login.usernameField).type(Login.username)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.get(Login.sortBtn).select('Name (Z to A)')
    cy.contains('Name (Z to A)').should("be.visible")

  });
  it("Verify that items are sorted correctly", function(){
    cy.get(Login.usernameField).type(Login.username)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.wait(5000)
    cy.get(Login.sortBtn).select('Name (Z to A)')
    cy.wait(5000)
    cy.contains('Name (Z to A)').should("be.visible")
    cy.wait(5000)
    cy.contains('Test.allTheThings() T-Shirt (Red)').should("be.visible")
    })
  })