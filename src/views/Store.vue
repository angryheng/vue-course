<template lang="html">
  <div class="store">
    <h1>Store</h1>
    <z-input @input="inputEvent" />
    <z-show :content="inputValue" />
  </div>
</template>

<script>
import ZInput from '@/components/ZInput'
import ZShow from '@/components/ZShow'

export default {
  name: 'Store',
  data() {
    return {
      inputValue: ''
    }
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
