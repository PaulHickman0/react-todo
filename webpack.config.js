const merge = require('webpack-merge');
const common = require('./tasks/common');
const development = require('./tasks/development');
const production = require('./tasks/production');
let setup;

switch (process.env.NODE_ENV) {
    case 'local':
        setup = merge.strategy({
            entry: 'prepend'
        })(common, development);
        break;
    case 'production':
        setup = merge(common, production);
        break;
}

module.exports = setup;
