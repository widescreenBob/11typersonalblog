
//Test all our social link
describe('social links test', function () {
  beforeEach(function () {
    cy.visit('https://widescreenbob.com/')
  })

  context('testing the twitter', function () {
    it('Checks to see if the twitter link contains the base url', function () {
      cy.get('.twitter')
        // the href 'attribute' will only ever be what the
        // literal value is on the element itself and will
        // match what was served by the <html> payload
        .should('have.attr', 'href')
        .and('include', 'twitter.com')
    })
  })

  context('testing the github', function () {
    it('Checks to see if the github link contains the base url for the site', function () {
      cy.get('.github')
        // the href 'attribute' will only ever be what the
        // literal value is on the element itself and will
        // match what was served by the <html> payload
        .should('have.attr', 'href')
        .and('include', 'github.com')
    })
  })

  context('testing the drupal', function () {
    it('Checks to see if the drupal link contains the base url for the site', function () {
      cy.get('.drupal')
        // the href 'attribute' will only ever be what the
        // literal value is on the element itself and will
        // match what was served by the <html> payload
        .should('have.attr', 'href')
        .and('include', 'drupal.org')
    })
  })

  context('testing the codepen', function () {
    it('Checks to see if the codepen link contains the base url for the site', function () {
      cy.get('.codepen')
        // the href 'attribute' will only ever be what the
        // literal value is on the element itself and will
        // match what was served by the <html> payload
        .should('have.attr', 'href')
        .and('include', 'codepen.io')
    })
  })