---
title: "Posts"
intro: "These are some posts I've written about what I'm currently learning about"
layout: "layouts/feed.njk"
pagination:
  data: collections.blog
  size: 2
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
---