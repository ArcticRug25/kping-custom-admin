<template>
    <div class="logo">
        <Icon class="logo-icon" name="ep:element-plus" size="26" />
        <div v-show="!appStore.isTabBarCollapse" class="logo-name pl-8px text-16px font-bold">
            KPing Merchant Admin
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@/components'
defineOptions({
    name: 'Logo'
})
const appStore = useAppStore()
</script>
<style lang="scss" scoped>
.logo {
    @apply h-56px flex-center  nowrap-hidden bg-white dark:bg-dark;

    &-name {
        transition: none;
    }

    &-name,
    &-icon {
        color: var(--el-color-primary);
    }
}
</style>
