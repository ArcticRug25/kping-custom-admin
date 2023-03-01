import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/dist/index.css'
import 'uno.css'
import 'virtual:svg-icons-register'
import './styles/index.scss'
import { setupRoute } from './router'
import { setupDirective } from './core/directives'
import setupI18n from './lang'

function bootstrap() {
    const app = createApp(App)
    setupPinia(app)
    setupRoute(app)
    setupDirective(app)
    setupI18n(app)

    app.mount('#app')
}

bootstrap()
