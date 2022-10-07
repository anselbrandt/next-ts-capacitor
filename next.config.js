const withTM = require('next-transpile-modules')([
  `@ionic/react`, '@ionic/core', 'ionicons', '@stencil/core'
])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = withTM(nextConfig)
