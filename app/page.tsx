import { getResume } from "@/lib/resume";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Interests } from "@/components/Interests";

export const dynamic = "force-static";

export default async function Home() {
  const resume = await getResume();

  return (
    <div className="space-y-20 print:space-y-5">
      <Hero basics={resume.basics} />
      {resume.work      && <Experience items={resume.work} />}
      {resume.projects  && <Projects   items={resume.projects} />}
      {resume.skills    && <Skills     items={resume.skills} />}
      {resume.education && <Education  items={resume.education} languages={resume.languages} />}
      {resume.interests && <Interests  items={resume.interests} />}
    </div>
  );
}
