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
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'salmon'
    },
    fontFamily: {
      base: '"Comic Sans MS", "Comic Sans", cursive'
    }
  },
  ribbon: {
    // Link to open on the ribbon click (required)
    url: 'https://github.com/Rynxiao/ui_dev_environment',
    // Text to show on the ribbon (optional)
    text: 'Fork me on GitHub'
  },
  styles: {
    Logo: {
      // We're changing the LogoRenderer component
      logo: {
        // We're changing the rsg--logo-XX class name inside the component
        animation: 'blink ease-in-out 300ms infinite'
      },
      '@keyframes blink': {
        to: { opacity: 0 }
      }
    }
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
