'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setTranslate = exports.cancelTranslate = exports.getTranslate = undefined;

var _cssPrefix = require('./cssPrefix');

var transformProperty = _cssPrefix.vendorPrefix + 'Transform';

var getTranslate = exports.getTranslate = function getTranslate(el) {
    var result = {
        x: 0,
        y: 0
    };

    if (el === null || el.style === null) return result;

    var transform = el.style[transformProperty];
    var matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g.exec(transform);

    if (matches) {
        result.x = +matches[1];
        result.y = +matches[3];
    }

    return result;
};

var cancelTranslate = exports.cancelTranslate = function cancelTranslate(el) {
    if (el === null || el.style === null) return;

    var transform = el.style[transformProperty];

    if (transform) {
        transform = transform.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g, '');
        el.style[transformProperty] = transform;
    }
};

var setTranslate = exports.setTranslate = function setTranslate(el, x, y) {
    if (!el) return;
    if (x === null && y === null) return;


    var translate = getTranslate(el),
        currentX = x,
        currentY = y;

    if (x === null) currentX = translate.x;
    if (y === null) currentY = translate.y;

    cancelTranslate(el);

    el.style[transformProperty] += ' translate(' + (currentX ? currentX + 'px' : '0px') + ', ' + (currentY ? currentY + 'px' : '0px') + ')';
};