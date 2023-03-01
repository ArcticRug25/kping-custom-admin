<template>
    <el-drawer v-bind="$attrs" :title="t('app.preference')" :size="350">
        <div class="pb-20px">
            <!-- 主题模式 -->
            <ThemeMode />
            <!-- 系统主题 -->
            <Theme />
            <!-- 界面功能 -->
            <PageFunction />
            <!-- 界面展示 -->
            <PageView />
            <el-button type="danger" class="w-100% mt-15px" @click="appStore.$reset()">{{
                t('member.form.resetBtn')
            }}</el-button>
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
import ThemeMode from './components/themeMode.vue'
import Theme from './components/theme/theme.vue'
import PageView from './components/pageView.vue'
import PageFunction from './components/pageFunction.vue'
import { useI18n } from '@/lang/index'
const { t } = useI18n()
defineOptions({
    name: 'PreferenceSetting'
})
const appStore = useAppStore()
</script>
