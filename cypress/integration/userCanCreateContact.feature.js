

describe('user can create a contact', () => {
    beforeEach('test', () => {
        cy.visit('http://localhost:3002')
        cy.get('#add-contact').click()
        cy.get('#firstName').type('Luke')
        cy.get('#lastName').type('Perrin')
        cy.get('#telephone').type('0731234567')
        cy.get('#company').type('Student')
        cy.get('#email').type('lukeperrin27@gmail.com')
        cy.get('#submit').click()
    })

    it('displays a name of the new contact', () => {
        cy.get('#contact-list').should('contain','Luke')
    })

    it('displays the telephone number for the new contact', () => {
        cy.get('#contact-list').should('contain','0731234567')
    })

        
    


})