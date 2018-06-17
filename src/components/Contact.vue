<template>
  <div class="container">
    <h1>Contact</h1>
    <hr>
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
};
</script>
<style>
  .social-media{
    clear: both;
  }
  .social-media i{
    margin: 25px;
    color: hotpink;
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

