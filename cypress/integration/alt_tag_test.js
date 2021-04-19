//Test all images
describe('alt tags for image', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('Is there an alt tag on images', function () {
    cy.get('img').each($el => {
      cy.wrap($el).should('have.attr', 'alt')
      .then(alttext => {
        expect(alttext.length).not.to.be.greaterThan(160);
      });
    })
  })

})