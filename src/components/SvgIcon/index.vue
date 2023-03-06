<template>
    <div class="c-icon flex-y-center">
        <svg v-bind="$attrs" aria-hidden="true" :width="width" :height="width" class="svg-icon">
            <use :xlink:href="symbolId" :fill="color" />
        </svg>
        <div v-if="$slots.default" class="ml-4px">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'SvgIcon'
})

const props = withDefaults(
    defineProps<{
        prefix?: string
        iconClass: string
        color?: string
        width?: string | number
    }>(),
    {
        prefix: 'icon',
        color: undefined,
        width: 16
    }
)

const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`)
</script>

<style lang="scss" scoped>
.svg-icon {
    @apply overflow-hidden fill-current;

    vertical-align: -0.15em;
}
</style>
