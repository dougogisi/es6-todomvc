const webpackValidator = require('webpack-validator')
const {resolve} = require('path')

module.exports = () => {
    const config = {
        context: resolve('src'),
        entry: './bootstrap.js',
        output: {
            path: resolve('dist'),
            filename: 'bundle.js',
            publicPath: '/dist/',
        },
        devtool: 'eval',
    };
    
    return webpackValidator(config);
}
