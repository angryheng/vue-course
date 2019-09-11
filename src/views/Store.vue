<template lang="html">
  <div class="store">
    <h1>Store</h1>
    <z-input @input="inputEvent" />
    <z-show :content="inputValue" />
    <h3>{{appName}}</h3>
    <h3>{{userName}}</h3>
    <h3>{{inputValue}} 的最后一个字符是 {{inputValueLastLetter}}</h3>
    <h3>{{appNameWithVersion}}</h3>
    <h3>{{firstLetter}}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ZInput from '@/components/ZInput'
import ZShow from '@/components/ZShow'


export default {
  name: 'Store',
  data() {
    return {
      inputValue: ''
    }
  },
  mounted() {
  },
  computed: {
    // ‘user’ 为定义了 namespaced 的模块名
    ...mapState('user', {
      appName: 'appName',
      // userName: (state) => state.user.userName
      // 这种方式在模块文件中定义了 namespaced 为 true
      userName: (state) => state.userName
    }),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1)
    },
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ])
    // appName() {
    //   return this.$store.state.appName
    // },
    // userName() {
    //   // 这里的 user 指的是对应的模块名
    //   return this.$store.state.user.userName
    // }
    // ...mapState([
    //   'appName',
    // ])
  },
  components: {
    ZInput,
    ZShow
  },
  methods: {
    inputEvent(a) {
      this.inputValue = a
    }
  }
}
</script>

<style lang="css" scoped>
</style>
