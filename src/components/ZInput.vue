<template lang="html">
  <div class="input">
    <input type="text" @input="handleInput" :value="value">
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(ev) {
      const { value } = ev.target
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
