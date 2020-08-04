<template>
  <div>
    <img :src="baseUrl + data.name" />
  </div>
</template>

<script>
  export default {
    name: 'MKDIRIMG',
    props: {
      data: {
        type: Object,
        default() { return { name: '', type: '' } }
      },
      baseUrl: {
        type: String,
        default() { return '' }
      }
    }
  }
</script>

<style lang="scss" scoped>
img {
  width: auto;
  height: 180px;
}
</style>