var path = require('path');
var webpack = require('webpack');
var config = {
  context: path.join(__dirname, 'src'), // исходная директория
  entry: './index', // файл для сборки, если несколько - указываем hash (entry name => filename)
  output: {
    path: path.join(__dirname, 'assets') // выходная директория
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
var compiler = webpack(config);
compiler.run(function (err, stats) {
  console.log(stats.toJson()); // статистика
});