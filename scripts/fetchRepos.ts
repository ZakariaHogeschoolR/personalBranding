import fs from "fs/promises";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  fork: boolean;
  language: string | null;
  created_at: string;
  updated_at: string;
  status?: "Completed" | "InProgress";
  type?: "Activity" | "Project";
};


async function fetchRepos() {
  const res = await fetch(`https://api.github.com/user/repos?per_page=100`);
  if (!res.ok) throw new Error("GitHub API request failed");

  const repos: Repo[] = await res.json();

  // Lees bestaande JSON (async) om handmatige status/type te behouden
  let existing: Record<number, Repo> = {};
  try {
    const raw = await fs.readFile("./src/data/repos.json", "utf-8");
    const parsed: Repo[] = JSON.parse(raw);
    existing = Object.fromEntries(parsed.map(r => [r.id, r]));
  } catch (e) {
    // bestand bestaat nog niet, geen probleem
  }

  const filtered = repos
    .filter(r => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .map(r => {
      const prev = existing[r.id] || {};
      return {
        ...r,
        type: prev.type || "Project",        // behoud bestaande type, anders Project
        status: prev.status || "InProgress", // behoud bestaande status, anders InProgress
      };
    });

  await fs.writeFile(
    "./src/data/repos.json",
    JSON.stringify(filtered, null, 2)
  );

  console.log("Repos.json generated successfully, preserving existing type/status");
}

fetchRepos();