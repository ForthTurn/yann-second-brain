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
    path: "/notes/dns-registration-delegation-and-troubleshooting/",
    title: "从域名注册到 DNS 解析：一套完整的工作原理与排障方法",
    description: "理解注册商、注册局、DNS 委派、递归和权威解析、CNAME Flattening，以及 DNS 异常的分层定位。",
    publishedAt: "2026-10-29",
    tags: ["DNS", "网络基础设施", "域名注册", "Cloudflare", "故障排查"],
  },
  {
    path: "/notes/web-pki-trust-and-revocation/",
    title: "Web PKI 的全局信任困境：从 emSign 事件到 certifi 的撤销代价",
    description: "分析公共 CA 的全局签发权、被攻破中间 CA 的影响、CT 与撤销机制，以及 certifi #439 暴露的安全性和可用性冲突。",
    publishedAt: "2026-10-21",
    tags: ["Web PKI", "TLS", "证书撤销", "Python", "基础设施安全"],
  },
  {
    path: "/notes/claude-code-prompt-assembly/",
    title: "Claude Code 2.1.299：System Prompt 装配链分析",
    description: "研究提示词动态装配、前缀缓存、工具契约、子代理和长期记忆的技术设计。",
    publishedAt: "2026-10-21",
    tags: ["Claude Code", "Agent Runtime", "Prompt Cache", "系统架构"],
  },
  {
    path: "/notes/seven-hash-collisions/",
    title: "七种哈希同时碰撞，能严格证明它存在吗？",
    description: "从一张修改 PDF 的梗图出发，用鸽巢原理证明共同碰撞必然存在，并分清存在性、搜索难度与第二原像问题。",
    publishedAt: "2026-09-20",
    tags: ["密码学", "数学", "哈希"],
  },
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
