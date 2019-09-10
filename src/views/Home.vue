<template>
  <div class="home">
    <button type="button" name="button" @click="handleBtnClick('back')">返回上一页</button>
    <button type="button" name="button" @click="handleBtnClick('push')">跳转到Parent</button>
    <button type="button" name="button" @click="handleBtnClick('replace')">替换到parent</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
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
