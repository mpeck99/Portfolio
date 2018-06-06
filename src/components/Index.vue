<template>
    <div class="container">
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
</style>
