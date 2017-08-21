'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var engine = void 0;
var docStyle = document.documentElement.style;

if ('MozAppearance' in docStyle) {
    engine = 'gecko';
} else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
} else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
}

var vendorPrefix = exports.vendorPrefix = { trident: 'ms', gecko: 'Moz', webkit: 'Webkit' }[engine];
var cssPrefix = exports.cssPrefix = { trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-' }[engine];

var getPrefixStyle = exports.getPrefixStyle = function getPrefixStyle(name, value) {
    var namePrefix = '' + cssPrefix + name;

    return namePrefix + ' ' + value;
};