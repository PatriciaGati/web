
module.exports = ({
  experimental: {
    scrollRestoration: true,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    config.node = {
      fs: "empty",
    };
    return config;
  },
  images: {
    domains: ['cdn.sanity.io'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
});
