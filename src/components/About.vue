<template>
  <div class="container">
    <h1>I am Morgan Peck and I am a Web Developer & Designer and
    I am available.</h1>
    <div class="row">
      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/portfolioIMg.jpg?alt=media&token=752a2dce-777f-4a59-8828-7277e9b551df" class="col-lg-6 col-md-12 col-sm-12 portfolio">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <p >Hello There, My name is Morgan Peck and I an a Web Developer. I
        currently reside in Little Rock, Arkansas with my husband.
        I have attended Full Sail University earning my degree in 2018.
        Currently I am a Web Content Editor for a company called Northside Sales.
        I am available for any freelance work or potential job offers.
        If you would like to contact me head over to the contact page and send me a message!
      </p>
        <hr>
        <div class="social-media">
          <a href="https://www.facebook.com/MorganPeck99">
            <i class="fab fa-facebook fa-3x"></i>
          </a>
          <a href="https://twitter.com/MorganPeck99"><i class="fab fa-twitter-square fa-3x"></i></a>
          <a href="https://github.com/mpeck99"><i class="fab fa-github-square fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/morganpeck99/"><i class="fab fa-linkedin fa-3x"></i></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'My About Page',
    };
  },
  metaInfo: {
    title: 'About',
    titleTemplate: '%s - Your Web Developer Morgan Peck',
  },
};
</script>
<style>
  p{
    text-align: justify;
    margin: auto 0;
  }
  .portfolio{
    height: 500px !important;
    -webkit-border-radius: 10%;
    -moz-border-radius: 10%;
    border-radius: 10%;
  }
  .social-media{
    clear: both;
  }
  .social-media i{
    margin: 25px;
    color: rebeccapurple;
    text-shadow: 2px 2px deepskyblue;
  }
  .social-media i:hover{
    animation-name: Spin;
    animation-duration: 2s;
    animation-timing-function: ease;
    color: rebeccapurple;
  }
  hr{
    margin: 10px;
  }
  .success{
    background-color: limegreen;
    opacity:.75;
    margin: 5px;
    padding:5px;
    color: black;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 18px;
    border-radius: 10px;
  }
  @keyframes Spin {
    from {transform:rotate(0deg)}
    to {transform:rotate(360deg)}
  }
</style>

