export type Article = {
  path: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    path: "/notes/reasoning-effort-under-the-hood/",
    title: "推理强度究竟改变了什么？",
    description: "从 DeepSeek 的公开训练方法出发，理解推理强度的通用机制，并推测闭源 GPT 可能如何实现。",
    publishedAt: "2026-09-20",
    tags: ["大模型", "推理"],
  },
  {
    path: "/notes/from-chat-to-knowledge/",
    title: "从一次 AI 对话到可复用的知识",
    description: "一套把即时讨论压缩、核验并沉淀为长期知识的方法。",
    publishedAt: "2026-09-20",
    tags: ["知识管理", "AI"],
  },
];

export const sortedArticles = [...articles].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);
