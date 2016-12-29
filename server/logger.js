const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'logs';
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
const tsFormat = () => (new Date()).toLocaleTimeString();
const logLevel = process.env.NODE_ENV === 'production' ? 'info' : 'debug';
const transports = [];

transports.push(
    // colorize the output to the console
    new(winston.transports.Console)({
        timestamp: tsFormat,
        colorize: true,
        level: logLevel
    })
);

if (process.env.NODE_ENV === 'production') {
    transports.push(
        new(require('winston-daily-rotate-file'))({
            filename: `${logDir}/-results.log`,
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            level: logLevel
        })
    );
}

const logger = new(winston.Logger)({
    transports: transports
});

module.exports = logger;
