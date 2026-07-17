---
layout: default
title: 博客
permalink: /blog/
description: 阶段性总结与长文。
---

<section class="page-hero">
  <div class="container">
    <h1>博客</h1>
    <p>使用 Jekyll `_posts/` 发布文章，文件名格式：`YYYY-MM-DD-title.md`。</p>
  </div>
</section>

<section class="section" style="padding-top: 0;">
  <div class="container">
    {% if site.posts.size > 0 %}
    <div class="grid grid-2">
      {% for post in site.posts %}
      <a class="card" href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
        <div class="meta" style="margin-top: 0.85rem; margin-bottom: 0;">
          <span>{{ post.date | date: "%Y-%m-%d" }}</span>
        </div>
        <span class="card-link">阅读全文 →</span>
      </a>
      {% endfor %}
    </div>
    {% else %}
    <div class="empty-state">
      <p>还没有博客文章。在 <code>_posts/</code> 创建第一篇即可。</p>
    </div>
    {% endif %}
  </div>
</section>
