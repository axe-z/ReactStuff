/*jslint browser: true, devel: true, node: true, sloppy: true, stupid: true, sub: true, unused:false, unparam: true, "esnext": true, esversion: 6, -W008, -W030, -W033 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); ///optionnel permet de separer son js, plus vite si gros.
////si on voulait plusieurs fichier css, voir section 2 de notes sur wp 2.
const path = require('path'); // pour wp-dev-server et autres..
let webpack = require('webpack');


module.exports = {
   entry: {
     app: './src/js/app.js',
  //   contact: './src/js/contact.js'
   },
   output: {
     path: path.resolve(__dirname, 'build'),
     filename: '[name].js'  ///donc ici prendra le nom app ou contact de l obj entry
 },

 // resolve: {
 //   root: __dirname,
 //   alias: {
 //     Greeter: 'src/js/components/Greeter.js',
 //     GreeterMessage: 'src/js/components/GreeterMessage.js',
 //     GreeterForm: 'src/js/components/GreeterForm.js'
 //   },
 //   extensions: ['','.js','.jsx']
 // },
  module: {
   rules: [
    //// CSS avant etait loaders: 'style-loader!css-loader' marche encore ceci dit////
    //{test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader']}

        ////AVEC  extract-text-webpack-plugin, webpack va faire un vrai fichier css, ce qui ameliore la vitesse////
      {
         test: /\.scss$/, exclude: /node_modules/,
         use: ExtractTextPlugin.extract({
           fallback: "style-loader",
          use: ['css-loader', 'autoprefixer-loader', 'sass-loader']
        })
      },

  //// A mettre si HMR ////
  ////doit prendre ceci si on fait du HMR, lui du haut sinon. extract-text-webpack-plugin chi en HMR////
    //{
    //  test: /\.scss$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
    //},

         //babel es6 et react
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','stage-0', 'react']
            }
         },

          ///file-url loaders
          {
             test: /\.(png|jpg|gif|mp4|otf|eot|ttf|woff|svg|jpeg)$/,
             exclude: /node_modules/,
             loader: 'url-loader',
             options:  {
                limit: 10000
             }
          }
       ]
     },
     devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
         hot: false, // si HMR , mettre true
      //  stats: "errors-only",   //dans la console, moins de truc, sauf erreurs si jamais...
        open: true    // va ouvris une fenetre , comme avec lite server.
     },
      devtool: 'source-map',
     plugins: [
       new HtmlWebpackPlugin({
         title: 'React complete 7g',
         minify: {
           collapseWhitespace: true
         },
         hash: true,
        // excludeChunks: ['contact'],  //empeche le js d aller des deux bords et poluer contact
         //filename: './../index.html', si on voulait notre index.html produit par wp ailleurs que build
         template: './src/index.html'
       }),
    //   new HtmlWebpackPlugin({
    //     title: 'Contact page demo',
    //     minify: {
    //       collapseWhitespace: true
    //     },
    //     hash: true,
    //     chunks: ['contact'],   ///et lui de dire d'inclure les chunks de contact
    //     filename: 'contact.html',
    //     template: './src/contact.html'
    //   }),
        new ExtractTextPlugin({
         filename: 'app.css',  ///nom du fichier creer dans build
         disable: false,   ///si HMR , mettre disable true
         allChunks: true  //il a ajouter ca..
       }),
       ////pour hot module replacement////
       //new webpack.HotModuleReplacementPlugin(),
       // enable HMR globalement

       //new webpack.NamedModulesPlugin(),
       // prints more readable module names in the browser console on HMR updates
       new webpack.ProvidePlugin({
         $: 'jquery',
         jQuery: 'jquery'
       })
     ],

 };
