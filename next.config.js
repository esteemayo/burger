/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/learnhowtocode/image/upload/v1719505395/burger/**',
      },
    ],
  },
}

module.exports = nextConfig
