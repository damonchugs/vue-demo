<template>
  <div class="videos">
    <div class="title" @click="videoShow = !videoShow">
      <p>{{ data.name }}</p>
    </div>
    <video v-if="videoShow" :src="baseUrl + data.name" controls />
  </div>
</template>

<script>
  export default {
    name: 'MKDIRVIDEO',
    props: {
      data: {
        type: Object,
        default() { return { name: '', type: '' } }
      },
      baseUrl: {
        type: String,
        default() { return '' }
      }
    },
    data() {
      return {
        videoShow: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.videos {
  .title {
    line-height: 30px;
    cursor: pointer;
  }
  video {
    width: 240px;
    height: 180px;
    background-color: rgba(0,0,0, 0.9);
  }
}
</style>