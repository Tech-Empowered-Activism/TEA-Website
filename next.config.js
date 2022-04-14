// next.config.js
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: isProd ? '/TEA-Website/' : '',
  reactStrictMode: true,
  // swcMinify: false,
}
