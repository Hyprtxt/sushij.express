/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/uploads/:file*',
        destination: 'https://api.hyprtxt.dev/uploads/:file*',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
