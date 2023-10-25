/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    exportPathMap:async function () {
        return {
            '/':{ page: '/'},
            '/faq':{ page: '/faq'}
        }
    }
}

module.exports = nextConfig
