// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'standalone'
// };

// module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
    ];
  },
};
