# DargonLee.github.io

Harlans (DargonLee) 的个人网站：公开简历、作品集、阅读笔记与问题知识库。

线上地址：[https://dargonlee.github.io](https://dargonlee.github.io)

> 仓库职责说明见 [`AGENTS.md`](./AGENTS.md)。

## 技术栈

- Jekyll + GitHub Pages
- 主题底座：`pages-themes/cayman`（remote theme）
- 自定义深色 UI（Grok 风格氛围）
- GitHub Actions 自动构建部署

## 本地预览

需要 Ruby 3+ 与 Bundler。

```bash
# 安装依赖
bundle install

# 启动本地服务（推荐，支持自动刷新）
bundle exec jekyll serve --livereload

# 或仅构建
bundle exec jekyll build
```

打开 [http://127.0.0.1:4000](http://127.0.0.1:4000)。

## 写内容

| 类型 | 位置 |
|------|------|
| 项目 | `_data/projects.yml` |
| 技能 | `_data/skills.yml` |
| 知识库 | `_knowledge/*.md` |
| 书架书目 | `_data/books.yml` + 封面 `assets/images/books/` |
| 本地电子书 | `books/`（gitignore，不部署） |
| 阅读笔记 | `_reading/*.md` |
| 博客 | `_posts/YYYY-MM-DD-title.md` |

## CI/CD

推送到 `main` 后，工作流 [`.github/workflows/pages.yml`](./.github/workflows/pages.yml) 会：

1. 使用官方 `actions/jekyll-build-pages` 构建站点  
2. 上传 Pages artifact  
3. 部署到 GitHub Pages  

**首次启用请确认：**

仓库 → **Settings** → **Pages** → **Build and deployment** → Source 选择 **GitHub Actions**。

## 许可

内容归作者所有；主题与依赖遵循各自开源协议。
