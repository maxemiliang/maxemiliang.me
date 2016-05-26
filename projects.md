---
layout: page
title: Projects
permalink: /projects/
---
<div class="wrapper">
{% for post in site.posts%}
{% if post.projects == 1 %}
<div class="post postContent">
  <!--<img class="round-img" src="{{post.img}}" style="float:left" alt="Post image">-->
  <div class="postTitle">
  <a class='postLink' href="{{post.url}}">{{post.title}}</a>
  </div>
  <div class="postExt">
  <br>
 {{ post.content | strip_html | truncatewords:20}}
  </div>
  </div>


{% endif %}
{% endfor %}
<br>
<p>And more to be added soon!</p>

</div>
