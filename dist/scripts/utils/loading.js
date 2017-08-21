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

var instance = void 0,
    active = false;

exports.default = {
    show: function show() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';

        if (active) return;

        if (!instance) {
            instance = new Toast({
                el: document.createElement('div')
            });

            document.body.appendChild(instance.$el);
        }

        active = true;
        instance.message = message;
        instance.type = 'loading';
        instance.position = 'center';

        _vue2.default.nextTick(function () {
            instance.show();
        });
    },
    hide: function hide() {
        instance.hide();
        active = false;
    },
    toggle: function toggle(message) {
        return active ? this.hide() : this.show(message);
    }
};