const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `  [${level}]  ${timestamp} ${message}`;
});


function debuglogger() {
    return createLogger({
        level: 'debug',

        format: combine(format.colorize(),
            timestamp({ format: "HH:mm:ss" }),
            myFormat
        ),
        // defaultMeta: { service: 'user-service' },
        transports: [
            new transports.Console(),
            new transports.File({
                filename: 'info.log',
                level: 'info'
            }),
            new transports.File({
                filename: 'error.log',
                level: 'error'
            }),
            new transports.File({
                filename: 'debug.log',
                level: 'debug'
            })
        ],
    });
}
module.exports = debuglogger;