/** @type {import('next').NextConfig} */
const { generateStaticParams } = require('next/dist/build/generate-static-params');
const nextConfig = {
    output:'export',
    async generateStaticParams() {
        return await generateStaticParams({
          '/': { page: '/' },
          '/faq.html': { page: '/faq.html' },
        });
    },
}

module.exports = nextConfig
