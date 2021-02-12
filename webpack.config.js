/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
    entry: {
        index: './index.ts'
    },
    devtool: 'inline-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: '/node_modules/',
                options: { allowTsInNodeModules: true }
            },
            {
                test: /\.node$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[base]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts']
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'bundled')
    },
    target: 'node'
};
