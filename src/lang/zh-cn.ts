export default {
    app: {
        systemError: '系统出错',
        loginExpire: '当前页面已失效，请重新登录',
        tips: '提示'
    },
    // 路由国际化
    route: {
        dashboard: '首页',
        document: '项目文档',
        analysis: '分析页',
        memberManage: '会员管理',
        memberList: '会员列表',
        voucherManage: '票券管理',
        voucherList: '票券列表'
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
            startDate: '开始日期',
            endDate: '结束日期',
            toSeparator: '至',
            searchBtn: '查询',
            resetBtn: '重置',
            distanceFrom: '开始距离',
            distanceTo: '结束距离',
            yes: '是',
            no: '否',
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
    }
}
