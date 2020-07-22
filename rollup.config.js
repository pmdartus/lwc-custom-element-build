const lwc = require('@lwc/rollup-plugin');
const replace = require('@rollup/plugin-replace');

module.exports = {
    input: './src/index.js',

    output: {
        file: './dist/greeting.js',
        format: 'esm'
    },

    plugins: [
        lwc(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
