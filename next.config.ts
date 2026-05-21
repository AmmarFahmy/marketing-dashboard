import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(import.meta.dirname),
    resolveAlias: {
      tailwindcss: path.resolve(
        import.meta.dirname,
        "node_modules/tailwindcss"
      ),
    },
  },
};

export default nextConfig;
