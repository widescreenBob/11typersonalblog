describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://widescreenbob.com/')
    cy.contains('Creating this site with eleventy').click()
    cy.url().should('include', '/blog-posts/')
  })
})