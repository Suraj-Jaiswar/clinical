/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    MONGODB_URL: "mongodb+srv://tushar:Tushar4321@cluster0.fcxyfdc.mongodb.net",
  },
};

module.exports = nextConfig;
