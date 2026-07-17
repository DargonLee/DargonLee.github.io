---
layout: default
title: 首页
description: Harlans (DargonLee) 个人主页 — iOS、AI 与工程实践。
---

<section class="hero">
  <div class="container">
    <div class="eyebrow">
      <span class="eyebrow-dot" aria-hidden="true"></span>
      Open to collaborate · Building in public
    </div>
    <img
      class="hero-avatar"
      src="{{ site.author.avatar }}"
      alt="{{ site.author.name }}"
      width="128"
      height="128"
    >
    <h1>{{ site.author.name }}</h1>
    <p class="hero-lead">
      iOS 开发者 · AI 应用爱好者 · 越狱工具与跨平台实践者。<br>
      这里是我的个人简历站：项目、阅读、踩坑复盘与持续更新的知识库。
    </p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer">访问 GitHub</a>
      <a class="btn btn-ghost" href="#projects">查看项目</a>
      <a class="btn btn-ghost" href="{{ '/knowledge/' | relative_url }}">知识库</a>
    </div>
  </div>
</section>

<section class="section section-muted" id="about">
  <div class="container">
    <div class="section-head">
      <h2>关于我</h2>
      <p>
        多年 iOS 开发经验，关注高性能应用、调试体系与 AI 能力落地。
        喜欢把前沿技术收成可复用的工具，也愿意把踩坑过程写成文档。
      </p>
    </div>
  </div>
</section>

<section class="section" id="skills">
  <div class="container">
    <div class="section-head">
      <h2>核心技能</h2>
      <p>从移动端到自动化，从调试工具到 AI 集成。</p>
    </div>
    <div class="grid grid-3">
      {% for skill in site.data.skills %}
      <article class="card">
        <h3>{{ skill.name }}</h3>
        <p>{{ skill.summary }}</p>
        {% if skill.tags %}
        <div class="tags">
          {% for tag in skill.tags %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section-muted" id="projects">
  <div class="container">
    <div class="section-head">
      <h2>代表项目</h2>
      <p>部分开源与实验项目，完整列表见 <a href="{{ '/projects/' | relative_url }}">项目页</a>。</p>
    </div>
    <div class="grid grid-3">
      {% for project in site.data.projects %}
        {% include project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="section" id="explore">
  <div class="container">
    <div class="section-head">
      <h2>站点导航</h2>
      <p>把个人站做成可长期沉淀的知识资产。</p>
    </div>
    <div class="grid grid-3">
      <a class="card" href="{{ '/knowledge/' | relative_url }}">
        <h3>知识库</h3>
        <p>问题排查、方案选型、调试笔记与可复用经验。</p>
        <span class="card-link">进入知识库 →</span>
      </a>
      <a class="card" href="{{ '/reading/' | relative_url }}">
        <h3>书架</h3>
        <p>正在读、已读、未读分层陈列，附笔记与摘录入口。</p>
        <span class="card-link">走进书架 →</span>
      </a>
      <a class="card" href="{{ '/blog/' | relative_url }}">
        <h3>博客</h3>
        <p>阶段性总结、发布说明与更完整的长文内容。</p>
        <span class="card-link">阅读博客 →</span>
      </a>
    </div>
  </div>
</section>

<section class="cta-band section-muted">
  <div class="container">
    <h2>一起做下一代移动与 AI 产品</h2>
    <p>欢迎通过 GitHub 交流合作、提 Issue，或一起打磨开源工具。</p>
    <a class="btn btn-primary" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer">
      联系我 · GitHub
    </a>
  </div>
</section>
