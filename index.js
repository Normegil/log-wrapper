'use strict';

let _ = require('lodash');

module.exports = function getLog(logger) {
  return {
    fatal: function fatal(objects, message) {
      if (exist(logger)) {
        log(logger.fatal, objects, message);
      }
    },
    error: function error(objects, message) {
      if (exist(logger)) {
        log(logger.error, objects, message);
      }
    },
    warn: function warn(objects, message) {
      if (exist(logger)) {
        log(logger.warn, objects, message);
      }
    },
    info: function info(objects, message) {
      if (exist(logger)) {
        log(logger.info, objects, message);
      }
    },
    debug: function debug(objects, message) {
      if (exist(logger)) {
        log(logger.debug, objects, message);
      }
    },
    trace: function trace(objects, message) {
      if (exist(logger)) {
        log(logger.trace, objects, message);
      }
    },
  };
};

function log(logFunction, objects, message) {
  if (exist(objects)) {
    if (isObject(objects)) {
      logFunction(objects, message);
    } else if (!isObject(objects) && exist(message)) {
      logFunction(objects, message);
    } else {
      logFunction(objects);
    }
  } else if (exist(message)) {
    logFunction(message);
  }
}

function exist(object) {
  return undefined !== object && null !== object;
}

function isObject(toTest) {
  return _.isObject(toTest) &&
    !_.isFunction(toTest) &&
    !Array.isArray(toTest) &&
    null !== toTest &&
    undefined !== toTest;
}
