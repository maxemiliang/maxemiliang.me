---
layout: page
title: Projects
permalink: /projects/
---
{% for post in site.posts%}
{% if post.projects == 1 %}
<div class="post postContent">
  <div class="postTitle">
  <a class='postLink' href="{{post.url}}">{{post.title}}</a>
  </div>
  <div class="postExt">
 {{ post.content | strip_html | truncatewords:20}}
  </div>


{% endif %}
{% endfor %}
