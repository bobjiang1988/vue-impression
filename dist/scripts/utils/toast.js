'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _Toast = require('../components/Toast');

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toast = _vue2.default.extend(_Toast2.default);

var toastCache = {
    cache: [],
    active: false,
    pop: function pop() {
        if (this.cache.length) return this.cache.splice(0, 1)[0];

        return new Toast({
            el: document.createElement('div')
        });
    },
    push: function push(instance) {
        this.cache.push(instance);
    },
    toggle: function toggle() {
        this.active = !this.active;
    }
};

Toast.prototype.show = function () {
    this.currentValue = true;
    toastCache.active = true;
};

Toast.prototype.hide = function () {
    this.currentValue = false;
    toastCache.active = false;
};

var toastUtil = function toastUtil() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (toastCache.active) return;

    var duration = options.duration || 2000,
        instance = toastCache.pop();

    instance.message = typeof options === 'string' ? options : options.message;
    instance.type = options.type || '';
    instance.position = options.position || 'bottom';

    document.body.appendChild(instance.$el);

    instance.show();
    instance.timer = setTimeout(function () {
        instance.hide();

        toastCache.push(instance);
    }, duration);
};

exports.default = toastUtil;