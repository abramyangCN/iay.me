import type { Resume } from "./types";

const RESUME_URL =
  process.env.RESUME_JSON_URL ||
  "https://raw.githubusercontent.com/abramyang/Resume/main/resume.json";

export async function getResume(): Promise<Resume> {
  const res = await fetch(RESUME_URL, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch resume.json: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export function formatDateRange(startDate?: string, endDate?: string): string {
  if (!startDate) return "";
  return `${formatDate(startDate)} – ${endDate ? formatDate(endDate) : "Present"}`;
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return month ? `${months[parseInt(month, 10) - 1]} ${year}` : year;
}
