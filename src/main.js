import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

import { registerMicroApps, start } from "qiankun";

const apps = [
  {
    name: "vue2App", //应用名字，这个是微应用app1
    entry: "//localhost:10000", //默认会加载这个html 解析里面的js(这里使用的fetch) 动态的执行(子应用必须支持跨域)
    container: "#vue2", //容器名 挂载元素
    activeRule: "/vue2", // 激活路径 激活规则，当访问 /vue时就会把这个应用挂载到 #vue上
    props: {
      a: 1, //实现主应用给子应用传参
    },
  },
  {
    name: "reactApp",
    entry: "//localhost:20000",
    container: "#react",
    activeRule: "/react",
    props: {
      b: 2,
    },
  },
  {
    name: "vue3App",
    entry: "//localhost:30000",
    container: "#vue3",
    activeRule: "/vue3",
    props: {
      c: 3,
    },
  },
];

registerMicroApps(apps); //注册子应用
start({
  prefetch: false, // 取消预加载
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app-base"); //修改挂载节点，防止跟app1-vue节点重名
