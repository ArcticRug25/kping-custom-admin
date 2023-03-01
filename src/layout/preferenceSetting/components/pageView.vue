<template>
    <el-divider>{{ t('app.interfaceDisplay') }}</el-divider>
    <Description :label="t('app.tabPage')">
        <el-switch v-model="appStore.showTab" />
    </Description>
    <Description :label="t('app.breadCrumbs')">
        <el-switch v-model="appStore.showBreadcrumb" />
    </Description>
    <Description :label="t('app.disableAnimation')">
        <el-switch v-model="appStore.disableAnimation" />
    </Description>
    <Description :label="t('app.animationType')">
        <el-select v-model="appStore.animationType" :disabled="appStore.disableAnimation">
            <el-option
                v-for="item in animationTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </Description>
</template>

<script lang="ts" setup>
import Description from '@/layout/common/Description.vue'
import { useAppStore } from '@/store'
import { useI18n } from '@/lang/index'

const { t } = useI18n()
defineOptions({
    name: 'PageView'
})

const animationTypeOptions = [
    { value: 'zoom-fade', label: t('app.animationList.zoomFade') },
    { value: 'zoom-out', label: t('app.animationList.zooOut') },
    { value: 'fade-slide', label: t('app.animationList.fadeSlide') },
    { value: 'fade', label: t('app.animationList.fade') },
    { value: 'fade-bottom', label: t('app.animationList.fadeBottom') },
    { value: 'fade-scale', label: t('app.animationList.fadeScale') }
]
const appStore = useAppStore()
</script>
