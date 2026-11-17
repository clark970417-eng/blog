import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://clark970417-eng.github.io',
  base: process.env.GITHUB_ACTIONS ? '/my-portfolio' : '/',
  integrations: [
    {
      name: 'exclude-dev-admin-on-build',
      hooks: {
        'astro:build:done': ({ dir }) => {
          // /admin only persists via the local Vite dev middleware, so omit it from static deploys
          const outAdmin = path.join(fileURLToPath(dir), 'admin');
          if (fs.existsSync(outAdmin)) {
            fs.rmSync(outAdmin, { recursive: true, force: true });
          }
        },
      },
    },
  ],
  vite: {
    plugins: [
      {
        name: 'local-album-admin',
        configureServer(server) {
          server.middlewares.use('/api/save-albums', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end('Method Not Allowed');
              return;
            }
            let body = '';
            req.on('data', (chunk) => { body += chunk; });
            req.on('end', () => {
              try {
                const parsed = JSON.parse(body);
                const target = path.resolve(process.cwd(), 'src/data/albums.json');
                fs.writeFileSync(target, JSON.stringify(parsed, null, 2), 'utf-8');
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
              } catch (err) {
                res.statusCode = 400;
                res.end(JSON.stringify({ ok: false, error: String(err) }));
              }
            });
          });
        },
      },
    ],
  },
});
