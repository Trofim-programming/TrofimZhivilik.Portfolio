const path = require('path');

module.exports = {
  entry: './src/index.js',  // Основной файл для сборки
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',  // Включение source maps для отладки
  stats: {
    warningsFilter: /source map/,  // Игнорировать ошибки отсутствия source map
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    slideInElements.forEach(element => {
        observer.observe(element);
    });
;

const path = require('path');

module.exports = {
  entry: './src/index.js',  // Основной файл для сборки
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',  // Включение source maps для отладки
  stats: {
    warningsFilter: /source map/,  // Игнорировать ошибки отсутствия source map
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};

module.exports = {
    devtool: 'source-map', // Включить source maps для отладки
    stats: {
      warningsFilter: /source map/, // Отключить предупреждения для source map
    },
  };
  