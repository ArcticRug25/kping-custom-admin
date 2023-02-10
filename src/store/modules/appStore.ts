import { PersistedStateOptions } from 'pinia-plugin-persistedstate'

import { defineStore } from 'pinia'
import { DEFAULT_APP_STORE } from '@/core/config'
import { localStorage } from '@/utils/storage'
/** 动画类型 */
type animationType = 'zoom-fade' | 'zoom-out' | 'fade-slide' | 'fade' | 'fade-bottom' | 'fade-scale'

export interface AppStore {
    /** 主题模式 */
    themeMode: 'dark' | 'light'
    /** 跟随系统主题 */
    followSystemTheme: boolean
    /** 主题颜色 */
    theme: string
    /** 菜单是否收缩 */
    menuIsCollapse: boolean
    /** 菜单折叠的宽度 */
    menuCollapseWidth: number
    /** 菜单未折叠宽度 */
    menuWidth: number
    /** 是否禁用动画 */
    disableAnimation: boolean
    /** 页面切换动画类型 */
    animationType: animationType
    /** 是否打开偏好设置 */
    showPreferenceSetting: boolean
    /** 是否显示面包屑 */
    showBreadcrumb: boolean
    /** 是否显示标签页 */
    showTab: boolean
    /** 标签页是否缓存 */
    keepAlive: boolean
    /** 缓存组件个数 */
    keepAliveCounter: number
    /** 组件大小 */
    size: 'large' | 'default' | 'small'
    // 语言
    language: string
}

export default defineStore({
    id: 'app',
    state: (): AppStore => ({
        ...DEFAULT_APP_STORE
    }),
    actions: {
        setLanguage(language: string) {
            this.language = language
            localStorage.set('language', language)
        }
    },
    persist: {
        key: 'app',
        storage: window.localStorage
    } as PersistedStateOptions
})
