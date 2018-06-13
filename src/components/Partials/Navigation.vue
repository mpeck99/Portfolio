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
  margin: 25px;
  font-size: 28px;
  text-decoration: none;
  color: hotpink;
}
.active{
  color: rebeccapurple;
  font-weight: bold;
  text-shadow: 2px 2px hotpink;
}
</style>
