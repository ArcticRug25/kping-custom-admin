import { PageParam } from './pageModel'
export interface Voucher {
    amount: number
    createTime: string
    expiredAt: string
    id: number
    isDiscount: boolean
    minimumExpense: number
    remainCount: number
    stackable: boolean
    totalCount: number
    transferrable: boolean
    useWithOther: boolean
}

export interface CreateVoucherParam {
    totalCount: number
    isDiscount: boolean
    expiredAt: string
    amount: number
    minimumExpense: number
}

export type GetVoucherListParam = PageParam
