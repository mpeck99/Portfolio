<template>
    <div class="container">
      <div class="fallingWords">
        <span class="skill1">HTML</span>
        <span class="skill2">CSS</span>
        <span class="skill3">JAVASCRIPT</span>
        <span class="skill4">PHP</span>
        <span class="skill1">SQL</span>
        <span class="skill2">GIT</span>
        <span class="skill3">DEVELOPMENT</span>
        <span class="skill4">VUEJS</span>
        <span class="skill1">NODEJS</span>
        <span class="skill2">REACTJS</span>
        <span class="skill3">AGILE</span>
        <span class="skill4">MONGODB</span>
        <span class="skill1">REACTJS</span>
        <span class="skill2">AGILE</span>
        <span class="skill3">MEAN</span>
        <span class="skill4">WIREFRAME</span>
        <span class="skill1">FRONTEND</span>
        <span class="skill2">BACKEND</span>
        <span class="skill3">JQUERY</span>
        <span class="skill4">BOOTSTRAP</span>
      </div>
    <div class="logo">
      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/portfolio_logo.png?alt=media&token=d999092c-1b4c-435f-a19a-0977781ce147" class="img-fluid" >
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Your Web Developer',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .logo img{
    padding:10px;
    text-align: center;
    width: 800px;
    margin-top: 10%;
    z-index:1;
  }
  .logo{
    margin: auto;
    padding:10px;
    position: relative;
  }
  .data h1{
    animation: Float 20s 0ms linear infinite;
    opacity: 5;
    position: absolute;
    z-index: 100;
  }
  @keyframes Float {
    0% {margin-left: 100%;}
    100% {margin-left: -1000px;}
  }
  .fallingWords{
    position: absolute;
  }
  .fallingWords span {
    display: inline-block;
    height: 80px;
    z-index: 100;
    margin: 50px;
    background:url('../assets/portfolio_logo.png');
    -webkit-animation: fallingWords 8s infinite linear;
    -moz-animation: fallingWords 8s infinite linear;
    animation-delay: -10s;
    overflow-y: hidden;
  }
  .fallingWords span:nth-child(5n+5) {
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    animation-fill-mode: both;
  }
  .fallingWords span:nth-child(3n+2) {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-fill-mode: both;
  }
  .fallingWords span:nth-child(2n+5) {
    -webkit-animation-delay: 2.5s;
    -moz-animation-delay: 2.5s;
    animation-fill-mode: both;

  }
  @keyframes fallingWords {
    0% {
      opacity:0;
      -webkit-transform: translate(-100px, 0px) rotateZ(0deg);
      overflow-y: hidden;
    }
    25% {
      opacity: 1;
      overflow-y: hidden;
    }
    75% {
      opacity: 1;
      -webkit-transform: translate(-100px, 600px) rotateZ(-270deg);
      overflow-y: hidden;
    }
    100% {
      opacity: 0;
      -webkit-transform: translate(-75px, 800px) rotateZ(-360deg);
      overflow-y: hidden;
    }
  }
  span{
    font-family: Monaco,'sans-serif';
  }
  .skill1{
  color:deepskyblue;
    font-size: 20px;
    font-weight: bold;
  }
  .skill2{
  color:rebeccapurple;
    font-size: 18px;
  }
  .skill3{
    color: lawngreen;
    font-size: 14px;
  }
  .skill4{
    color:hotpink;
    font-size:20px;
    font-style: italic;
  }
  body, html{
    overflow-y: hidden;
  }
</style>
