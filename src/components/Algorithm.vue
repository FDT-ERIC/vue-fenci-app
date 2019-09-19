<template>
  <div class="fenci">
    <!-- 头部 -->
    <nav class="header-">
      <div class="nav_bg">
        <img src="../assets/fenci.jpg" alt />
      </div>
      <div class="nav_back">
        <i @click="$router.push('/app/home')" class="fa fa-chevron-left"></i>
      </div>
      <div class="shop_image">
        <img src="../assets/chuangxin.jpg" alt />
      </div>
    </nav>

    <!-- 弹窗 -->
    <div class="index-rst">
      <div class="rst-name">
        <span @click="showInfoModel = true">{{data.title}}</span>
        <i class="fa fa-caret-right"></i>
      </div>
      <InfoModel :rst="data" :showInfoModel="showInfoModel" @close="showInfoModel = false" />
      <!-- 模型信息 -->
      <div class="rst-order">
        <span>框架{{data.model}}</span>
        <span>性能{{data.performance}}</span>
        <span>版本{{data.version}}</span>
      </div>
      <!-- 版权 -->
      <p class="rst-promotion">
          {{data.copyright}}
      </p>
    </div>
  </div>
</template>

<script>
import InfoModel from "./InfoModel";
import NavBar from "./NavBar";
export default {
  name: "Algorithm",
  props: {
    data: Object
  },
  data() {
    return {
      showInfoModel: false
    };
  },
  components: {
    InfoModel,
    NavBar
  }
};
</script>

<style>
.shop {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header-nav {
  position: relative;
}
.nav_bg img {
  width: 100%;
  height: 26.666667vw;
}
.nav_back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 26.666667vw;
  background: rgba(0, 0, 0, 0.5);
}
.nav_back i {
  color: #fff;
  font-size: 1.3rem;
  margin-left: 2.333333vw;
  margin-top: 3.333333vw;
}
.shop_image {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -10vw;
  margin-top: 11vw;
}
.shop_image img {
  width: 20vw;
  height: 20vw;
  border-radius: 0.8vw;
}
.index-rst {
  padding: 8vw 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: inset 0 -0.666667vw 0.666667vw hsla;
}
.index-rst .rst-name {
  flex: 1;
  width: 72vw;
  font-size: 1.3rem;
  font-weight: 700;
  white-space: nowrap;
  padding-right: 2.666667vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.6vw 0;
}
.rst-name span {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 75%;
}
.index-rst .rst-order {
  white-space: nowrap;
  height: 3.2vw;
  margin-top: 1.733333vw;
  color: #666;
  text-align: center;
  font-size: 0.6rem;
}
.rst-order span {
  margin: 0 3px;
}
.index-rst .rst-promotion {
  width: 80vw;
  font-size: 0.6rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2.266667vw auto 2.666667vw;
  padding: 0;
  white-space: nowrap;
}
</style>
