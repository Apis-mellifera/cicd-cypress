/// <reference types="Cypress" />

describe("Response command", () => {

    it('Get request', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[type="text"]').should('have.attr', 'placeholder', "Enter a new task")
    })
})
