/**
 * Static-export config for GitHub Pages.
 *
 * For a project page (https://<user>.github.io/<repo>/) set:
 *   GH_PAGES_BASE_PATH=/<repo>
 * For a user/org root site (<user>.github.io) leave it unset.
 */
const basePath = process.env.GH_PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
