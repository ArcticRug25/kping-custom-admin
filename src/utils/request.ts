import { ElMessage, ElMessageBox } from 'element-plus'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useUserStore } from '@/store' // pinia
import { localStorage } from './storage'
import { useI18n } from '../lang/index'
import { HTTP_CODE } from '@/enum/httpCode'
import { ContentTypeEnum } from '@/enum/httpEnum'

const { t } = useI18n()

interface ResponseResult<T> {
    code: number
    message: string
    data: T
}

interface UploadFileParams {
    // Other parameters
    data?: Record<string, any>
    // File parameter interface field name
    name?: string
    // file name
    file: File | Blob
    // file name
    filename?: string
    [key: string]: any
}

export default class Axios {
    private instance

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors()
    }

    public get<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
        return this.request({
            ...config,
            method: 'GET'
        })
    }

    public post<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
        return this.request({
            ...config,
            method: 'post'
        })
    }

    public put<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
        return this.request({
            ...config,
            method: 'PUT'
        })
    }

    public delete<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
        return this.request({
            ...config,
            method: 'DELETE'
        })
    }

    public uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
        const formData = new window.FormData()
        const customFilename = params.name || 'file'

        if (params.filename) {
            formData.append(customFilename, params.file, params.filename)
        } else {
            formData.append(customFilename, params.file)
        }

        if (params.data) {
            Object.keys(params.data).forEach((key) => {
                const value = params.data![key]
                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        formData.append(`${key}[]`, item)
                    })
                    return
                }

                formData.append(key, params.data![key])
            })
        }

        return this.instance.request<T>({
            ...config,
            method: 'POST',
            data: formData,
            headers: {
                'Content-type': ContentTypeEnum.FORM_DATA,
                ignoreCancelToken: true
            }
        })
    }

    public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
        return new Promise((resolve, reject) => {
            this.instance
                .request<D>(config)
                .then((res) => resolve(res.data))
                .catch((err) => reject(err))
        })
    }

    private interceptors() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }

    private interceptorsRequest() {
        this.instance.interceptors.request.use(
            (config) => {
                if (!config.headers)
                    throw new Error("Expected 'config' and 'config.headers' not to be undefined")

                const user = useUserStore()
                if (user.token) config.headers.Authorization = `Bearer ${user.token}`

                return config
            },
            (error) => {
                // 对请求错误做些什么
                return Promise.reject(error)
            }
        )
    }

    private interceptorsResponse() {
        this.instance.interceptors.response.use(
            (response) => {
                const { code, msg } = response.data
                if (code === HTTP_CODE.success) {
                    return response.data
                }

                ElMessage({
                    message: t('app.systemError'),
                    type: 'error'
                })
                return Promise.reject(new Error(msg || 'Error'))
            },
            (error) => {
                const { code, message } = error
                if (code === 'A0230') {
                    // token 过期
                    localStorage.clear() // 清除浏览器全部缓存
                    window.location.href = '/' // 跳转登录页
                    ElMessageBox.alert(t('app.loginExpire'), t('app.tips'), {})
                } else {
                    ElMessage({
                        message: t('app.systemError'),
                        type: 'error'
                    })
                }
                return Promise.reject(new Error(message || 'Error'))
            }
        )
    }
}

const http = new Axios({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 6 * 1000,
    withCredentials: true
    // headers: { 'Content-Type': 'application/json' }
})

export { http }
