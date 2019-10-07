<template>
  <div class="pos">
    <Algorithm :data="allData"/>
    <!-- 导航 -->
    <NavBar :data="'pos'"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Algorithm from "../../components/Algorithm";
import NavBar from "../../components/NavBar";
export default {
  name: "pos",
  data() {
    return {
      allData: {
        title:
          "词性分析（该服务能够识别出文本串中的基本词汇（分词），对这些词汇进行重组）",
        desc: "词性分析，很牛",
        model: "BERT",
        params: "1.6 M",
        performance: ">SOTA",
        version: "V 0.2",
        copyright: "版权：创新工场 大湾区人工智能研究院"
      }
    };
  },
  components: {
      Algorithm,
      NavBar
  }
};
</script>

<style>
</style>