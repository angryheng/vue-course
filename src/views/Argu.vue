<template lang="html">
  <div class="argu">
    <!-- $route 代表当前加载的路由对象 -->
    <!-- <h1>{{$route.params.name}}</h1> -->
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Argu',
  props: {
    name: {
      type: String,
      default: 'zhangsanfeng'
    }
  }
}
</script>
