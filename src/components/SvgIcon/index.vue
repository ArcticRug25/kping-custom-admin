<template>
    <svg aria-hidden="true" class="svg-icon">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>

<script setup lang="ts">
const props = defineProps({
    prefix: {
        type: String,
        default: 'icon'
    },
    iconClass: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ''
    }
})

const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`)
</script>

<style scoped>
.svg-icon {
    overflow: hidden;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
}
</style>
