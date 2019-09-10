<template lang="html">
  <div class="tel">
    <h1>15801332344</h1>
    <hr>
    <p>{{getEmail}}</p>
  </div>
</template>

<script>
export default {
  name: 'Tel',
  data() {
    return {
      getEmail: ''
    }
  },
  mounted() {
    this.$bus.$on('click', this.myEvent)
  },
  methods: {
    myEvent(s) {
      this.getEmail = s
    }
  }
}
</script>

<style lang="css" scoped>
</style>
