!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Loading=t():e.Loading=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var o=n(2)(n(1),n(3),null,null);e.exports=o.exports},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"loading",props:{size:{type:String,validator:function(e){return["sm","lg"].indexOf(e)>-1}},theme:{type:String,validator:function(e){return["primary","secondary"].indexOf(e)>-1}}}}},function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var c=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}})}return{esModule:r,exports:i,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"loading",class:(o={},o["loading-"+e.size]=e.size,o["loading-"+e.theme]=e.theme,o),attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"loading-path",attrs:{cx:"50",cy:"50",r:"23",fill:"none"}})]);var o},staticRenderFns:[]}}])});