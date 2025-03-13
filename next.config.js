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
  async redirects() {
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
