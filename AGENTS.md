# AGENTS.md — DargonLee.github.io

## 仓库职责与目的

本仓库是 **Harlans (DargonLee) 的个人网站**（GitHub Pages / Jekyll）。

它的目标不是单一的技术博客，而是一个 **全面表现自己的个人站点 / 公开简历站**，用来持续沉淀与展示：

- **我是谁**：角色、方向、联系入口
- **我做过什么**：项目、工具、作品集
- **我读过什么**：书籍、文章、课程与笔记
- **我解决过什么**：问题复盘、调试清单、可复用知识库文档
- **我正在想什么**：博客长文、阶段性总结

内容 **包括但不限于技术**：工程实践、工具链、AI、产品思考、学习路径都可以写进这里。

一句话：

> 把个人站做成可长期维护的「简历 + 作品集 + 知识库」。

---

## 技术栈

| 项 | 选择 |
|---|---|
| 站点引擎 | Jekyll |
| 主题底座 | `pages-themes/cayman`（remote_theme；视觉已自定义覆盖） |
| 托管 | GitHub Pages |
| CI/CD | `.github/workflows/pages.yml`（push 到 `main` 自动构建部署） |
| 样式 | `assets/css/main.css`（深色、Grok 风格氛围光与玻璃卡片） |

---

## 目录约定（写内容看这里）

```text
index.md                 # 首页
projects.md              # 项目列表页
knowledge.md             # 知识库索引
reading.md               # 阅读索引
blog.md                  # 博客索引

_data/
  nav.yml                # 导航
  projects.yml           # 项目数据
  skills.yml             # 技能数据
  books.yml              # 书架书目（已读 / 未读 / 正在读）

_posts/                  # 博客文章  YYYY-MM-DD-title.md
_knowledge/              # 知识库文档（collection）
_reading/                # 阅读笔记（collection）
books/                   # 本地电子书（gitignore，不部署）
assets/images/books/     # 图书封面图

_layouts/                # 页面布局
_includes/               # 导航 / 页脚等片段
assets/                  # CSS / JS
```

### 新增内容指南

1. **新项目**：编辑 `_data/projects.yml`，必要时更新首页文案。
2. **新技能**：编辑 `_data/skills.yml`。
3. **知识库文档**：在 `_knowledge/` 新建 Markdown，写 front matter：
   ```yaml
   ---
   title: 标题
   summary: 一句话摘要
   date: YYYY-MM-DD
   category: iOS
   tags: [Debug]
   ---
   ```
4. **书架新书**：
   - 电子书放 `books/`（已被 gitignore，不提交）
   - 封面放 `assets/images/books/`
   - 在 `_data/books.yml` 追加条目，`status` 为 `reading` | `read` | `unread`
5. **阅读笔记**：在 `_reading/` 新建 Markdown；有笔记时在 `books.yml` 填 `note` 路径。
6. **博客**：在 `_posts/` 使用 `YYYY-MM-DD-slug.md`。

---

## 本地开发

```bash
bundle install
bundle exec jekyll serve --livereload
```

浏览器打开 `http://127.0.0.1:4000`。

只构建不启动服务：

```bash
bundle exec jekyll build
```

---

## 部署

- 推送到 **`main`** 会触发 GitHub Actions：Jekyll 构建 → 上传 artifact → 部署 Pages。
- 仓库 Settings → Pages → **Source 需选择 GitHub Actions**（首次启用时配置一次）。
- 线上地址：`https://dargonlee.github.io`

---

## 给 Agent / 协作者的约束

1. **保持单首页入口**：不要再恢复与 `index.md` 冲突的根级 `index.html`。
2. **内容优先可维护**：项目与技能尽量走 `_data/`，避免在多个页面复制粘贴。
3. **视觉一致性**：深色背景、克制高光、玻璃卡片；新增页面复用现有 class（`card` / `section` / `prose`）。
4. **中文为主**，专有名词可保留英文。
5. **提交信息简洁**，说明「为什么」而不是堆文件列表。
6. 不把密钥、token、私人联系方式硬编码进仓库。

---

## 成功标准

- 访客能在 30 秒内理解作者方向与代表项目
- 作者能用「新增一个 Markdown / 改一行 YAML」扩展内容
- `main` 推送后自动上线，本地可 `jekyll serve` 预览
