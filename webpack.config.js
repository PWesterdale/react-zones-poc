const path = require('path');

module.exports = {
    entry: {
        app : './src/app.js',
        injector: './src/injector.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    externals: {
		"react" : "React"
    }
}