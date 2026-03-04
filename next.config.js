/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages without a custom domain, the site is served
// under https://<user>.github.io/<repo>/  — we must set basePath + assetPrefix.
// Set PAGES_BASE_PATH=/<repo-name> in the workflow env; leave it empty when
// using a custom domain (served at root).
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath && { basePath, assetPrefix: basePath }),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
