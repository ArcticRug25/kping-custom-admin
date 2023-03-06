<template>
    <PageContainer>
        <c-table v-loading="loading" :data="tableData" style="width: 100%">
            <template #table-header>
                <el-button type="primary">
                    <SvgIcon icon-class="plus" color="white">
                        {{ t('voucher.btn.create') }}</SvgIcon
                    >
                </el-button>
            </template>
            <el-table-column type="selection" width="55" />
            <el-table-column label="ID" prop="id" width="80" sortable></el-table-column>
            <el-table-column
                :label="t('voucher.form.expireAt')"
                prop="expiredAt"
                width="160"
                sortable
            ></el-table-column>
            <template #table-footer>
                <Pagination
                    v-if="total > 0"
                    v-model:page="voucherQueryParam.pageNum"
                    v-model:limit="voucherQueryParam.pageSize"
                    :total="total"
                    @pagination="handleQueryVoucherList"
                />
            </template>
        </c-table>
    </PageContainer>
</template>

<script setup lang="ts">
import { CTable, PageContainer, Pagination, SvgIcon } from '@/components'
import { useI18n } from '@/lang/index'
import useVoucherList from './useVoucherList'
import { Voucher } from '@/api/model/voucherModel'
defineOptions({
    name: 'VoucherList'
})
const { t } = useI18n()
const state = reactive({
    voucherQueryParam: {
        pageNum: 1,
        pageSize: 10
    },
    tableData: [] as Voucher[],
    loading: false,
    total: 0
})

const { total, voucherQueryParam, loading, tableData } = toRefs(state)

const { getVoucherListByQuery } = useVoucherList()

const handleQueryVoucherList = async () => {
    state.loading = true
    const { total, voucherList } = await getVoucherListByQuery(state.voucherQueryParam)
    state.total = total
    state.tableData = voucherList
    state.loading = false
}

await handleQueryVoucherList()
</script>

<!-- <style lang="scss" scoped></style> -->
