const { createLogger, format, transports } = require('winston');

const logFormatter = format.printf((info) => {
    let { level, stack, message, timestamp } = info; 
    message = stack || message ;

    return `${timestamp} ${level}: ${message}`;
  });
 
const logger = createLogger({
  format:format.combine(
    format.splat(),
    format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
    logFormatter
    )
});

if (process.env.NODE_ENV === 'production') {
  logger.add(new transports.File({ filename: 'logs/combined.log'}));
  logger.add(new transports.File({ filename: 'logs/error.log', level: 'error' }));
} 
else {
  logger.add(
    new transports.Console({
      level:"debug",
      format:format.combine(format.colorize(),logFormatter)
  }));
}

logger.debug("Logger configuration complet");

global.log = logger


process.on('uncaughtException', function (err) {
  log.error(err.stack)
  throw err
})