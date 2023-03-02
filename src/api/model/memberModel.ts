import { Voucher } from './voucherModel'
import { PageParam } from './pageModel'

export enum Gender {
    Male = 'male',
    Female = 'female',
    Unknown = 'unknown'
}

export type MemberType = Gender | 'isHalal'

export interface Member {
    distance: string | number
    gender: string
    id: number
    isHalal: boolean
    joinTime: string
    lastAction: string
    phonenumber: string
    username: string
    vouchers: Voucher[]
    unDiscountNum?: number
    discountNum?: number
}

export interface GetMemberListParam extends PageParam {
    gender?: Gender
    isHalal?: '1' | '0'
    joinStart?: Date
    joinEnd?: Date
    actionStart?: Date
    actionEnd?: Date
    distanceFrom?: number
    distanceTo?: number
    orderBy?: MemberType[]
    name?: string
}
