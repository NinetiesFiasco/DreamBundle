const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebPackConfig = require('./webpack.base.conf');
const devWebPackConfig = merge(baseWebPackConfig,{
  mode: 'development',
  devtool:"cheap-module-eval-source-map",
  
// Нужно только при разработке
// Позволяет делать LiveReload при использовании React Router Dom
  devServer:{
    port: 8081,
    contentBase: baseWebPackConfig.externals.paths.dist,
    historyApiFallback: true,
    overlay:{
      warnings: true,
      errors: true
    }
  },
  plugins:[
    new webpack.SourceMapDevToolPlugin({
      filename:'[file].map'
    }),
  ]  
});

module.exports = new Promise((resolve, reject)=>{
  resolve(devWebPackConfig);
});