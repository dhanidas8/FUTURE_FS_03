/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.STRAPI_DOMAIN || 'localhost', 'res.cloudinary.com'],
  },
}
module.exports = nextConfig
