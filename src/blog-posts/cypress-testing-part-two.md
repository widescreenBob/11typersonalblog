---
layout: layouts/posts.njk
tags: post
title: Cypress Testing Part Two
post_title: Cypress Testing 2
post_image: /img/cypressBlog.jpg
date: 2020-08-10
---

### Upgrading Our Testing

When we left off we had set up cypress testing. Our test was against our live site and was testing at the point of our pr (if we had recorded the test).

Our goal however is to test our code before it goes live, which is probably more useful.

So back to our cypress [docs](https://www.cypress.io/blog/2019/11/20/drastically-simplify-your-testing-with-cypress-github-action/). This describes what we want to do pretty accurately.

What we need to do is add a github action here: [.github/workflows/main.yml](https://github.com/widescreenBob/11typersonalblog/blob/master/.github/workflows/main.yml)

You can see our action takes three steps, first checkout as described by the cypres docs.

Step two:
<code>
uses: bahmutov/npm-install@v1
&nbsp;&nbsp;with:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useLockFile: false
</code>

This is the part that I was erroring on the most, what this is doing is installing our sites node packages. This allows the build to use the site for testing. I referenced this [codebase](https://github.com/cypress-io/github-action/blob/master/.github/workflows/main.yml) to find an example that better fit my need.

Step three runs the cypress tests that we have defined.

Here is what the successful test looks like in github:
![Cypress Test](/img/cypresstestGH.png){width="70%"}{.post__blog-image}
You can see that the tasks defined in our actions reflected here, and importantly that it passed.

Ok, so now we have a way to test our code, against a temporary site pre merge. Now we can start expanding our testing.
