---
layout: layouts/posts.njk
tags: post
title: Updating my gulp tasks
post_title: Updating my gulp tasks
post_image: /img/gulpBlog.jpg
date: 2020-07-11
---

### Updating my gulp tasks to gulp 4 format.

I have a tendancy to set and forget build tools. They work, or seem to, why is a question for the philosophers. However, with the change from gulp 3 to 4 I was keen to make sure I had at least a basic understanding of what that looked like, and make sure that I was taking advantage of what gulp 4 could offer.

One of the most useful features is the ability to run tasks in series, or in parallel. The more complex or larger the build, the longer build tasks can take. Tasks that can occur at the same time should now use the parallel syntax, allowing us to reduce the build time.

<code>
gulp.parallel('scripts', 'styles')
</code>

Series, by contrast, allows you to set the order of the tasks so you can ensure one is completed before the next is run.

<code>
gulp.series('scripts', 'styles')
</code>

So interesting, it seems like I was partly there. I was using the parallel and series syntax. There was an opportunity for me to use named functions vs the node 3.9 gulp.task declarations I was using.

My old task:
<code>
gulp.task('min-image', function minImageTask() {
&nbsp;&nbsp;return gulp
&nbsp;&nbsp;&nbsp;&nbsp;.src('src/img/*')
&nbsp;&nbsp;&nbsp;&nbsp;.pipe(imagemin())
&nbsp;&nbsp;&nbsp;&nbsp;.pipe(gulp.dest('dist/img'));
});
</code>

The updated task:
<code>
function minImageTask() {
&nbsp;&nbsp;return gulp
&nbsp;&nbsp;&nbsp;&nbsp;.src('src/img/*')
&nbsp;&nbsp;&nbsp;&nbsp;.pipe(imagemin())
&nbsp;&nbsp;&nbsp;&nbsp;.pipe(gulp.dest('dist/img'));
}
<br/>
exports.images = minImageTask;
</code>

Some things to note, any exported functions will be registered into gulp's task system. So above we are exporting images, and in our package.json file we have:
<code>
scripts {
&nbsp;&nbsp;"images": "gulp images",
}
</code>

So you can see we have access to the task in a similar way that we did in gulp 3.9.

For my build task which is the only complex multitask I added a const to store the task:

<code>
const build = gulp.parallel(lintScss, lintJs, js, css, minImageTask);
<br/>
exports.build = build;
</code>