<template>
    <el-config-provider :size="appStore.size" :locale="locale">
        <Suspense>
            <router-view></router-view>
        </Suspense>
        <!-- 偏好设置 -->
        <preference-setting v-model="appStore.showPreferenceSetting" />
    </el-config-provider>
</template>

<script setup lang="ts">
// import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

import PreferenceSetting from '@/layout/preferenceSetting/preferenceSetting.vue'
import { useTheme } from './hooks/theme/useTheme'
import { useChangeTheme } from './hooks/theme/useChangeTheme'
import { useElementConfig } from './plugins/elementPlus'

const appStore = useAppStore()
const { locale } = useElementConfig()
useTheme()
useChangeTheme()

// window.$message = ElMessage
// window.$messageBox = ElMessageBox
// window.$notifiCation = ElNotification
</script>
