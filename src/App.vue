<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" tag="button">Home</router-link>|
      <router-link to="/about" tag="button">About</router-link>|
      <router-link :to="{path:'/user',query:{name:'卡卡',sex:'男'}}" tag="button">User</router-link>|
      <button @click="btn">LHT</button> |
      <router-link to="/hellovuex">HelloVuex</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

export default {
  methods: {
    btn() {
      this.$router.push("/lht");
    }
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  button {
    color: red;
    &.router-link-active {
      color: green;
    }
  }

  a {
    font-weight: bold;
    color: red;
    &.router-link-active {
      color: green;
    }
  }
}
</style>
