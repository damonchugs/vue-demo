<template>
  <div class="mkdirs">
    <div class="logo" @click="contentShow = !contentShow">
      <img :src="contentShow ? MkdirImgRed : MkdirImg" />
      <p>{{ data.name }}</p>
    </div>
    <div v-if="contentShow" class="content">
      <mkdir-child :mkdir="data.child" :base-url="baseUrl + data.name + '/'" />
    </div>
  </div>
</template>

<script>
  import MkdirImg from '@/assets/img/mkdir.png'
  import MkdirImgRed from '@/assets/img/mkdir-red.png'
  export default {
    name: 'MKDIRBOX',
    components: { MkdirChild: () => import('@/views/Dir/index') },
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
        MkdirImg, MkdirImgRed,
        contentShow: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.mkdirs {
  height: 180px;
  display: flex;
  flex-direction: column;
  text-align: center;
  .logo {
    cursor: pointer;
    position: relative;
    p {
      position: relative;
      top: -90px;
      color: white;
    }
  }
}
</style>