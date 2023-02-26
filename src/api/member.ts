import { http } from '@/utils/request'
import { GetMemberListParam, Member } from './model/memberModel'
import { PageModel } from './model/pageModel'

export enum AuthApi {
    GetMemberList = '/member/list'
}

export function getMemberList(params: GetMemberListParam) {
    return http.get<PageModel<Member>>({ url: AuthApi.GetMemberList, params })
}
