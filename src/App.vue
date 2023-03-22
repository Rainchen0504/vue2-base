<template>
  <div id="app-base">
    <el-menu default-active="/" :router="true" mode="horizontal">
      <el-menu-item index="/">基类项目</el-menu-item>
      <el-menu-item index="/vue2">vue2应用</el-menu-item>
      <el-menu-item index="/react">react项目</el-menu-item>
      <el-menu-item index="/vue3">vue3项目</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vue2"></div>
    <div id="react"></div>
    <div id="vue3"></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
