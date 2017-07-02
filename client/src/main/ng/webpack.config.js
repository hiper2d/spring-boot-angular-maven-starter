var env = (process.env.NODE_ENV || '').trim();
console.info('### NODE_ENV: ' + env);

switch (env) {
    case 'production':
        module.exports = require('./config/webpack.prod.js');
        break;
    default:
        module.exports = require('./config/webpack.dev.js');
}