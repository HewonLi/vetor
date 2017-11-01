<template>
  <div id="app">
    <div class="header">
      <header-view></header-view>
    </div>
    <transition name="fadeIn" enter-active-class="animated fadeIn">
      <router-view class="layout-content" v-show="zoomShow"></router-view>
    </transition>
    <div class="footer">尾部</div>
  </div>
</template>
<script>
  import headerView from 'components/header/header'
export default {
  name: 'app',
  data(){
      return{
        zoomShow:false
      }
  },
  components:{
    headerView
  },
  methods:{

  },
  mounted(){
    this.zoomShow =!this.zoomShow
  }
}
</script>

<style lang="less" type="text/less">
@import "./style/css/base.less";
@import "./style/fonts/iconfont.css";
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .layout-content{
      flex: 1;
    }
  }
</style>
