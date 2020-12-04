---
layout: layouts/posts.njk
tags: post
title: CSS Custom Properties
post_title: CSS Custom Properties
post_image: /img/cssPropBlog.jpg
post_teaser_image: /img/cssPropBlog4x3.jpg
date: 2020-09-13
post_teaser: In this post I look at expanding on some CSS Custom Properties knowledge.
---

### Digging into CSS Custom Properties.

Custom properties or CSS variables have been around for a few years now. I've used them, almost exclusively just to use them, but lets find out how to get more out of this exciting tool.

Why can't I just use my SASS or SCSS variables? They work right?

Sure they do, if you are using the same preprocessor everywhere. It is likely these days, that we will work on projects that use a lighter build stack, maybe just css. Custom Properties are just css, so they don't need to be reinterpreted. This also means that they are available to be altered by JS. Woot. That's a boon.

So far our advantages are, preprocessor agnostic, and accessible to js. Still feel like you can live with out them?

Ok, what about doing less work?

Lets look at this:

<code>
:root {<br/>
&nbsp;&nbsp;  --color-text: blue;<br/>
&nbsp;&nbsp;  --color-bg: white;<br/>
}<br/>
section {<br/>
&nbsp;&nbsp;  color: var(--color-text);<br/>
&nbsp;&nbsp;  background: var(--color-bg);<br/>
}<br/>
.dark {<br/>
&nbsp;&nbsp;  --color-text: white;<br/>
&nbsp;&nbsp;  --color-bg: black;<br/>
}
</code>

vs. a similar solution with some traditional scss vars:

<code>
$site-bg: white;<br/>
$site-text: blue;<br/>
$dark-site-bg: black;<br/>
$dark-site-text: white;<br/>
section {<br/>
&nbsp;&nbsp;  color: $site-text;<br/>
&nbsp;&nbsp;  background: $site-bg;<br/>
}<br/>
.dark {<br/>
&nbsp;&nbsp;  color: $dark-site-text;<br/>
&nbsp;&nbsp;  background: $dark-site-bg;<br/>
}
</code>

So the difference here is that we aren't having to redeclare properties, or define a bunch of
variables to account for variations. We just need to redefine the variables, and they'll remain scoped to just the 'dark' class. This is a significant advantage over our scss variable as our change is now 'dom aware'.  Hooray.

Lets look at an example of how this would work with breakpoints. I found this [example](https://codepen.io/Ansimorph/pen/ORPOWA/) by Bjorn Ganslandt. Here we can see how much simpler this approach is than how we might handle it with scss variables. We don't need to add mixins that are slightly more complex to trace, or we don't need to redefine the same breakpoint variants in each component.