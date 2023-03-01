import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite'
import defineOptions from 'unplugin-vue-define-options/vite'
import { PluginOption } from 'vite'
import viteCompression from 'vite-plugin-compression'
import eslintPlugin from 'vite-plugin-eslint'
import { autoComponent, autoImport } from './plugins/autoComponent'
import { svgIconPlugin } from './plugins/svgIcon'
// eslint-disable-next-line no-unused-vars
export function pluginsConfig(isBuild: boolean) {
    const plugins: PluginOption[] = [vue(), vueJsx(), defineOptions(), unocss()]

    plugins.push(svgIconPlugin)
    plugins.push(viteCompression())
    plugins.push(autoImport())
    plugins.push(autoComponent())
    plugins.push(eslintPlugin())
    return plugins
}
