<template>
    <div class="login flex items-center h-100vh" :style="{ background: `url(${loginBg})` }">
        <div class="login-form bg-white w-458px h-569px rounded-12px ml-80 p-40px pt-20px">
            <h2 class="text-size-32px text-center color-#232859 font-400">
                {{ t('login.login') }}
            </h2>
            <el-form class="mt-40px" label-position="top">
                <el-form-item :label="t('login.username')">
                    <el-input
                        v-model="formData.username"
                        :placeholder="t('login.placeholder.username')"
                    ></el-input>
                </el-form-item>
                <el-form-item :label="t('login.password')">
                    <el-input
                        v-model="formData.password"
                        :type="passwordIsVisible ? 'text' : 'password'"
                        :placeholder="t('login.placeholder.password')"
                    >
                        <template #suffix>
                            <el-icon
                                v-show="!passwordIsVisible"
                                @click="passwordIsVisible = !passwordIsVisible"
                            >
                                <View />
                            </el-icon>
                            <el-icon
                                v-show="passwordIsVisible"
                                @click="passwordIsVisible = !passwordIsVisible"
                            >
                                <Hide />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="flex items-center mt-28px">
                    <el-input
                        v-model="formData.code"
                        :placeholder="t('login.placeholder.code')"
                    ></el-input>
                    <div
                        class="w-150px h-32px ml-34px border border-#DCDFE6 rounded-4px cursor-pointer"
                    >
                        <img :src="codeUrl" class="wh-full" @click="resetCode" />
                    </div>
                </div>
            </el-form>
            <div class="text-right color-#999 mt-18px cursor-pointer">
                <el-link type="info" :underline="false" class="font-400">{{
                    t('login.forgetPassword')
                }}</el-link>
            </div>
            <el-button v-loading="loading" type="primary" class="w-100% mt-40px" @click="onLogin">
                {{ t('login.login') }}
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Hide, View } from '@element-plus/icons-vue'
import axios from 'axios'
import { AuthApi } from '@/api/auth'
import { LoginParams } from '@/api/model/accountModel'
import loginBg from '@/assets/images/login-bg.png'
import { useI18n } from '@/lang/index'
import { accountLogin } from '../../api/auth'
const router = useRouter()

const formData = reactive<LoginParams>({
    username: 'ArcticRug25',
    password: 'wyw123456',
    code: ''
})

/** 密码是否可见 */
const passwordIsVisible = ref(false)
const loading = ref(false)

const codeUrl = ref<string>(AuthApi.Code)

const { t } = useI18n()

const userStore = useUserStore()
/** 登录 */
const onLogin = async () => {
    if (!formData.username) {
        return window.$message.warning(t('login.placeholder.username'))
    }
    if (!formData.password) {
        return window.$message.warning(t('login.placeholder.password'))
    }
    // await fetch('/api/auth/signin', {
    //     method: 'POST',
    //     body: JSON.stringify(formData),
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // }).then((res) => res.json())
    const data = await accountLogin(formData)
    console.log('🚀 ~ file: login.vue:93 ~ onLogin ~ data:', data)

    // loading.value = true
    // userStore.info.userName = 'admin'
    // router.push({ path: '/dashboard' })
}

const resetCode = () => {
    codeUrl.value = `${codeUrl.value}?${Math.random()}`
}
</script>
<style lang="scss" scoped>
.login {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.login-form {
    box-shadow: 0 0 30px 1px rgba(62, 72, 160, 12%);

    .icon {
        user-select: none;
    }
}

:deep(.el-form-item .el-form-item__label) {
    color: #000;
}
</style>
