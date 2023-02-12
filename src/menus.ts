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
        title: '分析页',
        url: '/dashboard/analysis',
        component: 'dashboard/analysis/analysis',
        componentName: 'Analysis',
        openType: 0,
        parentId: -1,
        showIndex: 1,
        hidden: false
    },
    {
        id: -3,
        title: '工作台',
        url: '/dashboard/workbench',
        component: 'dashboard/workbench/workbench',
        componentName: 'Workbench',
        openType: 0,
        parentId: -1,
        showIndex: 2,
        hidden: false
    },
    {
        id: 1,
        icon: 'ep:memo',
        title: '会员管理',
        componentName: '',
        parentId: 0,
        openType: 0,
        showIndex: 1,
        url: '/workbench',
        redirect: '/systemManage/role',
        hidden: false
    },
    {
        id: 2,
        title: '会员列表',
        url: '/systemManage/role',
        component: 'systemManage/roleManage/role/role',
        componentName: 'Role',
        openType: 0,
        parentId: 1,
        showIndex: 2,
        hidden: false
    },
    {
        id: 7,
        icon: 'ep:setting',
        title: '票券管理',
        componentName: '',
        parentId: 0,
        openType: 0,
        showIndex: 2,
        url: '/systemManage',
        redirect: '/systemManage/user',
        hidden: false
    },
    {
        id: 8,
        title: '票券列表',
        url: '/systemManage/user',
        component: 'systemManage/userInfo/user/user',
        componentName: 'User',
        openType: 0,
        parentId: 7,
        showIndex: 1,
        hidden: false
    }
]
