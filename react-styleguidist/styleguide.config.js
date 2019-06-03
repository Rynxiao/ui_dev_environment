module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/get-started.md',
      components: 'src/introduction/Welcome.js',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand',
    },
    {
      name: 'Components',
      sections: [
        {
          name: "Basic",
          components: 'src/components/**/*.js',
          exampleMode: 'collapse',
          usageMode: 'expand',
        },
        {
          name: 'Get Started',
          external: true,
          href: 'https://react-styleguidist.js.org/docs/getting-started.html',
        },
      ],
    },
  ],
};
