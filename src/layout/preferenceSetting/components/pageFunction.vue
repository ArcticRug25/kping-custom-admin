<template>
    <el-divider>{{ t('app.interfaceFunction') }}</el-divider>
    <Description :label="t('app.normalMenuWidth')">
        <el-input-number v-model="appStore.menuWidth" :min="220" />
    </Description>
    <Description :label="t('app.multiCache')">
        <el-switch v-model="appStore.keepAlive" />
    </Description>
    <Description :label="t('app.multiCacheNum')">
        <el-input-number
            v-model="appStore.keepAliveCounter"
            :min="1"
            :max="20"
            :disabled="!appStore.keepAlive"
        />
    </Description>
    <Description :label="t('app.componentSize')">
        <el-radio-group v-model="appStore.size">
            <el-radio-button label="large">{{ t('app.LargeSize') }}</el-radio-button>
            <el-radio-button label="default">{{ t('app.defaultSize') }}</el-radio-button>
            <el-radio-button label="small">{{ t('app.smallSize') }}</el-radio-button>
        </el-radio-group>
    </Description>
</template>

<script lang="ts" setup>
import Description from '@/layout/common/Description.vue'
import { useAppStore } from '@/store'
import { useI18n } from '@/lang/index'

const { t } = useI18n()
defineOptions({ name: 'PageFunction' })
const appStore = useAppStore()
</script>
