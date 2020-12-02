import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';

Vue.use(VueRouter);

export const router = new VueRouter({
	routes,
	mode : 'history'
});


new Vue({
  el: '#app',
  render: h => h(App)
})
