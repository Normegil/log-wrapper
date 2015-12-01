# Log-Wrapper
A wrapper that check for existence of a bunyan logger before logging message. If a logger doesn't exist, then nothing is called.

## Requirements
- Node 4.0
- Only works with bunyan for now

## Installation

To install the library, just use [npm](https://fr.wikipedia.org/wiki/Npm_%28logiciel%29):
`
npm install log-wrapper
`

## Usage
A require will send back a function to be called with the logger
```javascript
let wrapper = require('log-wrapper');
let undefinedLog = wrapper(undefined);

undefinedLog.info('test'); // Nothing logged


let log = wrapper(bunyanLogger);

log.info('I\' m alive !'); // Will log "I'm alive"

log.info({object: object}, 'I\' m alive and have an object !'); // Will log "I\' m alive and have an object !" with the object "object"

```
