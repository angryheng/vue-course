import Home from '@/views/Home.vue';
export default [
  {
    path: '/',
    name: 'home',
    alias: '/home_page',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  // 动态路由 (:name 动态路由参数)
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Argu.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    // 这里 name 属性可以在 router-link 中通过 name 跳转
    name: 'parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        component: () => import('@/views/Child.vue')
      }
    ]
  },
  // 命名视图
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    // redirect: '/about'
    // redirect: {
    //   name: 'about'
    // }
    // redirect: to => {
    //   console.log(to)
    // }
    // redirect: {
    //   path: '/about'
    // }
    redirect: to => '/'
  }
]