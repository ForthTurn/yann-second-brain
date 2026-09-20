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
