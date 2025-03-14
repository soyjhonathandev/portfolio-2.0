/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'example.com',
    ],
  },
  trailingSlash: true,

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  distDir: '.next',
   async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:locale(en|es)/:path*',
          destination: '/:path*'
        }
      ]
    };
  }
};

module.exports = nextConfig;