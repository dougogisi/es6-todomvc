const webpackValidator = require('webpack-validator')
const {resolve} = require('path')

module.exports = () => {
    const config = {
        context: resolve('src'),
        entry: './bootstrap.js',
        output: {
            filename: 'bundle.js',
        },
    };
    
    return webpackValidator(config);
}
