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
        meta: { title: '首页', icon: 'el-icon-menu', show: true }
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
        meta: { title: '维护用户管理', show: true }
      },
      {
        path: 'UserEdit',
        component: createNameComponent(() => import('@/views/Worker/UserEdit.vue')),
        meta: { title: '新增角色', show: true }
      },
      {
        path: 'Audit',
        component: createNameComponent(() => import('@/views/Worker/Audit.vue')),
        meta: { title: '审核用户管理', show: true }
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
        component: createNameComponent(() => import('@/views/User/Area.vue')),
        meta: { title: '用户地区分布', show: true }
      },
      {
        path: 'Type',
        component: createNameComponent(() => import('@/views/User/Type.vue')),
        meta: { title: '用户类型分布', show: true }
      },
      {
        path: 'Delete',
        component: createNameComponent(() => import('@/views/User/Delete.vue')),
        meta: { title: '删除用户' }
      }
    ]
  },
  {
    path: '/Dictionaries',
    component: Layout,
    meta: { title: '字典管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'Search',
        component: createNameComponent(() => import('@/views/Dictionaries/Search.vue')),
        meta: { title: '字典总览' }
      },
      {
        path: 'Add',
        component: createNameComponent(() => import('@/views/Dictionaries/Add.vue')),
        meta: { title: '添加字典' }
      },
      {
        path: 'Edit',
        component: createNameComponent(() => import('@/views/Dictionaries/Edit.vue')),
        meta: { title: '修改字典' }
      },
      {
        path: 'Delete',
        component: createNameComponent(() => import('@/views/Dictionaries/Delete.vue')),
        meta: { title: '删除字典' }
      },
      {
        path: 'Languages',
        component: createNameComponent(() => import('@/views/Dictionaries/Languages.vue')),
        meta: { title: '语种管理' }
      }
    ]
  },
  {
    path: '/Entry',
    component: Layout,
    meta: { title: '字典管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'Search',
        component: createNameComponent(() => import('@/views/Entry/Search.vue')),
        meta: { title: '查询词条' }
      },
      {
        path: 'Add',
        component: createNameComponent(() => import('@/views/Entry/Add.vue')),
        meta: { title: '增加词条' }
      },
      {
        path: 'Import',
        component: createNameComponent(() => import('@/views/Entry/Import.vue')),
        meta: { title: '导入词条' }
      },
      {
        path: 'Edit',
        component: createNameComponent(() => import('@/views/Entry/Edit.vue')),
        meta: { title: '修改词条' }
      },
      {
        path: 'Voice',
        component: createNameComponent(() => import('@/views/Entry/Voice.vue')),
        meta: { title: '编辑语音' }
      },
      {
        path: 'Delete',
        component: createNameComponent(() => import('@/views/Entry/Delete.vue')),
        meta: { title: '删除词条' }
      },
      {
        path: 'Pass',
        component: createNameComponent(() => import('@/views/Entry/Languages.vue')),
        meta: { title: '审核未通过' }
      }
    ]
  },
  {
    path: '/Examine',
    component: Layout,
    meta: { title: '审核管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'Add',
        component: createNameComponent(() => import('@/views/Examine/Add.vue')),
        meta: { title: '录入词条审核', show: true }
      },
      {
        path: 'Import',
        component: createNameComponent(() => import('@/views/Examine/Import.vue')),
        meta: { title: '导入词条审核' }
      },
      {
        path: 'UserSuggestions',
        component: createNameComponent(() => import('@/views/Examine/UserSuggestions.vue')),
        meta: { title: '用户荐词审核' }
      },
      {
        path: 'UserOptions',
        component: createNameComponent(() => import('@/views/Examine/UserOptions.vue')),
        meta: { title: '用户意见反馈审核' }
      }
    ]
  },
  {
    path: '/UserSuggestions',
    component: Layout,
    meta: { title: '用户荐词管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'List',
        component: createNameComponent(() => import('@/views/UserSuggestions/List.vue')),
        meta: { title: '荐词清单' }
      },
      {
        path: 'Audit',
        component: createNameComponent(() => import('@/views/UserSuggestions/Audit.vue')),
        meta: { title: '荐词审核' }
      },
      {
        path: 'Publish',
        component: createNameComponent(() => import('@/views/UserSuggestions/Publish.vue')),
        meta: { title: '荐词发布' }
      },
      {
        path: 'Edit',
        component: createNameComponent(() => import('@/views/UserSuggestions/Edit.vue')),
        meta: { title: '修改荐词' }
      },
      {
        path: 'Delete',
        component: createNameComponent(() => import('@/views/UserSuggestions/Delete.vue')),
        meta: { title: '荐词删除' }
      }
    ]
  },
  {
    path: '/DictionariesText',
    component: Layout,
    meta: { title: '字典原文管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'View',
        component: createNameComponent(() => import('@/views/DictionariesText/View.vue')),
        meta: { title: '查看原文' }
      },
      {
        path: 'Update',
        component: createNameComponent(() => import('@/views/DictionariesText/Update.vue')),
        meta: { title: '原文上传' }
      },
      {
        path: 'Delete',
        component: createNameComponent(() => import('@/views/DictionariesText/Delete.vue')),
        meta: { title: '原文删除' }
      }
    ]
  },
  {
    path: '/Publish',
    component: Layout,
    meta: { title: '发布管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'Total',
        component: createNameComponent(() => import('@/views/Publish/Total.vue')),
        meta: { title: '发布总览' }
      },
      {
        path: 'Dictionaries',
        component: createNameComponent(() => import('@/views/Publish/Dictionaries.vue')),
        meta: { title: '发布字典' }
      },
      {
        path: 'Entry',
        component: createNameComponent(() => import('@/views/Publish/Entry.vue')),
        meta: { title: '发布词条' }
      },
      {
        path: 'OffDictionaries',
        component: createNameComponent(() => import('@/views/Publish/OffDictionaries.vue')),
        meta: { title: '下架字典' }
      },
      {
        path: 'OffEntry',
        component: createNameComponent(() => import('@/views/Publish/OffEntry.vue')),
        meta: { title: '下架词条' }
      }
    ]
  },
    {
    path: '/Options',
    component: Layout,
    meta: { title: '意见反馈管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'List',
        component: createNameComponent(() => import('@/views/Options/List.vue')),
        meta: { title: '意见清单' }
      },
      {
        path: 'Handle',
        component: createNameComponent(() => import('@/views/Options/Handle.vue')),
        meta: { title: '处理意见' }
      },
      {
        path: 'Delete',
        component: createNameComponent(() => import('@/views/Options/Delete.vue')),
        meta: { title: '删除意见' }
      },
      {
        path: 'Import',
        component: createNameComponent(() => import('@/views/Options/Import.vue')),
        meta: { title: '导出意见' }
      }
    ]
  },
]
// const asyncRoute = route.reduce((p, c) => {
//   c.children = c.children.filter(v => v.meta.show);
//   return c.children.length > 0 ? p.concat(c) : p;
// }, [])
// export default asyncRoute
export default route