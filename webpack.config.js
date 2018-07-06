
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        entry: './index.js'//'./hellotfjs.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map'
}
