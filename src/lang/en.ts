export default {
    common: {
        // 按钮
        btn: {
            add: 'Add',
            edit: 'Edit',
            delete: 'Delete',
            cancel: 'Cancel',
            confirm: 'Confirm',
            close: 'Close',
            search: 'Search',
            reset: 'Reset',
            export: 'Export',
            import: 'Import',
            download: 'Download',
            upload: 'Upload',
            save: 'Save',
            submit: 'Submit',
            refresh: 'Refresh',
            back: 'Back',
            copy: 'Copy'
        }
    },
    app: {
        systemError: 'System Error',
        loginExpire: 'The current page is invalid, please log in again',
        tips: 'Tips',
        preference: 'Preference Setting',
        logOut: 'Log out',
        theme: 'Thematic Pattern',
        followSystem: 'Follow System',
        darkMode: 'Dark Mode',
        systemTopic: 'System Topic',
        moreColors: 'More Colors',
        ChineseTraditionalColors: 'Chinese Traditional Colors',
        interfaceFunction: 'UI Function',
        normalMenuWidth: 'Normal Menu Width',
        multiCache: 'Multi-tab Cache',
        multiCacheNum: 'Multi-tab Cache Number',
        componentSize: 'Component Size',
        smallSize: 'Small',
        defaultSize: 'Default',
        LargeSize: 'Large',
        interfaceDisplay: 'UI Display',
        tabPage: 'TAB Page',
        breadCrumbs: 'Bread crumbs',
        disableAnimation: 'Disable Animation',
        animationType: 'Animation type',
        animationList: {
            zoomFade: 'Zoom Fade',
            zooOut: 'Zoom Out',
            fadeSlide: 'Fade Slide',
            fade: 'Fade',
            fadeBottom: 'Fade Bottom',
            fadeScale: 'Fade Scale'
        }
    },
    // 路由国际化
    route: {
        profile: 'Personal Information',
        dashboard: 'Dashboard',
        document: 'Document',
        analysis: 'Analysis',
        memberManage: 'Member Manage',
        memberList: 'Member List',
        voucherManage: 'Voucher Manage',
        voucherList: 'Voucher List',
        receivedVoucherList: 'Received Voucher List'
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
            memberName: 'Member Name',
            startDate: 'Start date',
            endDate: 'End date',
            toSeparator: 'To',
            searchBtn: 'Search',
            resetBtn: 'Reset',
            distanceFrom: 'Start distance',
            distanceTo: 'End distance',
            male: 'Male',
            female: 'Female',
            yes: 'Yes',
            no: 'No',
            all: 'All',
            memberNamePlaceholder: 'Please enter the name',
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
    },
    voucher: {
        form: {
            expireAt: 'Expiration Time',
            type: 'Voucher Type',
            value: 'Voucher Value',
            minConsume: 'Min Consume',
            count: 'Voucher Count',
            placeholder: {
                expireAt: 'Please select the expiration time',
                type: 'Please select the type',
                value: 'Please enter the value',
                minConsume: 'Please enter the min consume',
                count: 'Please enter the count'
            },
            error: {
                minConsume: 'Min consume must be a number between 1 and 9999',
                count: 'Count must be a number between 1 and 999',
                expireAt: 'Expiration time cannot be less than the current time',
                value: 'Voucher value must be a number between 1 and 999',
                discount: 'Discount must be a number between 1 and 99'
            }
        },
        dialog: {
            title: 'Create Voucher'
        },
        btn: {
            create: 'Create'
        }
    }
}
