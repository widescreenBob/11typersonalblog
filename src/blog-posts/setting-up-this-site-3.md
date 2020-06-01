---
layout: layouts/posts.njk
tags: post
title: Creating this site with eleventy part 3
post_title: Creating this site with eleventy part 3
post_image: /img/11tyBlog.jpg
date: 2020-05-31
---

### Images and image sizes.

In the previous post I talked about passing images through from my src folder to my dist folder. This is a neat option that 11ty lets us do for files that we need to provide for our site, but don't need to act on.

When building the site, I looked around for a way to auto generate a src set of images to allow the site to serve images sized to the need of the person viewing the page. I was however unable to find a way to create the required images.

As a stop gap, until I can find the solution I want to get to I have added [imagemin](https://www.npmjs.com/package/gulp-imagemin) to my build process.

To get this working, I added a image-min task to the [gulp.js](https://github.com/widescreenBob/11typersonalblog/blob/master/gulpfile.js) file. I also added this task to the build task, I think that this is likely better than adding it to the watch task, as I don't need this happening a lot. The image optimization will need to be called prior to a commit, but it should be clear if I forget as the request will 404.