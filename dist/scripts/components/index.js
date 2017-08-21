'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

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

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Tabbar = require('./Tabbar');

var _Tabbar2 = _interopRequireDefault(_Tabbar);

var _TabbarItem = require('./TabbarItem');

var _TabbarItem2 = _interopRequireDefault(_TabbarItem);

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

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _InputNumber = require('./InputNumber');

var _InputNumber2 = _interopRequireDefault(_InputNumber);

var _InputText = require('./InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _InputTextarea = require('./InputTextarea');

var _InputTextarea2 = _interopRequireDefault(_InputTextarea);

var _Selector = require('./Selector');

var _Selector2 = _interopRequireDefault(_Selector);

var _SelectorOption = require('./SelectorOption');

var _SelectorOption2 = _interopRequireDefault(_SelectorOption);

var _InlineSelector = require('./InlineSelector');

var _InlineSelector2 = _interopRequireDefault(_InlineSelector);

var _InlineSelectorOption = require('./InlineSelectorOption');

var _InlineSelectorOption2 = _interopRequireDefault(_InlineSelectorOption);

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _NavigationItem = require('./NavigationItem');

var _NavigationItem2 = _interopRequireDefault(_NavigationItem);

var _Tag = require('./Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Tip = require('./Tip');

var _Tip2 = _interopRequireDefault(_Tip);

var _HRule = require('./HRule');

var _HRule2 = _interopRequireDefault(_HRule);

var _BackToTop = require('./BackToTop');

var _BackToTop2 = _interopRequireDefault(_BackToTop);

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Drawer = require('./Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _DrawerItem = require('./DrawerItem');

var _DrawerItem2 = _interopRequireDefault(_DrawerItem);

var _SlideUp = require('./SlideUp');

var _SlideUp2 = _interopRequireDefault(_SlideUp);

var _SlideUpHeader = require('./SlideUpHeader');

var _SlideUpHeader2 = _interopRequireDefault(_SlideUpHeader);

var _SlideUpBody = require('./SlideUpBody');

var _SlideUpBody2 = _interopRequireDefault(_SlideUpBody);

var _SegmentedControl = require('./SegmentedControl');

var _SegmentedControl2 = _interopRequireDefault(_SegmentedControl);

var _SegmentedControlItem = require('./SegmentedControlItem');

var _SegmentedControlItem2 = _interopRequireDefault(_SegmentedControlItem);

var _Sidelip = require('./Sidelip');

var _Sidelip2 = _interopRequireDefault(_Sidelip);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _MediaObject = require('./MediaObject');

var _MediaObject2 = _interopRequireDefault(_MediaObject);

var _MediaBody = require('./MediaBody');

var _MediaBody2 = _interopRequireDefault(_MediaBody);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = require('./CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Searchbar = require('./Searchbar');

var _Searchbar2 = _interopRequireDefault(_Searchbar);

var _SearchbarBtn = require('./SearchbarBtn');

var _SearchbarBtn2 = _interopRequireDefault(_SearchbarBtn);

var _SearchbarPlaceholder = require('./SearchbarPlaceholder');

var _SearchbarPlaceholder2 = _interopRequireDefault(_SearchbarPlaceholder);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _PickerOption = require('./PickerOption');

var _PickerOption2 = _interopRequireDefault(_PickerOption);

var _Loadmore = require('./Loadmore');

var _Loadmore2 = _interopRequireDefault(_Loadmore);

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Swipe = require('./Swipe');

var _Swipe2 = _interopRequireDefault(_Swipe);

var _SwipeItem = require('./SwipeItem');

var _SwipeItem2 = _interopRequireDefault(_SwipeItem);

var _Progressbar = require('./Progressbar');

var _Progressbar2 = _interopRequireDefault(_Progressbar);

var _Stepbar = require('./Stepbar');

var _Stepbar2 = _interopRequireDefault(_Stepbar);

var _StepbarItem = require('./StepbarItem');

var _StepbarItem2 = _interopRequireDefault(_StepbarItem);

var _Timeline = require('./Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TimelineItem = require('./TimelineItem');

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

var _Sticky = require('./Sticky');

var _Sticky2 = _interopRequireDefault(_Sticky);

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
    Icon: _Icon2.default,
    Tag: _Tag2.default,
    Tip: _Tip2.default,
    HRule: _HRule2.default,
    Badge: _Badge2.default,
    Media: _Media2.default,
    MediaObject: _MediaObject2.default,
    MediaBody: _MediaBody2.default,
    Card: _Card2.default,
    CardBody: _CardBody2.default,
    Swipe: _Swipe2.default,
    SwipeItem: _SwipeItem2.default,
    Navbar: _Navbar2.default,
    Tabbar: _Tabbar2.default,
    TabbarItem: _TabbarItem2.default,
    Navigation: _Navigation2.default,
    NavigationItem: _NavigationItem2.default,
    Drawer: _Drawer2.default,
    DrawerItem: _DrawerItem2.default,
    SegmentedControl: _SegmentedControl2.default,
    SegmentedControlItem: _SegmentedControlItem2.default,
    SlideUp: _SlideUp2.default,
    SlideUpHeader: _SlideUpHeader2.default,
    SlideUpBody: _SlideUpBody2.default,
    Sidelip: _Sidelip2.default,
    Searchbar: _Searchbar2.default,
    SearchbarBtn: _SearchbarBtn2.default,
    SearchbarPlaceholder: _SearchbarPlaceholder2.default,
    Picker: _Picker2.default,
    PickerOption: _PickerOption2.default,
    Loadmore: _Loadmore2.default,
    Mask: _Mask2.default,
    Alert: _Alert2.default,
    Loading: _Loading2.default,
    BackToTop: _BackToTop2.default,
    Checkbox: _Checkbox2.default,
    CheckboxGroup: _CheckboxGroup2.default,
    Radio: _Radio2.default,
    RadioGroup: _RadioGroup2.default,
    Toggle: _Toggle2.default,
    InputNumber: _InputNumber2.default,
    InputText: _InputText2.default,
    InputTextarea: _InputTextarea2.default,
    Selector: _Selector2.default,
    SelectorOption: _SelectorOption2.default,
    InlineSelector: _InlineSelector2.default,
    InlineSelectorOption: _InlineSelectorOption2.default,
    DatePicker: _DatePicker2.default,
    Progressbar: _Progressbar2.default,
    Stepbar: _Stepbar2.default,
    StepbarItem: _StepbarItem2.default,
    Timeline: _Timeline2.default,
    TimelineItem: _TimelineItem2.default,
    Sticky: _Sticky2.default
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