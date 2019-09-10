<template>
  <div class="about">
    <h1>This is an about page  {{ food }}</h1>
  </div>
</template>
<script>
export default {
  name: 'About',
  props: {
    food: {
      type: String,
      default: 'banana'
    }
  }
}
</script>
