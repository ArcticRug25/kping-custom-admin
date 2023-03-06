import dayjs from 'dayjs'
import { GetVoucherListParam } from '@/api/model/voucherModel'
import { getVoucherList } from '@/api/voucher'

export default function useVoucherList() {
    async function getVoucherListByQuery(params: GetVoucherListParam) {
        const [, voucherList] = await getVoucherList(params)

        voucherList?.rows.forEach((voucher) => {
            voucher.expiredAt = dayjs(voucher.expiredAt).format('YYYY-MM-DD')
        })

        return {
            total: voucherList?.total ?? 0,
            voucherList: voucherList?.rows ?? []
        }
    }

    return { getVoucherListByQuery }
}
