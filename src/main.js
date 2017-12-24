// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import DbMovie from './components/DbMovie'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Pagination from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Pagination)


const router = new VueRouter({
  mode: 'history',
  routes: [
    // 动态路径参数 以冒号开头
    // {path: '/', redirect: '/page/1', component: DbMovie},
    {path: '/page/:id', component: DbMovie},
    // { path: '/page/:id', redirect: { name: '1' }}
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App, DbMovie},
  router: router,
})
