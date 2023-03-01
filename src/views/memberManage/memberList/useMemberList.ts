import dayjs from 'dayjs'
import { getMemberList } from '@/api/member'
import { GetMemberListParam } from '@/api/model/memberModel'

export default function useMemberList() {
    async function getMemberListByQuery(queryParam: GetMemberListParam) {
        const [, memberList] = await getMemberList(queryParam)

        memberList?.rows.forEach((member) => {
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

        return {
            total: memberList?.total ?? 0,
            memberList: memberList?.rows ?? []
        }
    }

    return { getMemberListByQuery }
}
