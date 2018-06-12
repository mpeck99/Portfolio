<template>
  <div class="container">
    <h1>Contact</h1>
    <hr>
    <ContactForm></ContactForm>
    <div class="social-media">
      <hr>
      <i class="fab fa-facebook fa-3x"></i>
      <i class="fab fa-twitter-square fa-3x"></i>
      <i class="fab fa-github-square fa-3x"></i>
      <i class="fab fa-linkedin fa-3x"></i>
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
    color: lawngreen;
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

