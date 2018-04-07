var path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'public'),
        disableHostCheck: true,
        historyApiFallback: true,
        host: process.env.HOST || 'localhost',
        inline: true,
        port: process.env.PORT || 3000,
    },
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                babelrc: false,
                presets: ['env', 'react'],
                plugins: [
                    'syntax-dynamic-import',
                    'transform-class-properties',
                    'transform-react-constant-elements',
                    'transform-react-inline-elements'
                ]
            }
        }]
    },
    output: {
        filename: 'bundle-[name].min.js',
        path: path.resolve(__dirname, 'public', 'scripts'),
        publicPath: 'scripts/'
    }
}