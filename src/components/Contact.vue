<template>
  <div class="container">
    <h1>Contact</h1>
    <hr>
    <p v-if=this.$route.query.success class="success">
      Your Message Was Sent! I will contact you back as soon as I can!
    </p>
    <ContactForm></ContactForm>
    <div class="social-media">
      <hr>
      <a href="https://www.facebook.com/MorganPeck99">
        <i class="fab fa-facebook fa-3x"></i>
    </a>
      <a href="https://twitter.com/MorganPeck99"><i class="fab fa-twitter-square fa-3x"></i></a>
      <a href="https://github.com/mpeck99"><i class="fab fa-github-square fa-3x"></i></a>
      <a href="https://www.linkedin.com/in/morganpeck99/"><i class="fab fa-linkedin fa-3x"></i></a>
  </div>
  </div>
</template>

<script>
import ContactForm from './Partials/Form';

export default {
  name: 'Contact',
  components: {
    ContactForm,
  },
  data() {
    return {
      msg: 'My Contact Page',
    };
  },
  metaInfo: {
    title: 'Contact',
    titleTemplate: '%s - Me Your Web Developer Morgan Peck',
  },
};
</script>
<style>
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
  @media only screen and (max-width : 990px) {
    .social-media i{
     margin: 10px;
    }
  }
</style>

