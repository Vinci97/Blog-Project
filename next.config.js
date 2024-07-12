const path = require('path');

module.exports = {
  reactStrictMode: true,  
  experimental: {
    reactRefresh: true, 
  },
  webpack: (config, { isServer }) => {

    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      cacheDirectory: path.resolve(__dirname, '.temp_cache'),
      name: 'project-cache',
    };
    config.stats = {
      warningsFilter: [
        /cache item/,
        /No serializer registered/,
      ],
    };

    return config;
  },
};
