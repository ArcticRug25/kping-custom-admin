import { GetVoucherListParam, Voucher } from './model/voucherModel'
import { http } from '@/utils/request'
import { PageModel } from './model/pageModel'

enum VoucherApi {
    GetVoucherList = '/voucher/list'
}

export function getVoucherList(params: GetVoucherListParam) {
    return http.get<PageModel<Voucher>>({ url: VoucherApi.GetVoucherList, params })
}
