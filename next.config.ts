import type { Configuration as WebpackConfig } from 'webpack';

/**
 * Next.js configuration with custom Webpack handling for database drivers
 * and remote image loading.
 */
const nextConfig = {
  env: {
    REACT_APP_IMAGES_PATH: '/assets/images',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config: WebpackConfig, { isServer }: { isServer: boolean }) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'better-sqlite3': false,
      'mysql': false,
      'mysql2': false,
      'oracledb': false,
      'pg-query-stream': false,
      'sqlite3': false,
      'tedious': false,
    };

    if (isServer) {
      config.ignoreWarnings = [
        {
          // Applies only to the file that generates the warning on build
          module: /node_modules\/knex\/lib\/migrations\/util\/import-file\.js/,
          message: /Critical dependency: the request of a dependency is an expression/,
        },
      ];
    }

    return config;
  },
};

export default nextConfig;
