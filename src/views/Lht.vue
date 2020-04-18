<template>
  <div class="lht">
    <h1>My name is LHT</h1>
    <h5>{{result.request}}</h5>
  </div>
</template>

<script>
import { request } from "../network/request";

export default {
  data() {
    return {
      result: ""
    };
  },
  created() {
		//发送请求
    request({
      url: "/#/Images"
    }).then(res => {
        console.log(res);
        this.result = res;
      }).catch(err => {
        console.log(err);
      });
  }
};
</script>