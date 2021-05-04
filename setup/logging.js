const { createLogger, format, transports } = require('winston');

const fileLogs = format.printf((info) => {
    let { level, stack, message, timestamp } = info; 
    message = stack || message ;

    return `${timestamp} ${level}: ${message}`;
  });

const consoleLogs = format.printf((info) => {
    let { stack, message } = info; 
    message = stack || message ;
    return `${message}`;
  });
 
const logger = createLogger({
  format:format.combine(
    format.splat(),
    format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
    fileLogs
    )
});

if (process.env.NODE_ENV === 'production') {
  logger.add(new transports.File({ filename: 'logs/combined.log'}));
  logger.add(new transports.File({ filename: 'logs/error.log', level: 'error' }));
  logger.add(new transports.Console({level:"info"}))
} 
else {
  logger.add(
    new transports.Console({
      level:"silly",
      format:format.combine(format.colorize({all: true}),consoleLogs)
  }));
}

logger.debug("Logger configured");

global.log = logger


process.on('uncaughtException', function (err) {
  log.error(err.stack)
  throw err
})