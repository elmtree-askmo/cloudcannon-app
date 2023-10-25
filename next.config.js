/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    exportPathMap: async function () {
        return {
          '/': { page: '/' },
          '/faq': { page: '/faq.html' },
        };
    },
}

module.exports = nextConfig
