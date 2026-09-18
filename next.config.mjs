/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath is injected by actions/configure-pages when deploying to GitHub Pages.
  // Keep local/Vercel builds without a basePath.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
