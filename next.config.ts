import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This tells Next.js to generate a static site
  images: {
    unoptimized: true, // Required if you're using <Image />
  },
};

export default nextConfig;
