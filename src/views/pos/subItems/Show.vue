<template>
  <div class="show">
    <mt-field placeholder="请输入文本" type="textarea" rows="5" v-model="form.input"></mt-field>
    <button
      type="button"
      class="btn btn-outline-primary btn-sm"
      style="margin:20px 0 20px 1%; width:20%;"
      @click="submitBtn"
    >提交分析</button>
    <div class="resArea">
      <div v-for="(item, index) in this.posData" :key="index" style="float:left">
        <button type="button" class="btn btn-outline-secondary btn-sm m-1">
          <div style=""><span>{{item[0]}}</span></div>
          <div><span>{{item[1]}}</span></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Show",
  data() {
    return {
      response: "",
      posData: [],
      form: {
        input: "",
        version: "v0.2"
      }
    };
  },
  methods: {
    submitBtn() {
      this.$axios
        .post(
          "/base/pos",
          qs.stringify({
            text: this.form.input,
            version: this.form.version
          })
        )
        .then(res => {
          this.posData = res.data.res.pos;
        });
    }
  }
};
</script>

<style>
.resArea {
  background-color: white
}
</style>
