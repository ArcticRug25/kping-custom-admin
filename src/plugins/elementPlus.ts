import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

import { useAppStore } from '@/store'

/** 主题模式切换 */
export function useElementConfig() {
    const appStore = useAppStore()

    const localeObj = {
        'zh-cn': zhCn,
        en
    }
    type LanguageKey = keyof typeof localeObj
    const locale = computed(() => localeObj[appStore.language as LanguageKey])

    return {
        locale
    }
}
