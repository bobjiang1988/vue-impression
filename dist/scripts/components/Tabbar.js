!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tabbar=e():t.Tabbar=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i=n(5)(n(1),n(6),null,null);t.exports=i.exports},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=i(r),o=n(4);e.default={name:"tabbar",mixins:[a.default],props:{activeKey:{default:0}},methods:{setIndicatorWidth:function(){this.indicatorWidth=this.$el.offsetWidth/this.$children.length,this.$refs.indicator.style.width=this.indicatorWidth+"px"},initSelectedIndicator:function(){var t=this;this.$children.forEach(function(e,n){if(t.currentActiveKey===e.currentEventKey){var i=t.$refs.indicator,r=n*t.indicatorWidth;(0,o.setTranslate)(i,r,0)}})}},watch:{currentActiveKey:function(){this.initSelectedIndicator()}},mounted:function(){this.setIndicatorWidth(),this.initSelectedIndicator()},updated:function(){this.setIndicatorWidth(),this.initSelectedIndicator()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{activeKey:{},disabled:Boolean},data:function(){return{currentActiveKey:this.activeKey}},methods:{itemClickHandle:function(t){this.currentActiveKey!==t&&(this.currentActiveKey=t,this.$emit("change",t))}},created:function(){this.$on("itemClick",this.itemClickHandle)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=void 0,i=document.documentElement.style;"MozAppearance"in i?n="gecko":"WebkitAppearance"in i?n="webkit":"string"==typeof navigator.cpuClass&&(n="trident");var r=(e.vendorPrefix={trident:"ms",gecko:"Moz",webkit:"Webkit"}[n],e.cssPrefix={trident:"-ms-",gecko:"-moz-",webkit:"-webkit-",presto:"-o-"}[n]);e.getPrefixStyle=function(t,e){var n=""+r+t;return n+" "+e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setTranslate=e.cancelTranslate=e.getTranslate=void 0;var i=n(3),r=i.vendorPrefix+"Transform",a=e.getTranslate=function(t){var e={x:0,y:0};if(null===t||null===t.style)return e;var n=t.style[r],i=/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g.exec(n);return i&&(e.x=+i[1],e.y=+i[3]),e},o=e.cancelTranslate=function(t){if(null!==t&&null!==t.style){var e=t.style[r];e&&(e=e.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g,""),t.style[r]=e)}};e.setTranslate=function(t,e,n){if(t&&(null!==e||null!==n)){var i=a(t),s=e,c=n;null===e&&(s=i.x),null===n&&(c=i.y),o(t),t.style[r]+=" translate("+(s?s+"px":"0px")+", "+(c?c+"px":"0px")+")"}}},function(t,e){t.exports=function(t,e,n,i){var r,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var c=s.computed||(s.computed={});Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}})}return{esModule:r,exports:a,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar",class:{disabled:t.disabled}},[t._t("default"),t._v(" "),n("div",{ref:"indicator",staticClass:"tabbar-indicator"})],2)},staticRenderFns:[]}}])});