"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = exports.contains = function contains(ancestor, descendent) {
    if (ancestor.compareDocumentPosition) {
        return ancestor === descendent || !!(ancestor.compareDocumentPosition(descendent) & 16);
    }

    if (ancestor.contains && descendent.nodeType === 1) {
        return ancestor.contains(descendent) && ancestor !== descendent;
    }

    var tmpDescendent = descendent;

    while (tmpDescendent !== document) {
        tmpDescendent = tmpDescendent.parentNode;

        if (tmpDescendent === ancestor) return true;
    }

    return false;
};

var hasScrollbar = exports.hasScrollbar = function hasScrollbar(el) {
    if (!el) return false;

    return el.scrollHeight > el.offsetHeight;
};

var getScrollContainer = exports.getScrollContainer = function getScrollContainer(el) {
    var tmpEl = el;

    while (tmpEl !== document) {
        tmpEl = tmpEl.parentNode;

        if (hasScrollbar(tmpEl)) return tmpEl;
    }

    return document;
};