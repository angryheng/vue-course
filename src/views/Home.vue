<template>
  <div class="home">
    <button type="button" name="button" @click="handleBtnClick('back')">返回上一页</button>
    <button type="button" name="button" @click="handleBtnClick('push')">跳转到Parent</button>
    <button type="button" name="button" @click="handleBtnClick('replace')">替换到parent</button>
    <h1>{{ food }}</h1>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to.name)
    // 这里获取不到 this
    // console.log(this)
    next((vm) => {
      console.log(vm)
    })
  },
  // beforeRouteLeave(to, from, next) {
  // const leave = confirm('你确定要离开吗？')
  // if (leave) {
  //   next()
  // } else {
  //   next(false)
  // }
  // },
  props: {
    food: {
      type: String,
      default: 'Orange'
    }
  },
  methods: {
    handleBtnClick(type) {
      switch (type) {
        case 'back':
          this.$router.back()
          break
        case 'push':
          const name = 'xueli'
          this.$router.push({
            path: `/argu/${name}`
            // path: '/parent'
            // 这里的 name 指的是命名路由 name
            // name: 'argu',
            // params: {
            //   name: 'zxh'
            // }
            // query: {
            //   name: 'angryheng'
            // }
          })
          break
        case 'replace':
          this.$router.replace('/parent')
          break
        default:
      }
    }
  }
}
</script>
