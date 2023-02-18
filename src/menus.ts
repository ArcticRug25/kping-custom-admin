export const menuInfos = [
    {
        id: -1,
        icon: 'ep:menu',
        title: 'dashboard',
        componentName: 'DashBoard',
        parentId: 0,
        openType: 0,
        showIndex: 1,
        url: '/dashboard',
        redirect: '/dashboard/analysis',
        hidden: false
    },
    {
        id: -2,
        title: 'analysis',
        url: '/dashboard/analysis',
        component: 'dashboard/analysis/index',
        componentName: 'Analysis',
        openType: 0,
        parentId: -1,
        showIndex: 1,
        hidden: false
    },
    {
        id: 1,
        icon: 'ep:memo',
        title: 'memberManage',
        componentName: '',
        parentId: 0,
        openType: 0,
        showIndex: 1,
        url: '/memberManage',
        redirect: '/memberManage/list',
        hidden: false
    },
    {
        id: 2,
        title: 'memberList',
        url: '/memberManage/list',
        component: 'memberManage/list/index',
        componentName: 'Role',
        openType: 0,
        parentId: 1,
        showIndex: 2,
        hidden: false
    },
    {
        id: 7,
        icon: 'ep:setting',
        title: 'voucherManage',
        componentName: '',
        parentId: 0,
        openType: 0,
        showIndex: 2,
        url: '/voucherManage',
        redirect: '/voucherManage/list',
        hidden: false
    },
    {
        id: 8,
        title: 'voucherList',
        url: '/voucherManage/list',
        component: 'voucherManage/list/index',
        componentName: 'User',
        openType: 0,
        parentId: 7,
        showIndex: 1,
        hidden: false
    }
]
