<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/aboutnews">足球</router-link>|
    <router-link to="/about/aboutme">皇马</router-link>
    <router-view></router-view>
  </div>
</template>

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