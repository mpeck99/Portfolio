import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Portfolio from '@/components/Work';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/portfolio',
      name: 'Work',
      component: Portfolio,
    },
  ],
});
