<template lang="html">
  <div class="show">
    <h1>ZShow：{{content}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ZShow',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
