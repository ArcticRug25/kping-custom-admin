<template>
    <el-dialog v-model="dialogVisible" :title="props.title" @closed="handleOnClosed">
        <el-form
            ref="voucherFormRef"
            :model="voucherForm"
            :rules="voucherRule"
            :label-width="appStore.language === 'en' ? '126px' : ''"
        >
            <!-- 票券数量 -->
            <el-form-item :label="t('voucher.form.count')" required prop="totalCount">
                <el-input-number
                    v-model="voucherForm.totalCount"
                    :min="1"
                    :max="999"
                    step-strictly
                    :placeholder="t('voucher.form.placeholder.count')"
                    controls-position="right"
                ></el-input-number>
            </el-form-item>
            <el-form-item :label="t('voucher.form.expireAt')" required prop="expiredAt">
                <el-date-picker
                    v-model="voucherForm.expiredAt"
                    class="voucher-date-select"
                    type="date"
                    :placeholder="t('voucher.form.placeholder.expireAt')"
                />
            </el-form-item>
            <el-form-item :label="t('voucher.form.value')" required prop="amount">
                <el-input
                    v-model.number="voucherForm.amount"
                    class="input-with-select"
                    :placeholder="t('voucher.form.placeholder.value')"
                >
                    <template #prepend>
                        <el-select
                            v-model="voucherForm.isDiscount"
                            :placeholder="t('voucher.form.placeholder.type')"
                            style="width: 60px"
                        >
                            <el-option label="$" :value="false" />
                            <el-option label="%" :value="true" />
                        </el-select>
                    </template>
                </el-input>
            </el-form-item>
            <!-- 最低消费 -->
            <el-form-item :label="t('voucher.form.minConsume')" required prop="minimumExpense">
                <el-input
                    v-model.number="voucherForm.minimumExpense"
                    :placeholder="t('voucher.form.placeholder.minConsume')"
                />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">{{ t('common.btn.cancel') }}</el-button>
                <el-button type="primary" @click="handleConfirm">
                    {{ t('common.btn.confirm') }}
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus'
import { useI18n } from '@/lang'
import { useAppStore } from '@/store'
import { validateExpireAt, validateValue } from '@/utils/validateRules'
import { CreateVoucherParam, Voucher } from '@/api/model/voucherModel'
import { createVoucher } from '@/api/voucher'

defineOptions({
    name: 'CreateVoucherDialog'
})
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: true
    }
})
const emits = defineEmits(['update:visible', 'handelCreateSuccess'])
const dialogVisible = computed({
    get() {
        return props.visible
    },
    set(val) {
        emits('update:visible', val)
    }
})
const { t } = useI18n()
const appStore = useAppStore()

const validateValueByType = (rule: any, value: any, callback: any) =>
    validateValue(rule, value, callback, state.voucherForm)

const state = reactive({
    voucherFormRef: undefined as Undefinable<FormInstance>,
    voucherForm: {
        isDiscount: false,
        amount: undefined,
        expiredAt: '',
        minimumExpense: undefined,
        totalCount: 1
    } as UndefinedAble<CreateVoucherParam>,
    voucherRule: {
        amount: [
            { required: true, message: t('voucher.form.placeholder.value'), trigger: 'blur' },
            { validator: validateValueByType, trigger: 'blur' }
        ],
        expiredAt: [
            { required: true, message: t('voucher.form.placeholder.expireAt'), trigger: 'blur' },
            { validator: validateExpireAt, trigger: 'blur' }
        ],
        minimumExpense: [
            { required: true, message: t('voucher.form.placeholder.minConsume'), trigger: 'blur' },
            {
                pattern: /^[1-9]\d{0,3}$/,
                message: t('voucher.form.error.minConsume'),
                trigger: 'blur'
            }
        ],
        totalCount: [
            { required: true, message: t('voucher.form.placeholder.count'), trigger: 'blur' },
            {
                pattern: /^[1-9]\d{0,2}$/,
                message: t('voucher.form.error.count'),
                trigger: 'blur'
            }
        ]
    } as FormRules
})

const { voucherForm, voucherRule, voucherFormRef } = toRefs(state)

const handleOnClosed = () => {
    state.voucherFormRef?.resetFields()
}

const handleConfirm = async () => {
    if (!state.voucherFormRef) return
    const canCreate = await state.voucherFormRef.validate().catch(() => undefined)
    if (!canCreate) return
    const [, res] = await createVoucher(state.voucherForm as Voucher)
    if (res === 1) {
        window.$message.success(t('voucher.message.createSuccess'))
    } else {
        window.$message.error(t('voucher.message.createFailed'))
    }
    emits('handelCreateSuccess')
    dialogVisible.value = false
}
</script>

<style lang="scss" scoped>
.input-with-select :deep(.el-input-group__prepend) {
    background-color: var(--el-fill-color-blank);
}

:deep(.voucher-date-select) {
    @apply w-220px;

    .el-input__wrapper {
        @apply w-full;
    }
}
</style>
