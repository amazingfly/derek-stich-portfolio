/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  output: 'export',
  // Required when hosting under https://amazingfly.github.io/derek-stich-portfolio/
  basePath: isGithubPages ? '/derek-stich-portfolio' : '',
  assetPrefix: isGithubPages ? '/derek-stich-portfolio/' : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
