/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', 'www.pngall.com'],
    unoptimized: true
  },
  // The site is a single page now; keep old inbound links working.
  async redirects() {
    return [
      { source: '/projects', destination: '/#work', permanent: true },
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/homepage', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
