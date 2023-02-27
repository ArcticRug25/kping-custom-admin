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
        <c-table ref="memberTableRef" v-loading="loading" :data="tableData" style="width: 100%">
            <template #table-header>
                <el-button type="primary">
                    <icon name="fa-bullhorn" @click="handleBroadcast">{{
                        t('member.broadcast')
                    }}</icon>
                </el-button>
                <el-button type="primary"> {{ t('member.distribute') }} </el-button>
            </template>
            <el-table-column type="selection" width="55" />
            <el-table-column label="ID" prop="id" width="80"></el-table-column>
            <el-table-column :label="t('member.table.name')" prop="username" width="200">
                <template #header>
                    <div flex justify-between>
                        <div>{{ t('member.table.name') }}</div>
                        <div flex>
                            <el-tag
                                size="small"
                                class="member-column-tag"
                                :effect="sortArr.includes(Gender.Male) ? 'dark' : 'plain'"
                                @click="handleSortByTag(Gender.Male)"
                                >{{ t('member.male') }}</el-tag
                            >
                            <el-tag
                                size="small"
                                ml-2
                                type="danger"
                                class="member-column-tag"
                                :effect="sortArr.includes(Gender.Female) ? 'dark' : 'plain'"
                                @click="handleSortByTag(Gender.Female)"
                                >{{ t('member.female') }}</el-tag
                            >
                            <el-tag
                                size="small"
                                ml-2
                                type="success"
                                class="member-column-tag"
                                :effect="sortArr.includes('isHalal') ? 'dark' : 'plain'"
                                @click="handleSortByTag('isHalal')"
                                >{{ t('member.halal') }}</el-tag
                            >
                        </div>
                    </div>
                </template>
                <template #default="scope">
                    <div flex>
                        <div>{{ scope.row.username }}</div>
                        <el-tag v-if="scope.row.gender === Gender.Male" ml-2 size="small">{{
                            t('member.male')
                        }}</el-tag>
                        <el-tag
                            v-if="scope.row.gender === Gender.Female"
                            size="small"
                            ml-2
                            type="danger"
                            >{{ t('member.female') }}</el-tag
                        >
                        <el-tag v-if="scope.row.isHalal" size="small" ml-2 type="success">{{
                            t('member.halal')
                        }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column :label="t('member.table.voucher')" prop="voucher" width="140">
                <template #default="scope">
                    <div class="flex">
                        <div class="w-20">
                            <icon color="#F56C6C" name="fa-ticket">
                                {{ scope.row.discountNum }}
                            </icon>
                        </div>
                        <div class="w-20">
                            <icon color="#65B687" name="fa-ticket">
                                {{ scope.row.unDiscountNum }}
                            </icon>
                        </div>
                    </div>
                </template>
            </el-table-column>
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
import dayjs from 'dayjs'
import { Action, ElMessage, ElMessageBox } from 'element-plus'
import { getMemberList } from '@/api/member'
import { Gender, GetMemberListParam, Member } from '@/api/model/memberModel'
import { CTable, Icon, PageContainer, Pagination } from '@/components'
import { useI18n } from '@/lang/index'
import { MemberType } from '../../../api/model/memberModel'

const { t } = useI18n()

const state = reactive({
    queryParam: {
        pageNum: 1,
        pageSize: 10,
        isHalal: undefined,
        actionEnd: undefined,
        actionStart: undefined,
        distanceFrom: undefined,
        distanceTo: undefined,
        gender: undefined,
        joinEnd: undefined,
        joinStart: undefined,
        orderBy: undefined
    } as GetMemberListParam,
    sortArr: [] as MemberType[],
    tableData: [] as Member[],
    total: 0,
    loading: true
})

const { queryParam, total, sortArr, tableData, loading } = toRefs(state)

const memberTableRef = ref<any>(null)

async function getMemberListByQuery() {
    state.loading = true
    const [err, memberList] = await getMemberList(state.queryParam)
    if (err) {
        console.warn('err', err)
    } else {
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
    state.loading = false
    return memberList?.rows ?? []
}

const handleQuery = async () => {
    memberTableRef.value?.$refs.elTable.clearSort()
    tableData.value = await getMemberListByQuery()
}

const handleSortByTag = async (type: MemberType) => {
    const typeIdx = state.sortArr.indexOf(type)
    if (typeIdx === -1) {
        const maleIdx = state.sortArr.indexOf(Gender.Male)
        const femaleIdx = state.sortArr.indexOf(Gender.Female)
        if (type === Gender.Female && maleIdx > -1) {
            state.sortArr.splice(maleIdx, 1)
        } else if (type === Gender.Male && femaleIdx > -1) {
            state.sortArr.splice(femaleIdx, 1)
        }
        state.sortArr.push(type)
    } else {
        state.sortArr.splice(typeIdx, 1)
    }
    state.queryParam.orderBy = state.sortArr
    tableData.value = await getMemberListByQuery()
}

const handleBroadcast = () => {
    ElMessageBox.prompt('Please input your e-mail', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern:
            /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email'
    })
        .then(({ value }) => {
            ElMessage({
                type: 'success',
                message: `Your email is:${value}`
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Input canceled'
            })
        })
}

onMounted(async () => {
    tableData.value = await getMemberListByQuery()
})
</script>

<style lang="scss">
.member-column-tag {
    @apply transition cursor-pointer;
}
</style>
