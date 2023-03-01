<template>
    <el-divider>{{ t('app.systemTopic') }}</el-divider>
    <!-- 主题选择 -->
    <theme-select />
    <div class="mt-10px">
        <el-button type="default" class="w-full" @click="moreThemeVisible = true">
            {{ t('app.moreColors') }}
        </el-button>
    </div>
    <!-- 更多颜色弹窗 -->
    <more-theme-modal v-model="moreThemeVisible" />
</template>
<script lang="ts" setup>
import ThemeSelect from './themeSelect.vue'
import MoreThemeModal from './moreThemeModal.vue'
import { useI18n } from '@/lang/index'
const { t } = useI18n()
const moreThemeVisible = ref(false)
</script>
