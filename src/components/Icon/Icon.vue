<template>
    <div class="c-icon flex-y-center">
        <iconify v-bind="$attrs" :icon="name" :width="size" :height="size" :color="color"></iconify>
        <div v-if="$slots.default" class="ml-5px">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Icon as Iconify } from '@iconify/vue'
defineOptions({
    name: 'Icon'
})
withDefaults(
    defineProps<{
        /** 图标名称 */
        name: string
        /** 图标大小 */
        size?: number | string
        /** 图标颜色 */
        color?: string
    }>(),
    {
        size: 16,
        color: undefined
    }
)
</script>

<style lang="scss" scoped>
.c-icon {
    @apply inline-flex items-center relative;

    &::before {
        @apply absolute -left-10px -top-20px -bottom-20px -right-10px block bg-transparent;

        /* stylelint-disable-next-line string-quotes */
        content: '';
    }
}
</style>
