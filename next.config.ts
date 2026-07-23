// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   poweredByHeader: false,
//   serverExternalPackages: ['sequelize', 'pg', 'pg-hstore', 'bcrypt', 'replicate', 'cloudinary'],
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'res.cloudinary.com' },
//       { protocol: 'https', hostname: '**.skoleom.com' },
//       { protocol: 'https', hostname: 'ext.skoleom.com' },
//     ],
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/serp/:path*',
//         destination: 'https://serpapi.com/:path*',
//       },
//     ];
//   },
// };

// export default nextConfig;



// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   typescript: {
//     // Disables type checking during 'next build' / Vercel deployments
//     ignoreBuildErrors: true,
//   },
//   reactStrictMode: true,
//   poweredByHeader: false,
//   serverExternalPackages: ['sequelize', 'pg', 'pg-hstore', 'bcrypt', 'replicate', 'cloudinary'],
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'res.cloudinary.com' },
//       { protocol: 'https', hostname: '**.skoleom.com' },
//       { protocol: 'https', hostname: 'ext.skoleom.com' },
//     ],
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/serp/:path*',
//         destination: 'https://serpapi.com/:path*',
//       },
//     ];
//   },
// };

// export default nextConfig;


import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // Disables type checking during 'next build' / Vercel deployments
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  serverExternalPackages: [
    'sequelize',
    'pg',
    'pg-hstore',
    'bcrypt',
    'replicate',
    'cloudinary',
  ],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: '**.skoleom.com' },
      { protocol: 'https', hostname: 'ext.skoleom.com' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/serp/:path*',
        destination: 'https://serpapi.com/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
          },
        ],
      },
    ];
  },
};

export default nextConfig;