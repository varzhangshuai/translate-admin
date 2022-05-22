import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: { title: '', icon: 'el-icon-menu' },
    children: [
      {
        path: 'index',
        component: createNameComponent(() => import('@/views/Index/index.vue')),
        meta: { title: '首页', icon: 'el-icon-menu', show: true }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/404',
    hideMenu: true,
    meta: { title: '系统目录' },
    children: [
      {
        path: '/404',
        component: createNameComponent(() => import('@/views/system/404.vue')),
        meta: { title: '404', hideTabs: true }
      },
      {
        path: '/401',
        component: createNameComponent(() => import('@/views/system/401.vue')),
        meta: { title: '401', hideTabs: true }
      },
      {
        path: '/redirect/:path(.*)',
        component: createNameComponent(() => import('@/views/system/redirect.vue')),
        meta: { title: 'redirect', hideTabs: true }
      }
    ]
  },
  {
    path: '/login',
    component: createNameComponent(() => import('@/views/system/login.vue')),
    hideMenu: true,
    meta: { title: '登录', hideTabs: true }
  },
  {
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    component: Layout,
    redirect: "/404",
    hideMenu: true
  },
// 不在菜单内路由
  {
    path: '/',
    component: Layout,
    meta: { title: '', icon: 'el-icon-menu' },
    hideMenu: true,
    children: [
      {
        path: '/Worker/UserEdit',
        component: createNameComponent(() => import('@/views/Worker/UserEdit.vue')),
        meta: { title: '新增角色', show: true }
      },
      {
        path: '/Worker/RoleAdd',
        component: createNameComponent(() => import('@/views/Worker/RoleAdd.vue')),
        meta: { title: '新增角色', show: true }
      }
    ]
  },
]

export default route