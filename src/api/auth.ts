import { http } from '@/utils/request'
import { GetAccountInfoModel, LoginParams } from './model/accountModel'

export enum AuthApi {
    SignIn = '/auth/signin',
    Code = '/api/auth/code'
}

export function AccountLogin(data: LoginParams) {
    return http.post<GetAccountInfoModel>({ url: AuthApi.SignIn, data })
}
