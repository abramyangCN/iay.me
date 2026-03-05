import { getResume } from "@/lib/resume";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Interests } from "@/components/Interests";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "杨杨 · 简历",
  description: "高级前端工程师 — 个人简历与作品集。",
  alternates: { canonical: "https://iay.me/zh" },
};

export default async function ZhPage() {
  const resume = await getResume("zh");

  return (
    <div className="space-y-20 print:space-y-5">
      <Hero basics={resume.basics} />
      {resume.work      && <Experience items={resume.work}      title="工作经历" locale="zh" />}
      {resume.projects  && <Projects   items={resume.projects}  title="项目经历" />}
      {resume.skills    && <Skills     items={resume.skills}    title="专业技能" />}
      {resume.education && <Education  items={resume.education} languages={resume.languages} title="教育背景" locale="zh" />}
      {resume.interests && <Interests  items={resume.interests} title="兴趣爱好" />}
    </div>
  );
}
