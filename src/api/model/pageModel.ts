export interface PageModel<T> {
    rows: T[]
    total: number
}

export interface PageParam {
    pageNum: number
    pageSize: number
}
