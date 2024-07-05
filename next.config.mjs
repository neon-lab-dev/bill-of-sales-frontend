/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https",
        pathname: "**/*",
      },
    ],
  },
};

export default nextConfig;
