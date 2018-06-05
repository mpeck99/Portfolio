<template>
  <div class="hello">
    <div class="logo">
      <b-img src=" https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/portfolio_logo.png?alt=media&token=d999092c-1b4c-435f-a19a-0977781ce147" fluid alt="Logo" >
      </b-img>
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
  .logo b-img{
    width: 500px;
    margin: 0 auto;
  }
</style>
