---
layout: default
title: 知识库
permalink: /knowledge/
description: 问题复盘、调试笔记与可复用经验知识库。
---

<section class="page-hero">
  <div class="container">
    <h1>知识库</h1>
    <p>遇到问题后的总结文档：现象、排查、结论与可复用方案。在 `_knowledge/` 下新增 Markdown 即可。</p>
  </div>
</section>

<section class="section" style="padding-top: 0;">
  <div class="container">
    {% assign docs = site.knowledge | sort: 'date' | reverse %}
    {% if docs.size > 0 %}
    <div class="grid grid-2">
      {% for doc in docs %}
      <a class="card" href="{{ doc.url | relative_url }}">
        <h3>{{ doc.title }}</h3>
        <p>{{ doc.summary | default: doc.excerpt | strip_html | truncate: 120 }}</p>
        <div class="tags">
          {% if doc.category %}<span class="tag">{{ doc.category }}</span>{% endif %}
          {% for tag in doc.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        </div>
        <span class="card-link">阅读 →</span>
      </a>
      {% endfor %}
    </div>
    {% else %}
    <div class="empty-state">
      <p>知识库暂无条目。在 <code>_knowledge/</code> 添加第一篇文档开始沉淀。</p>
    </div>
    {% endif %}
  </div>
</section>
