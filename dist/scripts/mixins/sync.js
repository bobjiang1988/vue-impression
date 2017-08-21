'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _type = require('../utils/type');

exports.default = {
    props: {
        value: {},
        disabled: Boolean
    },
    data: function data() {
        return {
            currentValue: this.value
        };
    },

    watch: {
        value: function value(val) {
            this.currentValue = val;
        },
        currentValue: function currentValue(val) {
            if (this.disabled) return;

            if ((0, _type.isArray)(val) && val.length === 0) {
                this.currentValue = undefined;

                return;
            }

            this.$emit('input', val);
            this.$emit('change', val, this.currentText);
        }
    }
};