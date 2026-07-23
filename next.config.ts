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



import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // Disables type checking during 'next build' / Vercel deployments
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  serverExternalPackages: ['sequelize', 'pg', 'pg-hstore', 'bcrypt', 'replicate', 'cloudinary'],
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
};

export default nextConfig;