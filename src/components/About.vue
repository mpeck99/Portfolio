<template>
  <div class="container">
    <h1>I am Morgan Peck and I am a Web Developer & Designer.</h1>
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
          <a href="https://www.linkedin.com/in/morganpeck99/"><i class="fab fa-linkedin fa-3x"></i>
          </a>
        </div>
        <hr>
        <div class="skills row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/HTML.png?alt=media&token=26bb2925-666b-4687-a4ec-85b2817cc635" alt="html" class="html">
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/JS.png?alt=media&token=c1193b74-11fa-4453-8e5a-a2822ad892c2" alt="js" class="js">
        </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/CSS.png?alt=media&token=e86a7129-3c1d-4eda-ad5b-d4413ffe4d9d" alt="css" class="css">
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/sql.png?alt=media&token=70042a56-01f8-44c3-8d33-de0767bb7db6" alt="sql" class="sql">
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/nodejs.png?alt=media&token=1d3476c1-532c-4593-849e-231061b863e7" alt="nodejs" class="nodejs">
        </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/react.png?alt=media&token=8510824a-5d01-4244-98a0-c87eeb1c11f7" alt="react" class="react">
          </div>
        </div>
        <hr>
        <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Resume.docx?alt=media&token=dd99a373-eb91-4cec-abbb-63451726af28" download="Morgan Peck - Resume" class="resume">My Resume</a>
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
  .skills img{
    margin: 10px;
  }
  .html, .js, .react{
    width: 105px;
  }
  .nodejs{
    width: 125px;
  }
  .sql{
    width: 150px;
  }
  .css{
    width: 75px !important;
  }
  .resume{
    font-size: 22px;
    text-decoration: none;
    color: rebeccapurple;
  }
  .resume:hover{
    color: hotpink;
    text-decoration: none;
    font-weight:bold;
  }
</style>

