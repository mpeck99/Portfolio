<template>
  <div id="app">
    <Navigation class="navigation"></Navigation>
    <transition name="router-anim" class="router-anim-enter-active">
      <router-view/>
    </transition>
  </div>
</template>

<script>
/* eslint-disable quote-props */

import Navigation from './components/Partials/Navigation';

export default {
  name: 'App',
  components: {
    Navigation,
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
  html, #app{
    background-color: #F6EFEE;
  }
</style>
