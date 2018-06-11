<template>
  <div class="container">
    <h1>Contact</h1>
    <hr>
    <ContactForm></ContactForm>
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

