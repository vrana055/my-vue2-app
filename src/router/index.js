import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import About from '../components/About.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

export default new Router({
  mode: 'history',
  routes
});
