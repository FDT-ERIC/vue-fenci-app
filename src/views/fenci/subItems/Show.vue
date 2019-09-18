<template>
  <div class="show">
    <mt-field placeholder="请输入文本" type="textarea" rows="5" v-model="form.input"></mt-field>
    <button
      type="button"
      class="btn btn-outline-primary btn-sm"
      style="margin:20px 0 20px 0; width:20%;"
      @click="submitBtn"
    >提交分析</button>
    <div>
      <button class="resBtn btn btn-outline-secondary btn-sm" type="button" v-for="(item, index) in response" :key="index">
        {{item}}
      </button>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Show",
  data() {
    return {
      response: [],
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
          "/base/cws",
          qs.stringify({
            text: this.form.input,
            version: this.form.version
          })
        )
        .then(res => {
          this.response = res.data.res['words']
        });
    }
  }
};
</script>

<style>
.resBtn {
  margin-right: 2%
}
</style>
