const createNextIntlPlugin = require("next-intl/plugin");
const { version } = require("./package.json");

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  serverExternalPackages: ["pino", "pino-pretty"],
  experimental: {
    // staleTimes: {
    //   dynamic: 0
    // }
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  publicRuntimeConfig: {
    version
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: '',
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "124.248.168.43",
        port: '',
        pathname: "**",
      },

      {
        protocol: "http",
        hostname: "appwrite.mlopdata.com",
        port: '',
        pathname: "**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
