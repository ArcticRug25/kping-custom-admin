// 自定义国际化配置
import { createI18n } from 'vue-i18n'
import { App } from 'vue'
import { localStorage } from '@/utils/storage'

// 本地语言包
import enLocale from './en'
import zhCnLocale from './zh-cn'

const messages = {
    'zh-cn': {
        ...zhCnLocale
    },
    en: {
        ...enLocale
    }
}

/**
 * 获取当前系统使用语言字符串
 *
 * @returns zh-cn|en ...
 */
export const getLanguage = () => {
    // 本地缓存获取
    let language = localStorage.get('language')
    if (language) {
        return language
    }
    // 浏览器使用语言
    language = navigator.language.toLowerCase()
    const locales = Object.keys(messages)

    language = locales.find((locale) => language.indexOf(locale) > -1)
    if (language) {
        return language
    }
    return 'zh-cn'
}

export const i18n = createI18n({
    legacy: false,
    locale: getLanguage(),
    messages
})

export default function setupI18n(app: App) {
    app.use(i18n)
}
