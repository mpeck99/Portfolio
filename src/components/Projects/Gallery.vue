<template>
  <div class="container">
    <div class="back">
      <router-link to="/portfolio">
        <i class="fas fa-angle-double-left fa-2x"></i>
      </router-link>
    </div>
    <h1>Responsive Gallery</h1>
  </div>
</template>
<style scoped>
  .back{
    float: left;
    color: rebeccapurple;
    justify-content: center;
    text-shadow: 2px 2px hotpink !important;
  }
  .back:hover{
    -webkit-transform: translate(-4px,0);
    -moz-transform: translate(-4px,0);
    -ms-transform: translate(-4px,0);
    -o-transform: translate(-4px,0);
    transform: translate(-4px,0);
  }
  a{
    text-decoration: none;
    font-size:22px;
    margin: 0;
    color: deepskyblue;
    float: left;
    justify-content: center;
    text-shadow: 2px 2px rebeccapurple !important;
  }
</style>
