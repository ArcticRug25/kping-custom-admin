export default {
    common: {
        // 按钮
        btn: {
            add: '添加',
            edit: '编辑',
            delete: '删除',
            cancel: '取消',
            confirm: '确认',
            close: '关闭',
            search: '查询',
            reset: '重置',
            export: '导出',
            import: '导入',
            download: '下载',
            upload: '上传',
            save: '保存',
            submit: '提交',
            refresh: '刷新',
            back: '返回',
            copy: '复制'
        }
    },
    app: {
        systemError: '系统出错',
        loginExpire: '当前页面已失效，请重新登录',
        tips: '提示',
        preference: '偏好设置',
        logOut: '退出登录',
        theme: '主题模式',
        followSystem: '跟随系统',
        darkMode: '深色主题',
        systemTopic: '系统主题',
        moreColors: '更多颜色',
        ChineseTraditionalColors: '中国传统颜色',
        interfaceFunction: '界面功能',
        normalMenuWidth: '普通菜单宽度',
        multiCache: '多页签缓存',
        multiCacheNum: '多页签缓存条数',
        componentSize: '组件大小',
        smallSize: '小',
        defaultSize: '默认',
        LargeSize: '大',
        interfaceDisplay: '界面展示',
        tabPage: '标签页',
        breadCrumbs: '面包屑',
        disableAnimation: '禁用动画',
        animationType: '动画类型',
        animationList: {
            zoomFade: '渐变',
            zooOut: '闪现',
            fadeSlide: '滑动',
            fade: '消退',
            fadeBottom: '底部消退',
            fadeScale: '缩放消退'
        }
    },
    // 路由国际化
    route: {
        profile: '个人信息',
        dashboard: '首页',
        document: '项目文档',
        analysis: '分析页',
        memberManage: '会员管理',
        memberList: '会员列表',
        voucherManage: '票券管理',
        voucherList: '票券列表',
        receivedVoucherList: '核销票券列表'
    },
    // 登录页面国际化
    login: {
        username: '用户名',
        password: '密码',
        login: '登 录',
        code: '请输入验证码',
        codeError: '验证码错误',
        forgetPassword: '忘记密码',
        placeholder: {
            code: '请输入验证码',
            username: '请输入用户名',
            password: '请输入密码'
        }
    },
    navbar: {
        dashboard: '首页',
        logout: '注销',
        document: '项目文档'
    },
    member: {
        broadcast: '推送消息',
        distribute: '分发',
        male: '男',
        female: '女',
        halal: '清真',
        form: {
            memberName: '用户名',
            startDate: '开始日期',
            endDate: '结束日期',
            toSeparator: '至',
            searchBtn: '查询',
            resetBtn: '重置',
            distanceFrom: '开始距离',
            distanceTo: '结束距离',
            male: '男',
            female: '女',
            yes: '是',
            no: '否',
            all: '全部',
            memberNamePlaceholder: '请输入用户名',
            error: {
                distanceSame: '开始距离不能大于等于结束距离',
                deletionDistanceOne: '开始距离和结束距离需要同时选择'
            }
        },
        table: {
            name: '姓名',
            gender: '性别',
            voucher: '票券',
            distance: '距离',
            joinDate: '加入时间',
            lastAction: '最近操作'
        }
    },
    voucher: {
        form: {
            expireAt: '过期时间',
            type: '票券类型',
            value: '票券价值',
            minConsume: '最低消费',
            count: '票券数量',
            placeholder: {
                expireAt: '请选择过期时间',
                type: '请选择类型',
                value: '请输入票券价值',
                minConsume: '请输入最低消费',
                count: '请输入数量'
            },
            error: {
                minConsume: '最低消费只能为1-9999的数字',
                count: '数量只能为1-999的数字',
                expireAt: '过期时间不能小于当前时间',
                value: '票券价值只能为1-999的数字',
                discount: '票券折扣只能为1-99的数字'
            }
        },
        dialog: {
            title: '创建票券'
        },
        btn: {
            create: '创建票券'
        }
    }
}
