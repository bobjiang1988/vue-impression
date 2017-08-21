!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.BackToTop=e():t.BackToTop=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var n=o(4)(o(1),o(5),null,null);t.exports=n.exports},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(3),r=o(2);e.default={name:"back-to-top",data:function(){return{active:!1}},methods:{scrollToTopHandle:function(){var t=this,e=this.getScrollTop(),o=Date.now(),r=function r(){var c=Date.now(),s=c-o;t.setScrollTop((0,n.easeInOutCubic)(s,e,0,450)),s<450&&requestAnimationFrame(r)};requestAnimationFrame(r),this.active=!1},getScrollTop:function(){return this.scrollTargetEl===document?window.pageYOffset:this.scrollTargetEl.scrollTop},setScrollTop:function(t){return this.scrollTargetEl===document?(document.body.scrollTop=t,void(document.documentElement.scrollTop=t)):void(this.scrollTargetEl.scrollTop=t)},touchStartHandle:function(){this._offsetY=this.scrollTargetEl===document?window.pageYOffset:this.scrollTargetEl.scrollTop},touchEndHandle:function(){var t=this.scrollTargetEl===document?window.pageYOffset:this.scrollTargetEl.scrollTop;t<this._offsetY&&this._offsetY-t>60?this.active=!0:Math.abs(this._offsetY-t)>60&&(this.active=!1),this._offsetY=t}},mounted:function(){this.scrollTargetEl=(0,r.getScrollContainer)(this.$el),this.scrollTargetEl.addEventListener("touchstart",this.touchStartHandle),this.scrollTargetEl.addEventListener("touchend",this.touchEndHandle)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(e.contains=function(t,e){if(t.compareDocumentPosition)return t===e||!!(16&t.compareDocumentPosition(e));if(t.contains&&1===e.nodeType)return t.contains(e)&&t!==e;for(var o=e;o!==document;)if(o=o.parentNode,o===t)return!0;return!1},e.hasScrollbar=function(t){return!!t&&t.scrollHeight>t.offsetHeight});e.getScrollContainer=function(t){for(var e=t;e!==document;)if(e=e.parentNode,o(e))return e;return document}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.easeInOutCubic=function(t,e,o,n){var r=o-e,c=t/(n/2);return c<1?r/2*c*c*c+e:r/2*((c-=2)*c*c+2)+e}},function(t,e){t.exports=function(t,e,o,n){var r,c=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,c=t.default);var i="function"==typeof c?c.options:c;if(e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),o&&(i._scopeId=o),n){var a=i.computed||(i.computed={});Object.keys(n).forEach(function(t){var e=n[t];a[t]=function(){return e}})}return{esModule:r,exports:c,options:i}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"back-to-top",class:{active:t.active},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.scrollToTopHandle(e)}}},[o("icon",{staticClass:"back-to-top-icon",attrs:{name:"arrow-up"}})],1)},staticRenderFns:[]}}])});