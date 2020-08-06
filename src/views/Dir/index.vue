<template>
  <div class="mkdir">
    <div v-for="(t, index) in mkdir" :key="index">
      <Imgs
        v-if="format_img(t.type)"
        :data="t"
        :base-url="baseUrl"
        :srcList="srcLists"
      />
      <Videos v-if="format_video_audio(t.type)" :data="t" :base-url="baseUrl" />
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
    computed: {
      srcLists() {
        const srcs = []
        this.mkdir.filter(te => ['jpg', 'png', 'jpeg', 'bmp', 'gif', 'webp'].includes(te.type)).map(t => {
          srcs.push(this.baseUrl + t.name)
        })
        return srcs
      } 
    },
    methods: {
      format_img(type) {
        const format = [
          'webp', 'bmp', 'pcx', 'tif', 'git', 'jpeg',
          'tga', 'exif', 'fpx', 'svg', 'psd', 'cdr',
          'pcd', 'dxf', 'ufo', 'eps', 'ai', 'png', 'hdri',
          'raw', 'wmf', 'flic', 'emf', 'ico', 'jpg'
        ]
        return format.includes(type.toLowerCase())
      },
      format_video_audio(type) {
        const format = [
          'mpeg', 'avi', 'navi', 'asf', 'mov', 'wmv',
          '3gp', 'rm', 'rmvb', 'flv', 'f4v', 'h.265', 'h.265',
          'mp4', 'mkv', 'divx', 'xvid', 'aac'
        ]
        return format.includes(type.toLowerCase())
      }
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
  background-color: rgba(0,0,0, .1);
}
</style>