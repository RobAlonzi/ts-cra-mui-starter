const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: { '@': path.resolve(__dirname, 'src') },
    extensions: [...config.resolve.extensions, '.ts'],
    fallback: {
      stream: require.resolve('stream-browserify'),
    },
  };

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.html$/i,
      use: [
        {
          loader: 'html-loader',
        },
      ],
    },
  ];

  return config;
};
