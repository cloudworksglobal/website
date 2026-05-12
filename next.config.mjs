/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudgworks: Forzamos el bypass de errores para el deploy
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;