import type { Resume } from "./types";

const RESUME_URL =
  process.env.RESUME_JSON_URL ||
  "https://raw.githubusercontent.com/abramyangCN/resume/main/resume.json";

const RESUME_ZH_URL =
  process.env.RESUME_ZH_JSON_URL ||
  "https://raw.githubusercontent.com/abramyangCN/resume/main/resume.zh.json";

export async function getResume(locale: "en" | "zh" = "en"): Promise<Resume> {
  const url = locale === "zh" ? RESUME_ZH_URL : RESUME_URL;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch resume (${locale}): ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export function formatDateRange(startDate?: string, endDate?: string, locale: "en" | "zh" = "en"): string {
  if (!startDate) return "";
  const present = locale === "zh" ? "至今" : "Present";
  return `${formatDate(startDate, locale)} – ${endDate ? formatDate(endDate, locale) : present}`;
}

function formatDate(dateStr: string, locale: "en" | "zh" = "en"): string {
  const [year, month] = dateStr.split("-");
  if (!month) return year;
  if (locale === "zh") return `${year} 年 ${parseInt(month, 10)} 月`;
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}
