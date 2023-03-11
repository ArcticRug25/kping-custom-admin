import { GetVoucherListParam, Voucher, CreateVoucherParam } from './model/voucherModel'
import { http } from '@/utils/request'
import { PageModel } from './model/pageModel'

enum VoucherApi {
    GetVoucherList = '/voucher/list',
    CreateVoucher = '/voucher'
}

export function getVoucherList(params: GetVoucherListParam) {
    return http.get<PageModel<Voucher>>({ url: VoucherApi.GetVoucherList, params })
}

export function createVoucher(data: CreateVoucherParam) {
    return http.post<number>({ url: VoucherApi.CreateVoucher, data })
}
