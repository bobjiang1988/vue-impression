<template>
    <span class="lb-item"
        :class="{[`${bg}`]:bg,[`${text}`]:text}"
        :style="{color:color, borderColor: color}">
        {{name}}</span>
</template>

<script>
export default {
    name: 'lb',
    props: {
        name: { String },
        color: { String },
        text: { String },
        bg: { String },
    },
};
</script>
