!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Card=t():e.Card=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var o=n(2)(n(1),n(3),null,null);e.exports=o.exports},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"card"}},function(e,t){e.exports=function(e,t,n,o){var r,c=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(r=e,c=e.default);var i="function"==typeof c?c.options:c;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),o){var f=i.computed||(i.computed={});Object.keys(o).forEach(function(e){var t=o[e];f[e]=function(){return t}})}return{esModule:r,exports:c,options:i}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",on:{click:function(t){e.$emit("click")}}},[e._t("default")],2)},staticRenderFns:[]}}])});