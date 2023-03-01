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
        icon: 'fa-users',
        title: 'memberManage',
        componentName: 'MemberManage',
        parentId: 0,
        openType: 0,
        showIndex: 1,
        url: '/memberManage',
        redirect: '/memberManage/memberList',
        hidden: false
    },
    {
        id: 2,
        title: 'memberList',
        url: '/memberManage/memberList',
        component: 'memberManage/memberList/index',
        componentName: 'MemberList',
        openType: 0,
        parentId: 1,
        showIndex: 2,
        hidden: false
    },
    {
        id: 7,
        icon: 'fa-ticket',
        title: 'voucherManage',
        componentName: 'VoucherManage',
        parentId: 0,
        openType: 0,
        showIndex: 2,
        url: '/voucherManage',
        redirect: '/voucherManage/voucherList',
        hidden: false
    },
    {
        id: 8,
        title: 'voucherList',
        url: '/voucherManage/voucherList',
        component: 'voucherManage/voucherList/index',
        componentName: 'VoucherList',
        openType: 0,
        parentId: 7,
        showIndex: 1,
        hidden: false
    },
    {
        id: 9,
        title: 'receivedVoucherList',
        url: '/voucherManage/list',
        component: 'voucherManage/receivedVoucherList/index',
        componentName: 'ReceivedVoucherList',
        openType: 0,
        parentId: 7,
        showIndex: 2,
        hidden: false
    }
]
