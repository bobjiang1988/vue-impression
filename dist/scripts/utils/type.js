'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isArray = exports.isArray = function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]';
};