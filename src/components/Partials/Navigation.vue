<template>
  <div class="container">
    <nav>
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/portfolio" active-class="active">Portfolio</router-link>
      <router-link to="/about" active-class="active">About</router-link>
      <router-link to="/contact" active-class="active">Contact</router-link>
    </nav>
  </div>
</template>
<style scoped>
nav{
  margin: 10px;
}
nav a{
  margin: 10px;
  font-size: 28px;
  text-decoration: none;
  color: hotpink;
  font-family: Montserrat, sans-serif;
  display: inline-block;
}
nav a:hover{
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  -o-transform: translateY(-10px);
  transform: translateY(-10px);
}
.active{
  color: rebeccapurple;
  font-weight: bold;
  text-shadow: 2px 2px hotpink !important;
}
</style>
