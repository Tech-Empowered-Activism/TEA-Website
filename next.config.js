// next.config.js
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: isProd ? '/tech-empowered-activism/' : '',
  reactStrictMode: true,
  // swcMinify: false,
}
