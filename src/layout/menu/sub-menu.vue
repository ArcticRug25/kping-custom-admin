<template>
    <el-sub-menu v-if="!route.meta?.hidden" :index="(route.meta?.id as string)">
        <template #title>
            <i v-if="route.meta?.icon" class="sub-icon">
                <Icon :name="(route.meta.icon as string)"></Icon>
            </i>
            <span>{{ generateTitle(route.meta?.title) }}</span>
        </template>
        <template v-for="sub in route.children" :key="sub.meta.id">
            <!-- 判断是否隐藏菜单 -->
            <template v-if="!sub.meta?.hidden">
                <!-- 二级菜单 -->
                <el-menu-item
                    v-if="sub.children && sub.children.length === 0"
                    :index="sub.meta?.id"
                >
                    {{ generateTitle(sub.meta?.title) }}
                </el-menu-item>
                <!-- 三级菜单及n级菜单 -->
                <sub-menu v-else :route="sub" />
            </template>
        </template>
    </el-sub-menu>
</template>

<script lang="ts" setup>
import { RouteRecordRaw } from 'vue-router'
import { Icon } from '@/components'
import { generateTitle } from '../../utils/i18n'

defineOptions({
    name: 'SubMenu'
})
defineProps<{ route: RouteRecordRaw }>()
</script>

<style lang="scss" scoped>
.sub-icon {
    @apply flex-center mr-5px;

    .c-icon {
        @apply pl-5px;
    }
}
</style>
