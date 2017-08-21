'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alert = undefined;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _Alert = require('../components/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = _vue2.default.extend(_Alert2.default);
var alertInstance = void 0;

var alert = exports.alert = function alert(option) {
    option.title = option.title || '提示';

    alertInstance = new Alert({
        el: document.createElement('div')
    });

    document.body.appendChild(alertInstance.$el);

    Object.assign(alertInstance, option);

    _vue2.default.nextTick(function () {
        alertInstance.show();
    });

    return alertInstance;
};

alert.hide = function () {
    alertInstance.hide();
};