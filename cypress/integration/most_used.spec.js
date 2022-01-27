/// <reference types="Cypress" />

describe('Tests related to most used strategies', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it.only('Strategy 1 & 2', () => {

        // Strategy 1: ID
        cy.get('[class$=form_input]:eq(0)').type('standard_user')
        cy.get('#password').type('secret_sauce')

        // Strategy 2: Class
        cy.get('.submit-button').click()

    })

    it('Strategy 3, 4 & 6', () => {

        // Strategy 4: Combination of tag-name & attribute
        cy.get('input[placeholder=Username]').type('standard_user')

        // Strategy 5: Attribute Equals
        cy.get('[placeholder=Password]').type('secret_sauce')

        // Strategy 6: Multiple Attributes
        cy.get('[type=submit][name=login-button]').click()
        
    })
})