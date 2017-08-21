'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _translate = require('./translate');

var draggable = function draggable(el, options) {
    var prevTranslateX = void 0,
        prevTranslateY = void 0,
        dragState = {
        dragging: false,
        effectEl: options.effectEl || el
    };

    var onTouchStartHandle = function onTouchStartHandle(event, sourceEvent) {
        if (dragState.dragging) return;

        var translate = (0, _translate.getTranslate)(dragState.effectEl);

        Object.assign(dragState, {
            startTimestamp: new Date(),
            pageX: event.pageX,
            pageY: event.pageY,
            translateX: translate.x,
            translateY: translate.y
        });

        document.onselectstart = function () {
            return false;
        };
        document.ondragstart = function () {
            return false;
        };

        if (options.onDragStart) options.onDragStart(dragState, sourceEvent);
    };

    var onTouchMoveHandle = function onTouchMoveHandle(event, sourceEvent) {
        var deltaX = event.pageX - dragState.pageX,
            deltaY = event.pageY - dragState.pageY,
            translateX = dragState.translateX + deltaX,
            translateY = dragState.translateY + deltaY,
            velocityTranslateX = translateX - prevTranslateX || translateX,
            velocityTranslateY = translateY - prevTranslateY || translateY;

        prevTranslateX = translateX;
        prevTranslateY = translateY;
        Object.assign(dragState, {
            dragging: true,
            velocityTranslateX: velocityTranslateX,
            velocityTranslateY: velocityTranslateY
        });

        if (options.onDrag) {
            options.onDrag(_extends({}, dragState, {
                deltaX: deltaX,
                deltaY: deltaY,
                translateX: translateX,
                translateY: translateY
            }), sourceEvent);
        }
    };

    var onTouchEndHandle = function onTouchEndHandle(event, sourceEvent) {
        Object.assign(dragState, {
            dragging: false
        });

        document.onselectstart = null;
        document.ondragstart = null;

        if (options.onDragEnd) options.onDragEnd(dragState, sourceEvent);

        dragState = {
            dragging: false,
            effectEl: options.effectEl || el
        };
    };

    el.addEventListener('touchstart', function (event) {
        return onTouchStartHandle(event.changedTouches[0] || event.touches[0], event);
    });
    el.addEventListener('touchmove', function (event) {
        return onTouchMoveHandle(event.changedTouches[0] || event.touches[0], event);
    });
    el.addEventListener('touchend', function (event) {
        return onTouchEndHandle(event.changedTouches[0] || event.touches[0], event);
    });
    el.addEventListener('touchcancel', function (event) {
        return onTouchEndHandle(event.changedTouches[0] || event.touches[0], event);
    });
};

exports.default = draggable;