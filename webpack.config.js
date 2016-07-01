module.exports = {
  entry: {
    'rx-voter': './examples/rxjs/rx-voter.js',
    'rx-counter': './examples/rxjs/rx-counter.js',
    'rx-hello-world': './examples/rxjs/rx-hello-world.js'
  },
  output: {
    filename: './examples/rxjs/[name].compiled.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.js?$/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};