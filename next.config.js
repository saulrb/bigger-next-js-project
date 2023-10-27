/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    // Aliases
    config.resolve.alias['~'] = path.resolve(__dirname)

    return config
  }
}

module.exports = nextConfig
