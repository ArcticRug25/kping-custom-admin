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
    used: boolean
    usedAt: null | string
    useWithOther: boolean
}
