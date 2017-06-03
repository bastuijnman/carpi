let path = require('path');

module.exports = (env) => {

    return {

        context: path.join(__dirname, 'app'),

        entry: './index.js',

        output: {
            path: path.join(__dirname, 'assets'),
            filename: 'app.bundle.js'
        },

        module: {

            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
            ]

        }

    }

}