<template>
    <el-divider>{{ t('app.theme') }}</el-divider>
    <Description :label="t('app.followSystem')">
        <el-switch v-model="appStore.followSystemTheme" />
    </Description>
    <Description :label="t('app.darkMode')">
        <el-switch
            v-model="appStore.themeMode"
            :disabled="appStore.followSystemTheme"
            active-value="dark"
            inactive-value="light"
        />
    </Description>
</template>
<script lang="ts" setup>
import Description from '@/layout/common/Description.vue'
import { useI18n } from '@/lang/index'
const { t } = useI18n()
const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.theme-mode :deep(.el-switch__core) {
    border: none;
}
</style>
