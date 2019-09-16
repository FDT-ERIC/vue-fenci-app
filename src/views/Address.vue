<template>
  <div class="address">
      <Header :isLeft="true" title="选择收货地址"/>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
    name: "Address",
    components: {
        Header
    }
};
</script>

<style>
</style>