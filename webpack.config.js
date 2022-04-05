module.exports = {
    entry: './src/index.tsx',
   devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            }
          ]
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', 'css', 'jsx', 'd.ts' ],
    },
  };