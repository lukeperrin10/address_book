
describe ('User can toggle visibility of form', () => {

    before(() => {
        cy.visit('http://localhost:3002')
    })

    it('clicking the "add contact" button', () => {
        cy.get('#new-contact').should('not.be.visible')
        cy.get('#add-contact').click()
        cy.get('#new-contact').should('be.visible')
        cy.get('#add-contact').click()
        cy.get('#new-contact').should('not.be.visible')
    })

})