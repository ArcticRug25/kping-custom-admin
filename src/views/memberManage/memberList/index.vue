<template>
    <PageContainer>
        <template #header>
            <el-form ref="memberFilterFormRef" :rules="rules" :model="filterForm" inline>
                <el-form-item :label="t('member.form.memberName') + ':'" prop="name">
                    <el-input
                        v-model="filterForm.name"
                        :placeholder="t('member.form.memberNamePlaceholder')"
                        w-50
                        maxlength="30"
                        clearable
                    />
                </el-form-item>
                <el-form-item :label="t('member.table.distance') + ':'" prop="distanceRange">
                    <el-col :span="11">
                        <el-select
                            v-model="filterForm.distanceRange[0]"
                            :placeholder="t('member.form.distanceFrom')"
                        >
                            <el-option
                                v-for="item in leftDistanceOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :span="11">
                        <el-select
                            v-model="filterForm.distanceRange[1]"
                            :placeholder="t('member.form.distanceTo')"
                        >
                            <el-option
                                v-for="item in rightDistanceOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item :label="t('member.table.joinDate') + ':'" prop="joinTimeRange">
                    <el-date-picker
                        v-model="filterForm.joinTimeRange"
                        type="daterange"
                        unlink-panels
                        :range-separator="t('member.form.toSeparator')"
                        :start-placeholder="t('member.form.startDate')"
                        :end-placeholder="t('member.form.endDate')"
                    />
                </el-form-item>
                <el-form-item :label="t('member.table.lastAction') + ':'" prop="lastActionRange">
                    <el-date-picker
                        v-model="filterForm.lastActionRange"
                        unlink-panels
                        type="daterange"
                        :range-separator="t('member.form.toSeparator')"
                        :start-placeholder="t('member.form.startDate')"
                        :end-placeholder="t('member.form.endDate')"
                    />
                </el-form-item>
                <el-form-item :label="t('member.halal') + ':'" prop="isHalal">
                    <el-radio-group v-model="filterForm.isHalal">
                        <el-radio-button :label="1">{{ t('member.form.yes') }}</el-radio-button>
                        <el-radio-button :label="0">{{ t('member.form.no') }}</el-radio-button>
                        <el-radio-button :label="undefined">{{
                            t('member.form.all')
                        }}</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item :label="t('member.table.gender') + ':'" prop="gender">
                    <el-radio-group v-model="filterForm.gender">
                        <el-radio-button :label="Gender.Male">{{
                            t('member.form.male')
                        }}</el-radio-button>
                        <el-radio-button :label="Gender.Female">{{
                            t('member.form.female')
                        }}</el-radio-button>
                        <el-radio-button :label="undefined">{{
                            t('member.form.all')
                        }}</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSearch(memberFilterFormRef)">
                        <icon name="ep:search"> {{ t('member.form.searchBtn') }} </icon>
                    </el-button>
                    <el-button @click="resetSearchForm(memberFilterFormRef)">
                        <icon name="ep:brush">{{ t('member.form.resetBtn') }}</icon>
                    </el-button>
                </el-form-item>
            </el-form>
        </template>
        <c-table ref="memberTableRef" v-loading="loading" :data="tableData" style="width: 100%">
            <template #table-header>
                <el-button type="primary">
                    <icon name="fa-bullhorn">{{ t('member.broadcast') }}</icon>
                </el-button>
                <el-button type="primary"> {{ t('member.distribute') }} </el-button>
            </template>
            <el-table-column type="selection" width="55" />
            <el-table-column label="ID" prop="id" width="80" sortable></el-table-column>
            <el-table-column :label="t('member.table.name')" prop="username" width="200" sortable>
                <template #header>
                    <span>{{ t('member.table.name') }}</span>
                    <el-tag
                        size="small"
                        type="success"
                        class="member-column-tag halal-tag"
                        :effect="sortArr.includes('isHalal') ? 'dark' : 'plain'"
                        @click.stop="handleSortByTag('isHalal')"
                        >{{ t('member.halal') }}</el-tag
                    >
                </template>
                <template #default="scope">
                    <div flex items-center>
                        <div>{{ scope.row.username }}</div>
                        <SvgIcon
                            v-if="scope.row.isHalal"
                            text-xl
                            ml-2
                            color="#65B687"
                            icon-class="halal"
                        />
                    </div>
                </template>
            </el-table-column>
            <el-table-column :label="t('member.table.gender')" prop="gender" width="74" sortable>
                <template #default="scope">
                    <el-tag v-if="scope.row.gender === Gender.Male" ml-2 w-30px size="small">{{
                        t('member.male')
                    }}</el-tag>
                    <el-tag
                        v-if="scope.row.gender === Gender.Female"
                        size="small"
                        ml-2
                        w-30px
                        type="danger"
                        >{{ t('member.female') }}</el-tag
                    >
                </template>
            </el-table-column>
            <el-table-column :label="t('member.table.voucher')" header-align="center">
                <el-table-column prop="unDiscountNum" sortable width="100">
                    <template #header>
                        <SvgIcon
                            class="voucher-icon"
                            icon-class="undiscount-voucher"
                            color="#0078FF"
                        />
                    </template>
                </el-table-column>
                <el-table-column prop="discountNum" sortable width="100">
                    <template #header>
                        <SvgIcon
                            class="voucher-icon"
                            icon-class="discount-voucher"
                            color="#0078FF"
                        />
                    </template>
                </el-table-column>
            </el-table-column>
            <el-table-column
                :label="t('member.table.distance')"
                prop="distance"
                :formatter="distanceColFormatter"
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
                    v-model:page="memberQueryParam.pageNum"
                    v-model:limit="memberQueryParam.pageSize"
                    :total="total"
                    @pagination="handleQueryMemberList"
                />
            </template>
        </c-table>
    </PageContainer>
</template>
<script lang="ts" setup>
import { FormInstance, FormRules, TableColumnCtx } from 'element-plus'
import { Gender, GetMemberListParam, Member, MemberType } from '@/api/model/memberModel'
import { CTable, Icon, PageContainer, Pagination, SvgIcon } from '@/components'
import { useI18n } from '@/lang/index'
import { leftDistanceOptions, rightDistanceOptions } from '../distanceOption'
import useMemberList from './useMemberList'
import { validateDistance } from '@/utils/validateRules'

defineOptions({
    name: 'MemberList'
})

const { t } = useI18n()

const state = reactive({
    memberQueryParam: {
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
        orderBy: undefined,
        name: undefined
    } as GetMemberListParam,
    filterForm: {
        gender: undefined,
        isHalal: undefined,
        joinTimeRange: [] as any,
        lastActionRange: [] as any,
        distanceRange: [],
        name: ''
    },
    rules: {
        distanceRange: [{ validator: validateDistance, trigger: 'blur' }]
    } as FormRules,
    sortArr: [] as MemberType[],
    tableData: [] as Member[],
    total: 0,
    loading: true,
    memberTableRef: undefined as any,
    memberFilterFormRef: undefined as FormInstance | undefined
})

const {
    memberQueryParam,
    total,
    sortArr,
    tableData,
    loading,
    filterForm,
    rules,
    memberTableRef,
    memberFilterFormRef
} = toRefs(state)

const { getMemberListByQuery } = useMemberList()

const handleQueryMemberList = async () => {
    state.loading = true
    memberTableRef.value?.$refs.elTable.clearSort()
    const { total, memberList } = await getMemberListByQuery(state.memberQueryParam)
    tableData.value = memberList
    state.total = total
    state.loading = false
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
    state.memberQueryParam.orderBy = state.sortArr
    handleQueryMemberList()
}

const handleSearch = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    const canSearch = await formEl.validate().catch(() => undefined)
    if (!canSearch) return
    const {
        joinTimeRange: [joinStart, joinEnd],
        lastActionRange: [actionStart, actionEnd],
        distanceRange: [distanceFrom, distanceTo],
        ...otherFields
    } = filterForm.value

    state.memberQueryParam = {
        ...state.memberQueryParam,
        ...otherFields,
        joinStart,
        joinEnd,
        actionStart,
        actionEnd,
        distanceFrom,
        distanceTo
    }

    handleQueryMemberList()
}

const resetSearchForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const distanceColFormatter = (row: Member, column: TableColumnCtx<Member>, cellValue: string) => {
    return Number(cellValue) >= 1 ? `${cellValue}km` : `${Number(cellValue) * 1000}m`
}

onMounted(async () => {
    handleQueryMemberList()
})
</script>

<style lang="scss" scoped>
.member-column-tag {
    @apply transition cursor-pointer;

    &.halal-tag {
        @apply absolute right-4 top-50% -translate-y-50%;
    }
}

.voucher-icon {
    @apply text-3xl mr-2;
}

:deep(.el-form-item__error) {
    z-index: 999;
}

:deep(.cell):has(.voucher-icon) {
    @apply flex items-center;
}
</style>
