/**
 * Refresh public repository star counts in src/data/portfolio.ts from GitHub.
 * Fails softly (exit 0) if the API is unavailable or rate-limited.
 */
import fs from 'node:fs';
import path from 'node:path';

const target = path.resolve(process.cwd(), 'src/data/portfolio.ts');
const headers = {
  'User-Agent': 'my-portfolio-ci',
  Accept: 'application/vnd.github+json',
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

try {
  const res = await fetch('https://api.github.com/users/clark970417-eng/repos?per_page=100', { headers });
  if (!res.ok) process.exit(0);
  const repos = await res.json();
  if (!Array.isArray(repos)) process.exit(0);

  const starMap = new Map(repos.map((r) => [r.name, r.stargazers_count]));
  let src = fs.readFileSync(target, 'utf-8');
  src = src.replace(
    /(\{\s*title:\s*'([^']+)',[\s\S]*?stars:\s*)(\d+)(,)/g,
    (m, prefix, name, oldStars, suffix) => {
      const latest = starMap.get(name);
      return typeof latest === 'number' && latest !== Number(oldStars)
        ? `${prefix}${latest}${suffix}`
        : m;
    },
  );
  fs.writeFileSync(target, src, 'utf-8');
} catch {
  // Network offline or API rate-limited; keep committed counts
}
