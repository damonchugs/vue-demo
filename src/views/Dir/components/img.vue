<template>
  <div>
    <!-- <img :src="baseUrl + data.name" /> -->
    <el-image 
      :style="`width: ${sw}px; height: ${sh}px`"
      :src="baseUrl + data.name" 
      :preview-src-list="srcList"
      @load="imgLoad">
    </el-image>
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
      },
      srcList: {
        type: Array,
        default() { return [] }
      }
    },
    data() {
      return {
        sw: 240,
        sh: 180
      }
    },
    methods: {
      imgLoad(e) {
        const path = e.path[0]
        this.sw = this.sh * path.naturalWidth / path.naturalHeight
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