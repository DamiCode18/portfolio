/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    domains: ['localhost:3000', 'www.pngall.com', 'strapi-wkp6.onrender.com'],
    path: 'strapi-wkp6.onrender.com'
  },
}

module.exports = nextConfig
