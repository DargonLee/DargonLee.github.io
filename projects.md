---
layout: default
title: 项目
permalink: /projects/
description: Harlans (DargonLee) 的开源与实验项目列表。
---

<section class="page-hero">
  <div class="container">
    <h1>项目</h1>
    <p>代表作与持续迭代的工具。数据来自 `_data/projects.yml`，方便后续维护。</p>
  </div>
</section>

<section class="section" style="padding-top: 0;">
  <div class="container">
    <div class="grid grid-3">
      {% for project in site.data.projects %}
        {% include project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>
