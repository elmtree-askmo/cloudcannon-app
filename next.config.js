/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  async redirects() { // redirect doesn't work on CloudCannon, it will rely on page/404.js
    return [
      {
        source: "/:any*/questions/undefined/learn/:path*",
        destination: "/learn/:path*",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
