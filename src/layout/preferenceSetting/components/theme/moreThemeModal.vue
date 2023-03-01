<template>
    <el-dialog v-bind="$attrs" width="630px">
        <h2 class="text-center c-primary">{{ t('app.ChineseTraditionalColors') }}</h2>
        <el-tabs v-model="activeName">
            <el-tab-pane
                v-for="item in colors"
                :key="item.label"
                :label="item.label"
                :name="item.label"
            >
                <Color>
                    <ColorItem
                        v-for="color in item.data"
                        :key="color.color"
                        :color="color.color"
                        :label="color.label"
                    />
                </Color>
            </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>
<script lang="ts" setup>
import { colors } from './themeList'
import ColorItem from './colorItem.vue'
import Color from './color.vue'
import { useI18n } from '@/lang/index'
const { t } = useI18n()
const activeName = ref('红色系')
</script>

<style scoped>
:deep(.el-tabs__nav-wrap)::after {
    height: 0;
}
</style>
