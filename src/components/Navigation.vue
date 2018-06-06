<template>
  <div>
    <div class="fallingWords">
      <span>HTML</span>
      <span>CSS</span>
      <span>JAVASCRIPT</span>
      <span>PHP</span>
      <span>SQL</span>
      <span>GIT</span>
      <span>VUEJS</span>
      <span>NODEJS</span>
      <span>REACTJS</span>
      <span>AGILE</span>
      <span>BOOTSTRAP</span>
      <span>GITHUB</span>
      <span>PHOTOSHOP</span>
    </div>
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
}
.active{
  color: red;
}
.fallingWords{
  position: absolute;
  width: 100%;
}
.fallingWords span {
  display: inline-block;
  height: 80px;
  z-index: 100;
  margin: 50px;
  background:url('../assets/portfolio_logo.png');
  -webkit-animation: fallingWords 10s infinite linear;
  -moz-animation: fallingWords 10s infinite linear;
}
.fallingWords span:nth-child(5n+5) {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-fill-mode: both;
}
.fallingWords span:nth-child(3n+2) {
  -webkit-animation-delay: 2s;
  -moz-animation-delay: 1s;
  animation-fill-mode: both;
}
.fallingWords span:nth-child(2n+5) {
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 1s;
  animation-fill-mode: both;
}
@-webkit-keyframes fallingWords {
  0% {
    visibility: hidden !important;
    opacity:0;
    -webkit-transform: translate(-100px, 0px) rotateZ(0deg);
  }

  75% {
    opacity: 1;
    -webkit-transform: translate(-100px, 600px) rotateZ(-270deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(-75px, 900px) rotateZ(-360deg);
  }

}
</style>
