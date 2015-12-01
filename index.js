'use strict';

let _ = require('lodash');

module.exports = function getLog(logger) {
  return {
    fatal: function fatal(objects, message) {
      if (exist(logger)) {
        log(logger.fatal.bind(logger), objects, message);
      }
    },
    error: function error(objects, message) {
      if (exist(logger)) {
        log(logger.error.bind(logger), objects, message);
      }
    },
    warn: function warn(objects, message) {
      if (exist(logger)) {
        log(logger.warn.bind(logger), objects, message);
      }
    },
    info: function info(objects, message) {
      if (exist(logger)) {
        log(logger.info.bind(logger), objects, message);
      }
    },
    debug: function debug(objects, message) {
      if (exist(logger)) {
        log(logger.debug.bind(logger), objects, message);
      }
    },
    trace: function trace(objects, message) {
      if (exist(logger)) {
        log(logger.trace.bind(logger), objects, message);
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
