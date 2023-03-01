export default {
    app: {
        systemError: 'System Error',
        loginExpire: 'The current page is invalid, please log in again',
        tips: 'Tips'
    },
    // 路由国际化
    route: {
        dashboard: 'Dashboard',
        document: 'Document',
        analysis: 'Analysis',
        memberManage: 'Member Manage',
        memberList: 'Member List',
        voucherManage: 'Voucher Manage',
        voucherList: 'Voucher List'
    },
    // 登录页面国际化
    login: {
        username: 'Username',
        password: 'Password',
        login: 'Login',
        code: 'Verification Code',
        codeError: 'Verification Code Error',
        forgetPassword: 'Forget password',
        placeholder: {
            code: 'Please enter the code',
            username: 'Please enter the username',
            password: 'Please enter the password'
        }
    },
    // 导航栏国际化
    navbar: {
        dashboard: 'Dashboard',
        logout: 'Logout',
        document: 'Document'
    },
    member: {
        broadcast: 'broadcast',
        distribute: 'distribute',
        male: 'M',
        female: 'F',
        halal: 'halal',
        form: {
            startDate: 'Start date',
            endDate: 'End date',
            toSeparator: 'To',
            searchBtn: 'Search',
            resetBtn: 'Reset',
            distanceFrom: 'Start distance',
            distanceTo: 'End distance',
            yes: 'Yes',
            no: 'No',
            error: {
                distanceSame: 'Start distance cannot be greater than or equal to the end distance',
                deletionDistanceOne:
                    'Start distance and end distance need to be selected at the same time'
            }
        },
        table: {
            name: 'Name',
            gender: 'Sex',
            voucher: 'Voucher',
            distance: 'Distance',
            joinDate: 'Join Date',
            lastAction: 'Last Action'
        }
    }
}
