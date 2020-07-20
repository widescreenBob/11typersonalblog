describe('social links test', () => {
  it('Visits the Homepage', () => {
    cy.visit('https://widescreenbob.com/')
    cy.contains('Read Tobias\' tweets').click()
    //cy.get('.header__social-item')
    //cy.url().should('include', '/twitter.com')
  })
})
