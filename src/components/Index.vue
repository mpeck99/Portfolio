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
      <footer>
        <div class="container">
          <p>
            Designed and Built By Morgan Peck
          </p>
        </div>
      </footer>
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
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s - Morgan Peck!',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Your Web Developer -- Morgan Peck' },
  ],
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
    width:auto;
    background:url('../assets/portfolio_logo.png');
    -webkit-animation: fallingWords 8s infinite linear;
    -moz-animation: fallingWords 8s infinite linear;
    animation-delay: -10s;
    overflow-y: hidden !important;
  }
  .fallingWords span:nth-child(5n+5) {
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    animation-fill-mode: both;
    overflow-y: hidden;
  }
  .fallingWords span:nth-child(3n+2) {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-fill-mode: both;
    overflow-y: hidden;
  }
  .fallingWords span:nth-child(2n+5) {
    -webkit-animation-delay: 2.5s;
    -moz-animation-delay: 2.5s;
    animation-fill-mode: both;
    overflow-y: hidden;
  }
  @keyframes fallingWords {
    0% {
      opacity:0;
      -webkit-transform: translate(-100px, 0px);
      -moz-transform: translate(-100px, 0px);
      -ms-transform: translate(-100px, 0px);
      -o-transform: translate(-100px, 0px);
      transform: translate(-100px, 0px);
      overflow-y: hidden;
    }
    25% {
      opacity: 1;
      overflow-y: hidden;
    }
    50% {
      opacity: 1;
      -webkit-transform: translate(-100px, 200px);
      -moz-transform: translate(-100px, 200px);
      -ms-transform: translate(-100px, 200px);
      -o-transform: translate(-100px, 200px);
      transform: translate(-100px, 200px);
      overflow-y: hidden;
    }
    75%{
      opacity: 1;
      -webkit-transform: translate(-90px, 300px);
      -moz-transform: translate(-90px, 300px);
      -ms-transform: translate(-90px, 300px);
      -o-transform: translate(-90px, 300px);
      transform: translate(-90px, 300px);
      overflow-y: hidden;
    }
    100% {
      opacity: 0;
      -webkit-transform:translate(-75px, 400px);
      -moz-transform: translate(-75px, 400px);
      -ms-transform: translate(-75px, 400px);
      -o-transform: translate(-75px, 400px);
      transform: translate(-75px, 400px);
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
    font-family: Montserrat, 'sans-serif';

  }
  .skill2{
    color:rebeccapurple;
    font-size: 18px;
    font-family: Roboto, 'serif';
  }
  .skill3{
    color: limegreen;
    font-size: 14px;
    font-style: italic;
    font-family: Consolas, 'monospace';
  }
  .skill4{
    color:hotpink;
    font-size:20px;
    font-style: italic;
    font-family: "American Typewriter", 'monospace';
  }
  body, html, #app{
    position: static;
    overflow-y:hidden !important;
  }
  @media only screen and (max-device-width: 480px) {
    .fallingWords span {
      width: auto;
    }
  }
</style>
