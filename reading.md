---
layout: default
title: 阅读
permalink: /reading/
description: 个人书架：正在读、已读与未读清单。
---

<section class="page-hero">
  <div class="container">
    <h1>书架</h1>
    <p>像摆一排书那样记录进度：正在读、已读、未读。封面与书目在 <code>_data/books.yml</code>，本地电子书放在 <code>books/</code>。</p>
    {% assign all_books = site.data.books %}
    {% assign reading_books = all_books | where: "status", "reading" %}
    {% assign read_books = all_books | where: "status", "read" %}
    {% assign unread_books = all_books | where: "status", "unread" %}
    <div class="shelf-stats" aria-label="阅读统计">
      <span class="shelf-stat"><strong>{{ reading_books.size }}</strong> 正在读</span>
      <span class="shelf-stat"><strong>{{ read_books.size }}</strong> 已读</span>
      <span class="shelf-stat"><strong>{{ unread_books.size }}</strong> 未读</span>
      <span class="shelf-stat shelf-stat--muted">共 {{ all_books.size }} 本</span>
    </div>
  </div>
</section>

{% assign shelves = "reading|正在读|此刻翻开的书,read|已读|读完并沉淀笔记的书,unread|未读|想读与排队中的书" | split: "," %}

{% for shelf in shelves %}
  {% assign parts = shelf | split: "|" %}
  {% assign shelf_status = parts[0] %}
  {% assign shelf_title = parts[1] %}
  {% assign shelf_desc = parts[2] %}
  {% assign shelf_books = site.data.books | where: "status", shelf_status %}

<section class="section shelf-section" style="padding-top: 0;">
  <div class="container">
    <div class="shelf-head">
      <div>
        <h2 class="shelf-title">
          <span class="shelf-dot shelf-dot--{{ shelf_status }}" aria-hidden="true"></span>
          {{ shelf_title }}
        </h2>
        <p class="shelf-desc">{{ shelf_desc }}</p>
      </div>
      <span class="shelf-count">{{ shelf_books.size }} 本</span>
    </div>

    <div class="bookshelf">
      <div class="bookshelf-row">
        {% if shelf_books.size > 0 %}
          {% for book in shelf_books %}
            {% include book-card.html book=book %}
          {% endfor %}
        {% else %}
          <div class="bookshelf-empty">这一层还空着，去 <code>_data/books.yml</code> 加一本吧。</div>
        {% endif %}
      </div>
      <div class="bookshelf-plank" aria-hidden="true">
        <div class="bookshelf-plank-edge"></div>
      </div>
    </div>
  </div>
</section>
{% endfor %}

<section class="section" style="padding-top: 0;">
  <div class="container">
    <div class="section-head" style="text-align: left; margin-bottom: 1.25rem;">
      <h2 style="font-size: 1.35rem;">阅读笔记</h2>
      <p style="margin: 0.35rem 0 0; max-width: none;">有深度摘录与复盘的条目；书卡上带「阅读笔记 →」的也可点进。</p>
    </div>
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
      <p>暂无笔记。在 <code>_reading/</code> 添加 Markdown 即可。</p>
    </div>
    {% endif %}
  </div>
</section>
