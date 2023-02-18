<!--
 * @Author: PengYH
 * @Date: 2022-03-21
 * @Description: 用户信息
-->

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
        <c-table :data="tableData" style="width: 100%">
            <template #table-header>
                <el-button type="primary">
                    <icon name="fa-bullhorn">{{ $t('member.broadcast') }}</icon>
                </el-button>
                <el-button type="primary"> {{ $t('member.distribute') }} </el-button>
            </template>
            <el-table-column type="selection" width="55" />
            <el-table-column label="ID" prop="id" width="140"></el-table-column>
            <el-table-column
                label="姓名"
                prop="name"
                width="100"
                :filters="[
                    { text: $t('member.male'), value: '' },
                    { text: $t('member.female'), value: '' },
                    { text: $t('member.halal'), value: '' }
                ]"
                :filter-method="filterHandler"
            ></el-table-column>
            <el-table-column label="票券" prop="voucher" width="110"></el-table-column>
            <el-table-column label="距离" prop="distance" width="200" sortable></el-table-column>
            <el-table-column label="加入时间" prop="joinDate" sortable></el-table-column>
            <el-table-column label="最近操作" prop="lastActionDate" sortable></el-table-column>
        </c-table>
    </PageContainer>
</template>
<script lang="ts" setup>
import { TableColumnCtx } from 'element-plus'
import { PageContainer, CTable, Icon } from '@/components'
const tableData = ref<any>([])
for (let i = 0; i < 15; i++) {
    tableData.value.push({
        id: `sp20230208${i.toString().padStart(3, '0')}`,
        name: `姓名${i + 1}`,
        voucher: `account${i}`,
        distance: '729220650@qq.com',
        joinDate: '13212341253',
        lastActionDate: '重庆市九龙坡区石桥铺街道'
    })
}

const filterHandler = (
    value: string,
    row: Record<string, unknown>,
    column: TableColumnCtx<unknown>
) => {
    const property = column.property
    return row[property] === value
}
</script>
