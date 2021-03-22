

describe('user can create a contact', () => {
    it('test', () => {
        cy.visit('http://localhost:3002')
        cy.get('#add-contact').click()
        cy.get('#first_name').type('Luke')
        cy.get('#last_name').type('Perrin')
        cy.get('#telephone').type('0731234567')
        cy.get('#company').type('Student')
        cy.get('#twitter').type('welsh_thor')
        
    })


})