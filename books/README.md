# 图书文件

此目录存放电子书源文件，方便备份与后续新增图书。

## 约定

| 内容 | 位置 |
|------|------|
| 电子书本体（epub / pdf / mobi） | `books/`（本目录，随仓库提交） |
| 封面图 | `assets/images/books/`（会随站点发布） |
| 书目元数据 | `_data/books.yml` |
| 阅读笔记 | `_reading/*.md` |

`_config.yml` 已将 `books/` 排除出 Jekyll 构建，**站点页面不会提供电子书下载**；文件仅存在于仓库中。

## 新增一本书

1. 把电子书放进本目录，命名建议：`书名-作者.ext`
2. 导出封面到 `assets/images/books/xxx.jpg`（约 3:4 竖图最佳）
3. 在 `_data/books.yml` 追加一条：

```yaml
- id: my-book
  title: 书名
  author: 作者
  status: unread   # reading | read | unread
  cover: /assets/images/books/xxx.jpg
  year: 2024
  tags: [标签]
  blurb: 一句话介绍
  file: 书名-作者.epub
  # note: /reading/my-book-notes/   # 有笔记时再填
```

4. 本地预览：`bundle exec jekyll serve`
