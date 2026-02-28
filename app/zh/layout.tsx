import type { ReactNode } from "react";

// Override lang attribute for the Chinese subtree
export default function ZhLayout({ children }: { children: ReactNode }) {
  return <div lang="zh-Hans">{children}</div>;
}
