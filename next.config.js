/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/dhc-website' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
