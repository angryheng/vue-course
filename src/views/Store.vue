<template lang="html">
  <div class="store">
    <h1>Store</h1>
    <z-input @input="inputEvent" />
    <z-show :content="inputValue" />
    <h3>{{appName}}</h3>
    <h3>{{userName}}1111</h3>
    <h3>{{inputValue}} 的最后一个字符是 {{inputValueLastLetter}}</h3>
    <h3>{{appNameWithVersion}}</h3>
    <h3>{{firstLetter}}</h3>
    <hr>
    <h3>{{appVersion}}</h3>
    <button type="button" name="button" @click="handleClick">改变store中的数据</button>
    <button type="button" name="button" @click="getAppVersion">获取store中的appVersion</button>
    <button type="button" name="button" @click="updateAppName">异步获取信息修改appName</button>
    <button type="button" name="button" @click="updateAppName2">dispatch触发actions</button>
    <button type="button" name="button" @click="registerModule">动态注册模块</button>
    <p v-for="(item, index) of todoList" :key="index">{{item}}</p>
    <p v-for="(item, index) of todoList1" :key="index">{{item}}</p>
  </div>
</template>

<script>
import {
  mapState, mapGetters, mapMutations, mapActions
} from 'vuex'
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
    ...mapState({
      appName: 'appName',
      appVersion: 'appVersion',
      // userName: (state) => state.user.userName
      userName: (state) => state.user.userName,
      todoList: (state) => (state.todo ? state.todo.todoList : []),
      todoList1: (state) => (state.user.todo ? state.user.todo.todoList : [])
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
    ...mapMutations([
      'SET_APP_NAME',
      'SET_APP_VERSION'
    ]),
    ...mapActions({
      updateAppName: 'updateAppName'
    }),
    inputEvent(a) {
      this.inputValue = a
    },
    getAppVersion() {
      this.$store.commit('SET_APP_VERSION')
    },
    handleClick() {
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      // this.$store.commit('SET_APP_NAME', {
      //   appName: 'newAppName'
      // })
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      this.SET_APP_NAME({
        appName: 'newAppName'
      })
    },
    updateAppName2() {
      this.$store.dispatch('updateAppName')
    },
    registerModule() {
      this.$store.registerModule('todo', {
        state: {
          todoList: ['学习mutations', '学习actions']
        }
      })
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            'vue',
            'react',
            'angular'
          ]
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
