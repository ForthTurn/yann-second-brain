# Yann 的第二大脑

一个持续更新的公开知识网站，用来沉淀学习笔记、实践经验，以及与 AI 深入讨论后形成的理解。

## 内容方式

知识内容不是 Markdown 文档。每篇文章都是 `src/pages/notes/` 下的 Astro 页面，由语义化 HTML 组成，可以按需要加入 CSS、SVG、图表和轻量交互。

新增内容时：

1. 在 `src/pages/notes/` 创建页面，并复用 `ArticleLayout.astro`。
2. 在 `src/data/articles.ts` 登记文章元数据，使其出现在首页索引中。
3. 运行 `npm run check` 和 `npm run build`。
4. 确认内容不含敏感信息后提交到 `main`。

## 本地命令

```bash
npm install
npm run dev
npm run check
npm run build
```

## Cloudflare Pages

项目是纯静态站点，不需要服务器运行时、数据库或环境变量。

在 Cloudflare Pages 连接 GitHub 仓库时使用：

- Production branch：`main`
- Build command：`npm run build`
- Build output directory：`dist`
- Root directory：`/`

仓库只维护这一套生产配置。构建产物不会提交到 Git，由 Cloudflare Pages 在每次 `main` 更新后生成。

生产地址：<https://brain.duan19.top>
