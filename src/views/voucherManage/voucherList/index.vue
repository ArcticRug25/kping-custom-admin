<template>
    <PageContainer>
        <c-table v-loading="loading" :data="tableData" style="width: 100%">
            <template #table-header>
                <el-button type="primary" @click="handleCreateVoucher">
                    <SvgIcon icon-class="plus" color="white">
                        {{ t('voucher.btn.create') }}</SvgIcon
                    >
                </el-button>
            </template>
            <el-table-column label="ID" prop="id" width="65" sortable></el-table-column>
            <el-table-column :label="t('voucher.table.amount')" prop="amount" width="167" sortable>
                <template #default="scope">
                    <span v-if="scope.row.isDiscount">{{ scope.row.amount }}%</span>
                    <span v-else>{{ scope.row.amount }}</span>
                </template>
            </el-table-column>
            <el-table-column
                :label="t('voucher.table.minimumExpense')"
                prop="minimumExpense"
                sortable
            ></el-table-column>
            <el-table-column
                :label="t('voucher.table.remainCount')"
                prop="remainCount"
                sortable
            ></el-table-column>
            <el-table-column
                :label="t('voucher.table.totalCount')"
                prop="totalCount"
                width="140"
                sortable
            ></el-table-column>
            <el-table-column
                :label="t('voucher.form.expireAt')"
                prop="expiredAt"
                sortable
            ></el-table-column>
            <el-table-column :label="t('voucher.table.qrcode')" width="120">
                <template #default="scope">
                    <el-popover effect="light" trigger="click" placement="top" width="auto">
                        <template #default>
                            <el-image :src="scope.row.qrCode" fit="cover" style="width: 150px" />
                        </template>
                        <template #reference>
                            <el-link type="primary">{{ t('voucher.table.qrcodeTag') }}</el-link>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>
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
        <CreateVoucherDialog
            v-model:visible="dialog.visible"
            :title="dialog.title"
            @handel-create-success="handelCreateSuccess"
        />
    </PageContainer>
</template>

<script setup lang="ts">
import { CTable, PageContainer, Pagination, SvgIcon } from '@/components'
import CreateVoucherDialog from '../dialog/createVoucher.vue'
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
    dialog: {
        visible: false,
        title: ''
    } as DialogType,
    tableData: [] as Voucher[],
    loading: false,
    total: 0
})

const { total, voucherQueryParam, loading, tableData, dialog } = toRefs(state)

const { getVoucherListByQuery } = useVoucherList()

const handleQueryVoucherList = async () => {
    state.loading = true
    const { total, voucherList } = await getVoucherListByQuery(state.voucherQueryParam)
    state.total = total
    state.tableData = voucherList
    state.loading = false
}

const handleCreateVoucher = () => {
    state.dialog = {
        title: t('voucher.dialog.title'),
        visible: true
    }
}

const handelCreateSuccess = () => {
    setTimeout(() => {
        handleQueryVoucherList()
    }, 300)
}

await handleQueryVoucherList()
</script>

<!-- <style lang="scss" scoped></style> -->
