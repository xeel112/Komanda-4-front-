import Vue from 'vue'
import Main from './Main.vue'
import VueRouter from 'vue-router'
import Home from './comps/Home.vue'
import Login from './comps/Login.vue'
import Reg from './comps/Reg.vue'
import Basket from './comps/Basket.vue'
import ProdCard from './comps/Product-card.vue'
import Checkout from './comps/Checkout.vue'
import Profile from './comps/Profile.vue'
import Bonuses from './comps/Bonuses.vue'
import About from './comps/About.vue'
import Assess from './comps/Assessment.vue'
import Catalog from './comps/Catalog.vue'
import Favorities from './comps/Favorities.vue'
import NotFound from './comps/Not-found.vue'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [
		{path: '/Home/:user', name: 'Home', component: Home},
		{path: '/Login', component: Login},
		{path: '/Registry', component: Reg},
    {path: '/Basket/:user_data', name: 'Basket', component: Basket},
    {path: '/Card/:Data', name: 'Card', component: ProdCard},
    {path: '/Checkout/:user_id', name: 'Checkout', component: Checkout},
    {path: '/Profile/:user_data', name: 'User', component: Profile},
    {path: '/Bonuses', component: Bonuses},
    {path: '/About', component: About},
    {path: '/Assessment', component: Assess},
    {path: '/Catalog/:user', name: 'Catalog', component: Catalog},
    {path: '/Favorities/:user_data', name: 'Favorities', component: Favorities},
    {path: '*/:user', component: NotFound},
	]
});

new Vue({
  el: '#app',
  router,
  components: {
  	Main,
  },
  /*render: h => h(App),*/
  template: '<Main/>',
})
