import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Portfolio from '@/components/Work';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
      metaTags: [
        {
          name: 'Home',
          content: 'Morgan Peck Portfolio',
        },
        {
          property: 'og:Home',
          content: 'Morgan Peck Portfolio',
        },
      ],
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
