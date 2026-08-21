import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/cloud", destination: "/tech-productivity", permanent: true },
      { source: "/cloud/:slug", destination: "/tech-productivity/:slug", permanent: true },
      { source: "/automation", destination: "/tech-productivity", permanent: true },
      { source: "/automation/:slug", destination: "/tech-productivity/:slug", permanent: true },
      { source: "/ai-tools", destination: "/tech-productivity", permanent: true },
      { source: "/ai-tools/:slug", destination: "/tech-productivity/:slug", permanent: true },
      { source: "/productivity", destination: "/tech-productivity", permanent: true },
      { source: "/productivity/:slug", destination: "/tech-productivity/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
