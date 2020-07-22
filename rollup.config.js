const lwc = require('@lwc/rollup-plugin');
const replace = require('@rollup/plugin-replace');

module.exports = {
    input: './src/index.js',

    external: ['lwc'],

    output: {
        file: './dist/greeting.js',
        format: 'iife',

        globals: {
            lwc: 'LWC'
        }
    },

    plugins: [
        lwc(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
