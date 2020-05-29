---
layout: layouts/posts.njk
tags: post
title: Creating this site with eleventy part 2
post_title: Creating this site with eleventy part 2
post_image: /img/11tyBlog.jpg
date: 2020-05-27
---

### How I complicated a simple tool.

There is nothing quite like making something simple, vastly more complicated. To this end I added build tools to this site.

Here is the [Github](https://github.com/widescreenBob/11typersonalblog) repo with the code.

#### What I wanted to achieve:
- Write scss and compile this to css.
- Write modern js and run this through babel.
- Lint my scss and js.
- Use browsersync to refresh content and style changes

I am using NPM and NVM as I am familiar with it. Most of my needs were met through gulp and node packages. Here is the breakdown of the packages by the task that I used them for.

**Compiling scss:**
- sass
- gulp
- gulp-sass
- gulp-postcss
- gulp-cssnano
- browser-sync

**Processing js:**
- sourcemaps
- gulp-sourcemaps
- gulp
- gulp-babel
- browser-sync
- gulp-rename

**Lint Scss:**
- gulp-stylelint

**Lint JS:**
- gulp-eslint

For linting, there are a couple of extra configs. There is a eslintrc.json and stylelingrc.yml that provide the rules used for linting both scss and js.

#### Fun things that came up:

I approached these in the order that I have them here, not because it made the most sense, it absolutely didn't, but more because I was just trying to see what would work as it occured to me.

**Compiling scss:** Getting this working was actually pretty straight forward. I think that there is some work to be done in the gulp.js file to update it to be more gulp 4 friendly, but this went pretty smoothly.

The first thing I did was change the default file structure of eleventy to be something that I am more familiar with. I wanted my source files to be in the src directory and the compiled files in the dist file.

Eleventy comes with a unique file named eleventy.js that allows you to override some of the default settings. This is my current file:

<code>
  module.exports = function (eleventyConfig) {<br/>
    &nbsp;&nbsp;eleventyConfig.addPassthroughCopy("src/img");<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;let markdownIt = require("markdown-it");<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;let options = {<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;html: true,<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;breaks: true,<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;linkify: true<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;};<br/>
    &nbsp;&nbsp;eleventyConfig.setLibrary("md", markdownIt(options));<br/>
    &nbsp;&nbsp;return {<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;dir: {<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input: 'src',<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output: 'dist'<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;},<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;markdownTemplateEngine: 'njk',<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
  }<br/>
</code>

So this has a few things in it, first the pass through, which just tells the site I need the images in the dist folder in a comparable location. So if I add an image to src/img it will be copied to dist/img.

Next is a markdown extenstion I installed to make writing in makrdown a little easier, described [here](https://www.11ty.dev/docs/languages/markdown/).

Next we see the environment specifics that I want to use. I have redefined the default input and output to src and dist, to allow me to use the structure I am used to. Wooo. We are also declaring the templating language as nunchucks.

At this point I made a dev command to watch for changes, and I included the command from eleventy that serves the site (using their version of browsersync): <code>eleventy --serv</code>

This at first seemed to be working great, I was able to trace my src files through to the dist files. However I was not able to get css changes to auto reload. Refreshing the page worked for the changes, but that was not ideal.

I searched around the web, and didn't find a specific fix for my issue. I susepect that it might be possible to hook into eleventy's browsersync but I couldn't find any specifics on how I might go about this.  I decided to look at adding browsersync myself. After installing the packages I updated my [gulp tasks](https://github.com/widescreenBob/11typersonalblog/blob/master/gulpfile.js) with the browser-sync code.

In the package.json I now call evelenty --watch vs serve. This allows eleventy to do it's regular check for changes to files it cares about but does not boot up a local server. The gulp file defines the browsersync tasks to ensure any changes to our js or scss now trigger an update.

Magic.