# vue-course

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### api 目录存放接口

### config 目录存放项目配置文件

### directive 目录存放自定义指令

### lib 目录存放一些工具文件
1. util.js 与业务有关的一些方法
2. tools.js 纯工具方法

### store 目录存放 vuex 对应的文件

### mock 模拟数据目录

### vue.config.js 存放 vue 配置信息

### 路由组件传参
1. 布尔模式（适用于动态路由）
```
{
  path: '/argu/:name',
  name: 'argu',
  component: () => import(/* webpackChunkName: "about" */ '@/views/Argu.vue'),
  // 路由组件传参方式1(布尔模式)
  props: true
}
```
2. 对象模式
···
{
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  // 路由组件传参方式2（对象模式）
  props: {
    food: 'Apple'
  }
}
···
3. 函数模式
```
{
  path: '/',
  name: 'home',
  alias: '/home_page',
  component: Home,
  // route 当前路由对象
  // 路由组件传参方式3（函数模式）
  props: route => ({
    food: route.query.food
  })
}
```

### 导航守卫
1. 全局守卫设置
  + beforeEach((to, from, next) => {})
  + beforeResolve
  + afterEach((to, form) => {})
2. 路由独享守卫
  + beforeEnter((to, form, next) => {})
3. 组件内的守卫
  + beforeRouteEnter(to, from, next) {}
  + beforeRouteLeave(to, from, next) {}
  + beforeRouteUpdate(to, from, next) {}
    - 动态传参路由中适用

### 完整的导航解析流程
1. 导航被触发
2. 在失活的组件（即将离开的页面组件）里调用组件里的离开守卫 beforeRouteLeave
3. 调用全局的前置守卫 beforeEach
4. 在重用的组件里调用 beforeRouteUpdate
5. 调用路由独享的守卫 beforeEnter
6. 解析异步路由组件
7. 在被激活的组件（即将进入的页面）里调用 beforeRouterEnter
8. 调用全局的解析守卫 beforeResolve
9. 导航被确认
10. 调用全局的后置守卫 afterEach
11. 触发 DOM 的更新渲染
12. 用创建好的实例 beforeRouteEnter 守卫里传给 next 的回调函数

### 路由元信息

### export 和 export default 的区别
1. 一个文件或模块中，export、import 可以有多个，export default 只能有一个
2. export 导入时需要使用解构赋值的方式引入，export default 不需要

### Vue transiton 过渡
```
v-enter {
  opacity: 0
}
v-enter-active {
  transition: opacity 1s ease
}
v-enter-to {
  opacity: 1
}
v-leave {
  opacity: 1
}
v-leave-active {
  transiton: opacity 1s ease
}
v-leave-to {
  opacity: 0
}
```