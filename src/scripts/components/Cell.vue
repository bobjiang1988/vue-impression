<template>
    <router-link v-if="!disabled && to"
        :to="to"
        class="cell cell-link"
        :class="{'cell-disabled': disabled,'cell-no-gap': !hasGap, 'cell-sm': size=='sm'}">
        <div class="cell-header"
            v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <span class="cell-body cell-sub-header-panel"
            v-if="$slots.subheader">
            <div class="cell-sub-header">
                <slot name="subheader"></slot>
            </div>
            <div class="cell-sub-body">
                <slot></slot>
            </div>
        </span>
        <span class="cell-body"
            v-else>
            <slot></slot>
        </span>
        <div class="cell-footer"
            v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
        <i v-if="hasArrow"
            class="icon icon-right cell-arrow" />
    </router-link>

    <a v-else
        :href="!disabled && href"
        @click="!disabled && $emit('click')"
        class="cell"
        :class="{'cell-link': clickable,'cell-disabled': disabled,'cell-no-gap': !hasGap, 'cell-sm': size=='sm'}">
        <div class="cell-header"
            v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <span class="cell-body cell-sub-header-panel"
            v-if="$slots.subheader">
            <div class="cell-sub-header">
                <slot name="subheader"></slot>
            </div>
            <div class="cell-sub-body">
                <slot></slot>
            </div>
        </span>
        <span class="cell-body"
            v-else>
            <slot></slot>
        </span>
        <div class="cell-footer"
            v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
        <i v-if="hasArrow"
            class="icon icon-right cell-arrow"></i>
    </a>
</template>

<script>
export default {
    name: 'cell',
    props: {
        to: [String, Object],
        href: String,
        disabled: Boolean,
        hasGap: {
            type: Boolean,
            default: true,
        },
        size: String,
        hasArrow: {
            type: Boolean,
            default() {
                // 有href和to时默认为true
                return !!(this.href || this.to);
            },
        },
    },
    computed: {
        clickable() {
            return !this.disabled && (this.href || this._events.click);
        },
    },
};
</script>
