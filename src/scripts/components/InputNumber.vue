<template>
    <div class="input-number"
        :class="{'input-number-disabled': disabled}">
        <a class="input-number-minus"
            :class="{'disabled': currentValue <= min}"
            @click="minusHandle">
            <i class="icon icon-minus"></i>
        </a>
        <input type="number"
            v-model.lazy="currentValue"
            :disabled="disabled"
            class="input-number-input">
        <a class="input-number-plus"
            :class="{'disabled': currentValue >= max}"
            @click="plusHandle">
            <i class="icon icon-add"></i>
        </a>
    </div>
</template>

<script>
import Sync from '../mixins/sync';

export default {
    name: 'input-number',
    mixins: [Sync],
    props: {
        value: {
            type: [Number, String],
            default: 0,
        },
        max: {
            type: Number,
            default: Infinity,
        },
        min: {
            type: Number,
            default: -Infinity,
        },
        step: {
            type: Number,
            default: 1,
        },
    },
    methods: {
        // 减
        minusHandle() {
            if(this.disabled || this.currentValue <= this.min) return;

            this.currentValue = (+this.currentValue) - this.step;
        },
        // 加
        plusHandle() {
            if(this.disabled || this.currentValue >= this.max) return;

            this.currentValue = (+this.currentValue) + this.step;
        },
    },
};
</script>
