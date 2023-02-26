<template>
    <PageContainer>
        <template #header>
            <el-form inline>
                <el-form-item label="用户姓名：">
                    <el-input class="w-250px"></el-input>
                </el-form-item>
                <el-form-item label="用户编号：">
                    <el-input class="w-250px"></el-input>
                </el-form-item>
                <el-form-item label="用户状态：">
                    <el-select class="w-250px"></el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">
                        <icon name="ep:search"> 查询 </icon>
                    </el-button>
                    <el-button>
                        <icon name="ep:brush">重置</icon>
                    </el-button>
                </el-form-item>
            </el-form>
        </template>
        <c-table ref="memberTable" :data="tableData" style="width: 100%">
            <template #table-header>
                <el-button type="primary">
                    <icon name="fa-bullhorn">{{ t('member.broadcast') }}</icon>
                </el-button>
                <el-button type="primary"> {{ t('member.distribute') }} </el-button>
            </template>
            <el-table-column type="selection" width="55" />
            <el-table-column label="ID" prop="id" width="80"></el-table-column>
            <el-table-column
                :label="t('member.table.name')"
                prop="username"
                width="150"
                :filters="[
                    { text: t('member.male'), value: Gender.Male },
                    { text: t('member.female'), value: Gender.Female },
                    { text: t('member.halal'), value: 'isHalal' }
                ]"
                :filter-method="filterHandler"
            ></el-table-column>
            <el-table-column
                :label="t('member.table.voucher')"
                prop="voucher"
                width="140"
            ></el-table-column>
            <el-table-column
                :label="t('member.table.distance')"
                prop="distance"
                width="120"
                sortable
            ></el-table-column>
            <el-table-column
                :label="t('member.table.joinDate')"
                prop="joinTime"
                sortable
            ></el-table-column>
            <el-table-column
                :label="t('member.table.lastAction')"
                prop="lastAction"
                sortable
            ></el-table-column>
            <template #table-footer>
                <Pagination
                    v-if="total > 0"
                    v-model:page="queryParam.pageNum"
                    v-model:limit="queryParam.pageSize"
                    :total="total"
                    @pagination="handleQuery"
                />
            </template>
        </c-table>
    </PageContainer>
</template>
<script lang="ts" setup>
import { TableColumnCtx } from 'element-plus'
import dayjs from 'dayjs'
import { PageContainer, CTable, Icon, Pagination } from '@/components'
import { useI18n } from '../../../lang/index'
import { getMemberList } from '../../../api/member'
import { Gender, Member, GetMemberListParam } from '../../../api/model/memberModel'
const { t } = useI18n()
const tableData = ref<any>([])

const state = reactive({
    queryParam: {
        pageNum: 1,
        pageSize: 10
    } as GetMemberListParam,
    total: 0
})

const { queryParam, total } = toRefs(state)

const memberTable = ref<any>(null)

async function getMemberListByParam() {
    const [_, memberList] = await getMemberList(state.queryParam)
    if (memberList) {
        state.total = memberList.total
        memberList.rows.forEach((member) => {
            member.joinTime = dayjs(member.joinTime).format('YYYY-MM-DD HH:mm:ss')
            member.distance = Number(member.distance)
            member.lastAction = dayjs(member.lastAction).format('YYYY-MM-DD HH:mm:ss')
            member.discountNum = member.vouchers.reduce((num, voucher) => {
                if (voucher.isDiscount) {
                    num++
                }
                return num
            }, 0)
            member.unDiscountNum = member.vouchers.length - member.discountNum
        })
    }

    return memberList?.rows
}

const handleQuery = async () => {
    memberTable.value?.$refs.elTable.clearSort()
    tableData.value = await getMemberListByParam()
}

const filterHandler = (value: string, row: Member) => {
    if (value === 'isHalal') {
        return row[value]
    }
    return row.gender === value
}

onMounted(async () => {
    tableData.value = await getMemberListByParam()
})
</script>
