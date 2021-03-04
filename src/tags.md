---
title: "Posts"
layout: 'layouts/feed.njk'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'rss']
permalink: '/category/{{ tag | slug }}/'
---
