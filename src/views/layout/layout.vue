<template>
<div class="layout">
  <transition name="zoom" enter-active-class="animated zoomIn">
  <div class="banner" v-show="zoomShow">
    <div class="banner-content">
      <img src="../../style/images/banner1.jpg" alt="">
    </div>
  </div>
  </transition>
  <div>6666</div>
</div>
</template>
<script type="text/ecmascript-6">
export default{
    data(){
        return{
          input:'',
          zoomShow:false,
          imgList:[
              ''
          ]
        }
    },
    methods:{

  },
  mounted(){
            this.zoomShow=true
  }
}
</script>

<style lang="less" type="text/less">
.layout{
  .banner{
    width: 100%;
    background: #233a63;
    .banner-content{
      width: 100%;
      >img{
        width: 100%;
      }
    }

  }
}

</style>
