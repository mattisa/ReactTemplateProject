module.exports = [
    {
        test: /\.js$/,
        exclude: /(node_modules|www)/,
        loaders: ['babel'], // 'babel-loader' is also a legal name to reference
        cacheDirectory: true
    },
    {
        test: /\.css$/,
        // loader: ExtractTextPlugin.extract('style',
        //     'css?modules&localIdentName=[folder]__[local]--[hash:base64:5]&camelCase&importLoaders=1!postcss'
        // )
        loader: 'style!css-loader?modules&localIdentName=[folder]__[local]--[hash:base64:5]&camelCase&importLoaders=1!postcss'
    },
    {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url?name=images/[name].[ext]&limit=10000'
    },
    {
        test: /\.svg$/,
        loader: 'raw-loader'
    },
    {
        test: /\.(ttf|eot|woff2?|otf)$/,
        loader: 'url?name=fonts/[name].[ext]&limit=10000'
    }
];
