<template>
    <div class="c-table h-full flex-1 flex flex-col">
        <!-- 表格头区域 -->
        <div class="c-table-header mb-10px">
            <slot name="table-header"></slot>
        </div>
        <!-- 表格区域 -->
        <el-table v-bind="$attrs" ref="elTable" border>
            <slot></slot>
        </el-table>
        <!-- 表格尾区域 -->
        <div class="c-table-footer">
            <slot name="table-footer"> </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { props } from './table-props'
defineOptions({ name: 'CTable', inheritAttrs: false })
defineProps(props)
</script>
<style scoped>
:deep(.el-table__header) th {
    /* @apply bg-#e9ebf3 dark:bg-#292e34; */
}
</style>
