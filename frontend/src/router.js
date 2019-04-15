import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Profil from './views/Profil.vue';
import SignUp from './views/SignUp.vue';
import SignIn from './views/SignIn.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
    	path:'/Profil',
    	name:'Profil',
    	component: Profil,
    },
    {
      path:'/SignUp',
      name:'SignUp',
      component: SignUp
    },
    {
      path:'/SignIn',
      name:'SignIn',
      component: SignIn
    }
  ],
});
