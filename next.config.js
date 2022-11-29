/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://api.airtable.com/v0/apppEuXVVoYReUqej'],
  }
}

module.exports = nextConfig
