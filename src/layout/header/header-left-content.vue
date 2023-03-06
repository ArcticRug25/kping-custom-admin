<template>
    <div class="flex-1 flex h-full items-center">
        <div class="header-item" @click="onMenuCollapse">
            <icon v-show="appStore.menuIsCollapse" name="ep:expand" size="20" />
            <icon v-show="!appStore.menuIsCollapse" name="ep:fold" size="20" />
        </div>
        <div class="bread-crumb-container">
            <Breadcrumb />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from '@/components'
import Breadcrumb from './components/breadcrumb.vue'
defineOptions({
    name: 'HeaderLeftContent'
})

const appStore = useAppStore()
const onMenuCollapse = () => {
    if (appStore.device === 'mobile') {
        appStore.mobileMenuIsOpen = !appStore.mobileMenuIsOpen
    } else {
        appStore.menuIsCollapse = !appStore.menuIsCollapse
    }
}
</script>

<style lang="scss" scoped>
.bread-crumb-container {
    @apply ml-10px;

    .el-breadcrumb {
        @apply hidden md:block;
    }
}
</style>
