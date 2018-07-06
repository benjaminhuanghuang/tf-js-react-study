
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        entry: './hellotfjs.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map'
}
