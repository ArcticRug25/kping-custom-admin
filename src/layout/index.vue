<template>
    <div class="app-container" :class="{ mobile: appStore.device === 'mobile' }">
        <div
            v-if="appStore.mobileMenuIsOpen"
            class="drawer-bg"
            @click="() => appStore.setMobileMenuIsOpen(false)"
        />
        <Header class="app-container-header"></Header>
        <Tab v-show="appStore.showTab" class="app-container-tab"></Tab>
        <Menu :class="['app-container-aside', { 'is-active': appStore.mobileMenuIsOpen }]"></Menu>
        <main class="app-container-body" :style="contentStyle">
            <div class="app-container-inner">
                <router-view v-slot="{ Component }">
                    <transition
                        :name="!appStore.disableAnimation ? appStore.animationType : ''"
                        mode="out-in"
                    >
                        <keep-alive
                            v-if="appStore.keepAlive"
                            :include="keepAliveNames"
                            :max="appStore.keepAliveCounter"
                        >
                            <component :is="Component" />
                        </keep-alive>
                        <component :is="Component" v-else />
                    </transition>
                </router-view>
            </div>
        </main>
    </div>
</template>
<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import { CSSProperties } from 'vue'
import Header from './header/header.vue'
import Menu from './menu/menu.vue'
import Tab from './tab/tab.vue'
defineOptions({
    name: 'Layout'
})
const appStore = useAppStore()
const tabStore = useTabStore()

const { width } = useWindowSize()
const WIDTH = 1024

watchEffect(() => {
    if (width.value < WIDTH && appStore.device === 'desktop') {
        appStore.menuIsCollapse = false
        appStore.setDevice('mobile')
    } else if (width.value >= WIDTH && appStore.device === 'mobile') {
        appStore.setDevice('desktop')
        appStore.setMobileMenuIsOpen(false)
    }
})

const keepAliveNames = computed(() => {
    const names: string[] = []
    tabStore.tabs.forEach((it) => {
        it.name && names.push(it.name as string)
    })
    return names
})
/** 菜单宽度 */
const asidewidth = computed(() => {
    return appStore.menuIsCollapse ? `${appStore.menuCollapseWidth}px` : `${appStore.menuWidth}px`
})

/** 内容区域样式 */
const contentStyle = computed<CSSProperties>(() => {
    return {
        paddingTop: appStore.showTab ? '100px' : '56px'
    }
})
</script>
<style lang="scss" scoped>
$menu-width: 220px;

.app-container {
    @apply wh-full relative;

    &-header {
        box-shadow: 0 1px 2px #00152914;

        @apply fixed h-56px z-1001 flex flex-y-center justify-between bg-white dark:bg-dark;
    }

    &-tab {
        box-shadow: 0 1px 2px #00152914;

        @apply fixed top-56px w-full z-1000 h-44px flex items-center plr-15px bg-white dark:bg-dark;
        @apply whitespace-nowrap;
    }

    &-aside {
        border-right: none !important;
        width: v-bind(asidewidth);
        box-shadow: 2px 0 8px #1d23290d;
        transition: all var(--el-transition-duration) ease-in-out;

        @apply fixed left-0 top-0 h-full z-1002 light:bg-white dark:bg-dark hidden;
        @apply lg:block;
    }

    &-body {
        @apply h-full;
    }

    &-header,
    &-tab,
    &-body {
        width: 100%;
        transition: all var(--el-transition-duration) ease-in-out;

        @media (min-width: 1024px) {
            margin-left: v-bind(asidewidth);
            width: calc(100% - v-bind(asidewidth));
        }
    }

    &-inner {
        @apply h-full p-12px;
    }

    &.mobile {
        .app-container-aside {
            @apply fixed top-0 left-0 z-1101 block;

            transform: translateX(-$menu-width);

            &.is-active {
                @apply translate-x-0;
            }
        }
    }

    .drawer-bg {
        @apply fixed top-0 left-0 w-full h-full bg-black opacity-50 z-1100;
    }
}

.dark {
    .app-container-header {
        box-shadow: 0 1px 2px #fcfdfd14;
    }

    .app-container-tab {
        box-shadow: 0 1px 2px #e0e3e60d;
    }

    .app-container-aside {
        box-shadow: 2px 0 8px #e0e3e60d;
    }
}
</style>
