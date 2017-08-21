!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SwipeItem=e():t.SwipeItem=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var n=i(4)(i(2),i(5),null,null);t.exports=n.exports},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=void 0,n=document.documentElement.style;"MozAppearance"in n?i="gecko":"WebkitAppearance"in n?i="webkit":"string"==typeof navigator.cpuClass&&(i="trident");var s=(e.vendorPrefix={trident:"ms",gecko:"Moz",webkit:"Webkit"}[i],e.cssPrefix={trident:"-ms-",gecko:"-moz-",webkit:"-webkit-",presto:"-o-"}[i]);e.getPrefixStyle=function(t,e){var i=""+s+t;return i+" "+e}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=i(1);e.default={name:"swipe-item",data:function(){return{width:0,translate:0}},methods:{resetByTranslateX:function(){this.$el.style.transition="";var t=(0,n.getTranslate)(this.$el).x;t<0&&(0,n.setTranslate)(this.$el,this.width,0)},resetByNegative:function(t){this.$el.style.transition="",this.index!==this.$parent.activeIndex&&(0,n.setTranslate)(this.$el,t?-this.width:this.width,0)},init:function(){this.width=this.$el.offsetWidth,this.index=this.$parent.$children.indexOf(this);var t=this.width;this.$parent.defaultIndex===this.index&&(t=0),(0,n.setTranslate)(this.$el,t,0)},isInTheLimitRange:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=void 0,n=void 0;return e?(i=-this.width,n=0,this.index===this.$parent.activeIndex&&(i=0,n=this.width)):(i=0,n=this.width,this.index===this.$parent.activeIndex&&(i=-this.width,n=0)),t>=i&&t<=n},swipeToLeft:function(t){if(!t){this.$el.style.transition=(0,s.getPrefixStyle)("transform",this.$parent.speed+"ms "+this.$parent.easing);var e=-this.width;return this.index===this.$parent.activeIndex&&(e=0),void(0,n.setTranslate)(this.$el,e,0)}var i=this.width;this.index===this.$parent.activeIndex&&(i=0);var r=i+t;this.isInTheLimitRange(r)&&(0,n.setTranslate)(this.$el,r,0)},swipeToRight:function(t){if(!t){this.$el.style.transition=(0,s.getPrefixStyle)("transform",this.$parent.speed+"ms "+this.$parent.easing);var e=this.width;return this.index===this.$parent.activeIndex&&(e=0),void(0,n.setTranslate)(this.$el,e,0)}var i=-this.width;this.index===this.$parent.activeIndex&&(i=0);var r=i+t;this.isInTheLimitRange(r,!0)&&(0,n.setTranslate)(this.$el,r,0)}},mounted:function(){this.init()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setTranslate=e.cancelTranslate=e.getTranslate=void 0;var n=i(1),s=n.vendorPrefix+"Transform",r=e.getTranslate=function(t){var e={x:0,y:0};if(null===t||null===t.style)return e;var i=t.style[s],n=/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g.exec(i);return n&&(e.x=+n[1],e.y=+n[3]),e},a=e.cancelTranslate=function(t){if(null!==t&&null!==t.style){var e=t.style[s];e&&(e=e.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g,""),t.style[s]=e)}};e.setTranslate=function(t,e,i){if(t&&(null!==e||null!==i)){var n=r(t),o=e,l=i;null===e&&(o=n.x),null===i&&(l=n.y),a(t),t.style[s]+=" translate("+(o?o+"px":"0px")+", "+(l?l+"px":"0px")+")"}}},function(t,e){t.exports=function(t,e,i,n){var s,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),i&&(o._scopeId=i),n){var l=o.computed||(o.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:s,exports:r,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swipe-item",on:{webkitTransitionEnd:function(e){t.resetByTranslateX()}}},[t._t("default")],2)},staticRenderFns:[]}}])});