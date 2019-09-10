<template lang="html">
  <div class="email">
    <h1>{{myEmail}}</h1>
    <button type="button" name="button" @click="handleClick">Bus总线</button>
  </div>
</template>

<script>
export default {
  name: 'Email',
  data() {
    return {
      myEmail: 'angryheng@gmail.com'
    }
  },
  mounted() {
  },
  methods: {
    handleClick() {
      this.$bus.$emit('click', this.myEmail)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
