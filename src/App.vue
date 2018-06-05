<template>
  <div id="app">
    <Navigation></Navigation>
    <transition name="router-anim" class="router-anim-enter-active">
      <router-view/>
    </transition>
  </div>
</template>

<script>
/* eslint-disable quote-props */

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Navigation from './components/Navigation';

Vue.use(BootstrapVue);
export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app img{
  margin-top: 10%;
}
.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-75px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-75px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
