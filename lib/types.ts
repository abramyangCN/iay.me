export interface ResumeBasics {
  name: string;
  label: string;
  picture?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: { city?: string; region?: string; countryCode?: string };
  profiles?: { network: string; username: string; url: string }[];
}

export interface ResumeWork {
  name: string;
  location?: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface ResumeProject {
  name: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
}

export interface ResumeSkill {
  name: string;
  level?: string;
  keywords?: string[];
}

export interface ResumeEducation {
  institution: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
}

export interface ResumeLanguage {
  language: string;
  fluency?: string;
}

export interface ResumeAward {
  title: string;
  date?: string;
  awarder?: string;
  summary?: string;
}

export interface ResumeInterest {
  name: string;
  keywords?: string[];
}

export interface Resume {
  basics: ResumeBasics;
  work?: ResumeWork[];
  projects?: ResumeProject[];
  skills?: ResumeSkill[];
  education?: ResumeEducation[];
  languages?: ResumeLanguage[];
  awards?: ResumeAward[];
  interests?: ResumeInterest[];
}
