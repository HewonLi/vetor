<template>
<div class="header-box">
  <el-dialog
    title="登录"
    :visible.sync="dialogVisible"
    :width="dialogWidth"
    :before-close="handleClose"
    center
    :fullscreen=dialogHeight
    >
    <div class="load-content">
      <el-input type="text" placeholder="请输入手机/邮箱"  :minlength=6>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-input type="input" placeholder="请输入密码">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <div class="identifying-code">
        <el-input placeholder="请输入验证码"></el-input>
        <div class="identifying-img">
          <img src="../../style/images/captcha.jpg" alt="">
        </div>
      </div>
      <div class="remember-select">
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <router-link to="/forget"><span class="el-icon-setting" style="margin-right:5px;"></span><span>忘记密码</span></router-link>
      </div>
      <el-button type="primary" size="medium">登录</el-button>

    </div>
  </el-dialog>
  <div class="container">
    <div class="header-content">
      <el-row>
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="8">
          <div class="header-left">
            <div class="logo">
              <img src="../../style/images/logo.png" alt="">
            </div>
            <div class="header-coin-select"></div>
            <a href="javascript:;" class="iconfont icon-iconfonthaofang25" @click="isShowNav=!isShowNav"></a>
          </div>
        </el-col>
        <transition name="fade">
          <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="16" v-show="isShowNav">
            <div class="header-right">
              <div class="header-nav-list">
                <router-link to="/index" tag="div" class="tab-item">
                  <span class="tab-link" >首页</span>
                </router-link>
                <router-link to="/trade" tag="div" class="tab-item">
                  <span class="tab-link" >交易中心</span>
                </router-link>
                <router-link to="/weituoguanli" tag="div" class="tab-item">
                  <span class="tab-link" >委托管理</span>
                </router-link>
                <router-link to="/user" tag="div" class="tab-item">
                  <span class="tab-link" >个人中心</span>
                </router-link>
                <router-link to="/news" tag="div" class="tab-item">
                  <span class="tab-link" >资讯</span>
                </router-link>
                <a href="javascript:;" class="tab-item" @click="dialogVisible = true">
                  <span class="tab-link" >登录/注册</span>
                </a>
              </div>
            </div>
          </el-col>
        </transition>
      </el-row>
    </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default{
    data(){
        return{
          isShowNav:true,
          winWidth:'',
          dialogVisible: false,
          checked:false,
          dialogWidth:'20%',
          dialogHeight:false
        }
    },
  methods:{
    handleClose() {
      this.dialogVisible=false
    },
    setLoginWH(){
      var winWidth
      if (window.innerWidth){
        winWidth = window.innerWidth;
      }
      else if (document.body && document.body.clientWidth){
        winWidth = document.body.clientWidth;
      }
      if(winWidth<1720&&winWidth>1500){
        this.dialogWidth='22%'
      }
      else if(winWidth<1500&&winWidth>1250){
        this.dialogWidth='26%'
      }
      else if (winWidth<1250&&winWidth>1024){
          this.dialogWidth='35%'
      }
      else if (winWidth<1024&&winWidth>750){
        this.dialogWidth='45%'
      }
      else if(winWidth<750){
        this.dialogWidth='100%'
        this.dialogHeight=true
      }
    }
  },
  mounted(){
        this.setLoginWH()
        var that = this
        window.onresize=function () {
          that.isShowNav=true
          that.setLoginWH()
        }
  }
}
</script>

<style lang="less" type="text/less" scoped>
.header-box{
  background: #f6f6f8;
  display: flex;
  align-items: center;
  padding: 20px 0;
  .load-content{
    >div{
      margin-bottom: 20px;
    }
    .identifying-code{
      display: flex;
      align-items: center;
      .identifying-img{
        padding-left: 15px;
        >img{
          width: 90px;
        }
      }
    }
    .remember-select{
      display: flex;
      justify-content: space-between;
    }
  }
  .header-content{
    .el-row{
      display: flex;
      .header-left{
        display: flex;
        align-items: center;
        .logo{
          width: 180px;
        }
        >a{
          display: none;
        }
      }
      .header-right{
        .header-nav-list{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 20px;
          .tab-item{
            padding: 0 10px;
            .tab-link{
              cursor: pointer;
              font-size: 14px;
              color: #333;
              padding: 10px 25px;
              border-radius: 20px;
              &:hover{
                background: #02b2b5 ;
                color: #fff;
              }
            }
          }
        }

      }
      .showNav{
        display: block!important;
      }
    }


  }
  .router-link-active{
    .tab-link{
      background: #02b2b5 !important;
      color: #fff!important;
    }
  }
}

</style>
