<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/aboutnews">足球</router-link>|
    <router-link to="/about/aboutme">皇马</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      path: "/about/aboutnews"
    };
  },
  activated() {
		console.log(this.path)
    this.$router.push(this.path).catch(err => {
      err;
    });
	},
	
  beforeRouteLeave(to, from, next) {
		console.log(this.$route.path)
    this.path = this.$route.path;
    next();
  }
};
</script>

<style lang="less">
.about {
  a {
    color: blueviolet;
    &.router-link-active {
      color: yellowgreen;
    }
  }
}
</style>