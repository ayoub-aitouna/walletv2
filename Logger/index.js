const debuglogger = require('./debuglogger')
const productionLogger = require('./productionLogger.js')
let Logger = null;

if (process.env.NODE_ENV != 'production') {
    Logger = debuglogger();
}
if (process.env.NODE_ENV == 'production') {
    Logger = productionLogger();
}
module.exports = Logger;