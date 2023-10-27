/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["src/styles"],
  prepenData:`
   @import "./src/styles/variables/all.scss"
  `
  }
}

module.exports = nextConfig
