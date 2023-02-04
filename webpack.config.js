const path = require('path');

module.exports = {
    devServer: {
        static: "./dist"
    },
    devtool: "inline-source-map",
    entry: './src/script.mjs',
    mode: "development",
    // optimization: {
    //     runtimeChunk: "single"
    // },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}