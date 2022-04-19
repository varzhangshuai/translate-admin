import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '', icon: 'el-icon-menu' },
    children: [
      {
        path: 'dashboard',
        component: createNameComponent(() => import('@/views/Index/index.vue')),
        meta: { title: '首页', icon: 'el-icon-menu' }
      }
    ]
  },
  {
    path: '/Worker',
    component: Layout,
    meta: { title: '用户管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'MaintainWorker',
        component: createNameComponent(() => import('@/views/Worker/MaintainWorker.vue')),
        meta: { title: '维护用户管理' }
      },
      {
        path: 'Audit',
        component: createNameComponent(() => import('@/views/Worker/Audit.vue')),
        meta: { title: '审核用户管理' }
      },
      {
        path: 'SystemAdminer',
        component: createNameComponent(() => import('@/views/Worker/SystemAdminer.vue')),
        meta: { title: '系统管理员管理' }
      },
      {
        path: 'Role',
        component: createNameComponent(() => import('@/views/Worker/Role.vue')),
        meta: { title: '角色管理' }
      }
    ]
  },
  {
    path: '/User',
    component: Layout,
    meta: { title: '终端用户管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'Search',
        component: createNameComponent(() => import('@/views/User/Search.vue')),
        meta: { title: '查询用户' }
      },
      {
        path: 'Area',
        component: createNameComponent(() => import('@/views/User/Audit.vue')),
        meta: { title: '用户地区分布' }
      },
      {
        path: 'Type',
        component: createNameComponent(() => import('@/views/User/SystemAdminer.vue')),
        meta: { title: '用户类型分布' }
      },
      {
        path: 'Delete',
        component: createNameComponent(() => import('@/views/User/Role.vue')),
        meta: { title: '删除用户' }
      }
    ]
  }
]

export default route