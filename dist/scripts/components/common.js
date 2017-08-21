'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _GroupTitle = require('./GroupTitle');

var _GroupTitle2 = _interopRequireDefault(_GroupTitle);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _FlexItem = require('./FlexItem');

var _FlexItem2 = _interopRequireDefault(_FlexItem);

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckboxGroup = require('./CheckboxGroup');

var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioGroup = require('./RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _MediaObject = require('./MediaObject');

var _MediaObject2 = _interopRequireDefault(_MediaObject);

var _MediaBody = require('./MediaBody');

var _MediaBody2 = _interopRequireDefault(_MediaBody);

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _toast = require('../utils/toast');

var _toast2 = _interopRequireDefault(_toast);

var _alert = require('../utils/alert');

var _loading = require('../utils/loading');

var _loading2 = _interopRequireDefault(_loading);

var _disfavor = require('../directives/disfavor');

var _disfavor2 = _interopRequireDefault(_disfavor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var impression = {
    Button: _Button2.default,
    Group: _Group2.default,
    GroupTitle: _GroupTitle2.default,
    Cell: _Cell2.default,
    Flex: _Flex2.default,
    FlexItem: _FlexItem2.default,
    Media: _Media2.default,
    MediaObject: _MediaObject2.default,
    MediaBody: _MediaBody2.default,
    Mask: _Mask2.default,
    Alert: _Alert2.default,
    Loading: _Loading2.default,
    Checkbox: _Checkbox2.default,
    CheckboxGroup: _CheckboxGroup2.default,
    Radio: _Radio2.default,
    RadioGroup: _RadioGroup2.default
};

var install = function install(Vue) {
    if (install.installed) return;

    Object.keys(impression).forEach(function (key) {
        Vue.component(impression[key].name, impression[key]);
    });

    Vue.$toast = Vue.prototype.$toast = _toast2.default;
    Vue.$alert = Vue.prototype.$alert = _alert.alert;
    Vue.$loading = Vue.prototype.$loading = _loading2.default;

    Vue.directive('disfavor', _disfavor2.default);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

Object.keys(impression).forEach(function (key) {
    exports[key] = impression[key];
});

exports.default = _extends({
    install: install
}, impression);