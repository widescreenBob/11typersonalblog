---
layout: layouts/posts.njk
tags: post
title: Cypress Testing
post_title: Cypress Testing
post_image: /img/cypressBlog.jpg
date: 2020-07-21
---

### Adding testing using Cypress.io

I've been wanting to dig into build tests for a while. I was excited to try cypress.io as it is open source and Javascript. I think the thing that interests me about adding tests is that it really makes you think about how the code you are writing should work.

So let us get rolling on this.

Cypress has really good [docs](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)! Woo for that.

As this had a node package, I was able to leverage our current set up to get this installed.

So without retyping the entire docs, I got the dashboard working and I tied it to my git repo for this product.

The cypress dashboard is pretty neat:
![Cypress Dash](/img/cypressDash.png){width="70%"}{.post__blog-image}

Here you can see the tests we have written (more details soon). You can also specify what browser the tests are run in. Clicking the the test name will kick it off, and open the browser while it runs the tests in real time:
![Cypress Test](/img/cypressTest.png){width="70%"}{.post__blog-image}

To add tests, you use the cypress/integration folder.
My test file lives [here](https://github.com/widescreenBob/11typersonalblog/blob/master/cypress/integration/social_test.js). Right now this test is testing all the social links, to make sure that each of them has the correct pathing.

Briefly we are telling cypress to go to our homepage to test:

<code>
describe('social links test', function () {
&nbsp;&nbsp;beforeEach(function () {
&nbsp;&nbsp;&nbsp;&nbsp;cy.visit('https://widescreenbob.com/')
&nbsp;&nbsp;})
</code>

When it gets there, we want to test our social links:

<code>
context('testing the twitter', function () {
&nbsp;&nbsp;it('Checks to see if the twitter link contains the base url', function () {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;cy.get('.twitter')<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.should('have.attr', 'href')<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.and('include', 'twitter.com')<br/>
&nbsp;&nbsp;})
})
</code>

So lets see what that looks like on a pr

