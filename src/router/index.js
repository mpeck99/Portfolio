import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Portfolio from '@/components/Work';
import AnimalShelter from '@/components/Projects/AnimalShelter';
import MusicSearch from '@/components/Projects/MusicSearch';
import WD6 from '@/components/Projects/WD6';
import ImgGallery from '@/components/Projects/ResponsiveImageGallery';

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
    {
      path: '/portfolio/Ward-Animal-Shelter',
      name: 'Ward-Animal-Shelter',
      component: AnimalShelter,
    },
    {
      path: '/portfolio/Music-Search',
      name: 'Music Search',
      component: MusicSearch,
    },
    {
      path: '/portfolio/Wd6',
      name: 'wd6',
      component: WD6,
    },
    {
      path: '/portfolio/Img-Gallery',
      name: 'Image Gallery',
      component: ImgGallery,
    },
  ],
});
