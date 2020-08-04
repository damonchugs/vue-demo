<template>
  <div class="mkdir">
    <div v-for="(t, index) in mkdir" :key="index">
      <Imgs v-if="['jpg', 'png', 'jpeg', 'bmp', 'gif', 'webp'].includes(t.type)" :data="t" :base-url="baseUrl" />
      <Videos v-if="['mpeg', 'mp4', 'avi', 'rmvb', 'wmv', 'mkv'].includes(t.type)" :data="t" :base-url="baseUrl" />
      <Mkdirs v-if="['dir'].includes(t.type)" :data="t" :base-url="baseUrl" />
    </div>
  </div>
</template>

<script>
  import Imgs from "@/views/Dir/components/img";
  import Videos from "@/views/Dir/components/video";
  import Mkdirs from "@/views/Dir/components/mkdir";
  import MkdirData from "@/utils/mkdir.js";
  export default {
    name: 'MKDIR',
    components: { Imgs, Videos, Mkdirs },
    props: {
      mkdir: {
        type: Array,
        default() { return MkdirData }
      },
      baseUrl: {
        type: String,
        default() { return 'http://192.168.100.71:2423/test/' }
      }
    },
    mounted() {
      console.log(this.mkdir)
    }
  }
</script>

<style lang="scss" scoped>
.mkdir {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 30px;
}
</style>