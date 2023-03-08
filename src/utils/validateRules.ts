import { useI18n } from '@/lang/index'
const { t } = useI18n()

export const validateDistance = (rule: any, value: any, callback: any) => {
    if (value[0] >= value[1]) {
        callback(new Error(t('member.form.error.distanceSame')))
    } else if (
        !(value[0] === undefined && value[1] === undefined) &&
        (value[0] === undefined || value[1] === undefined)
    ) {
        callback(new Error(t('member.form.error.deletionDistanceOne')))
    }
    callback()
}

export const validateExpireAt = (rule: any, value: string, callback: any) => {
    const expireAt = new Date(value).getTime()
    const now = new Date().getTime()
    if (expireAt < now) {
        callback(new Error(t('voucher.form.error.expireAt')))
    } else {
        callback()
    }
}

export const validateValue = (rule: any, value: number | string, callback: any, state: any) => {
    if (!state.type) {
        return callback(new Error(t('voucher.form.placeholder.type')))
    }

    if (state.type === '0' && (value < 1 || value > 999)) {
        callback(new Error(t('voucher.form.error.value')))
    } else if (state.type === '1' && (value < 1 || value > 99)) {
        callback(new Error(t('voucher.form.error.discount')))
    } else {
        callback()
    }
}
