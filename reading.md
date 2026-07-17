---
layout: default
title: 阅读
permalink: /reading/
description: 读过的书、文章与课程笔记。
---

<section class="page-hero">
  <div class="container">
    <h1>阅读</h1>
    <p>记录读过什么、收获是什么。在 `_reading/` 下新增 Markdown 即可。</p>
  </div>
</section>

<section class="section" style="padding-top: 0;">
  <div class="container">
    {% assign items = site.reading | sort: 'date' | reverse %}
    {% if items.size > 0 %}
    <div class="grid grid-2">
      {% for item in items %}
      <a class="card" href="{{ item.url | relative_url }}">
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary | default: item.excerpt | strip_html | truncate: 120 }}</p>
        <div class="tags">
          {% if item.category %}<span class="tag">{{ item.category }}</span>{% endif %}
          {% for tag in item.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        </div>
        <span class="card-link">阅读笔记 →</span>
      </a>
      {% endfor %}
    </div>
    {% else %}
    <div class="empty-state">
      <p>阅读列表为空。在 <code>_reading/</code> 添加第一篇笔记。</p>
    </div>
    {% endif %}
  </div>
</section>
