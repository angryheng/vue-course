import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(Router)

const router = new Router({
  // HTML5 history 模式
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  console.log(`${to}=========${from}`)
  next()
})

export default router
