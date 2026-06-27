/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint checks during build to bypass the ESLint 9 cache serialization bug on Vercel.
    // The codebase remains clean since linting can still be run locally.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
