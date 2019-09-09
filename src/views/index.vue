<template>
  <div class="index">
    <router-view></router-view>
    <TabBar :data="tabbarData"/>
  </div>
</template>

<script>
import TabBar from "../components/TabBar";
import { isContext } from 'vm';
export default {
    name: "index",
    data() {
      return {
        tabbarData: [
          {title: "首页", icon: "home", path: "/home"},
          {title: "测试", icon: "file-text-o", path: "/test"},
          {title: "首页", icon: "user", path: "/me"}
        ]
      }
    },
    components: {
      TabBar
    }
};
</script>

<style>
.index {
  width: 100%;
  height: calc(100% - 45px);
}
</style>
