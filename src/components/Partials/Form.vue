<template>
  <div>
    <div class="contact-info">
      <h3>Looking For A New <strong>Developer?</strong></h3>
      <h3>Need A <strong>Website?</strong></h3>
      <p>Fill out the form or contact me with the following information!</p>
      <ul>
        <li><i class="fas fa-phone-square fa-3x"> 316-882-4474</i></li>
        <li><i class="fas fa-envelope-square fa-3x"> mopeck99@gmail.com</i></li>
        <li><i class="fas fa-map-marker fa-3x"> Little Rock, Arkansas</i></li>
      </ul>
    </div>
  <form class="contact-form" method="POST" action="http://127.0.0.1:3000/email" >
    <div class="form-group">
    <label for="fullname">Full Name *</label>
    <input type="name" class="form-control" id="fullname"
           placeholder="Your Name" required name="name" v-model="name">
  </div>
      <div class="form-group">
        <label for="subject">Subject *</label>
        <input type="name" class="form-control" id="subject"
               placeholder="Subject" required namk="subject" v-model="subject">
      </div>
    <div class="form-group">
      <label for="email">Email address *</label>
      <input type="email" class="form-control" id="email"
           placeholder="name@example.com" required name="email" v-model="email">
    </div>
    <div class="form-group">
      <label for="message">Leave a message</label>
      <textarea class="form-control" id="message"
                name="message" rows="5" placeholder="Your Message" v-model="message"></textarea>
    </div>
    <button type="submit" class="btn send">Send</button>
  </form>
  </div>
</template>
<script>
export default {
  name: 'Contact-Form',
  data() {
    return {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    };
  },
};
</script>
<style>
  .contact-form{
    width: 50%;
    margin: 0 auto;
    float: left;
  }
  h1, h3{
    margin: 25px;
  }
  .contact-info{
    float: right;
    text-align: center;
  }
  h1{
    border-bottom: thin;
  }
  .contact-form input,.contact-form textarea, .send{
    border-radius: 0;
  }
  .contact-form input, .contact-form textarea{
    box-shadow: 5px 5px 5px grey;
  }
  .send{
    padding: 10px;
    width: 150px;
    background-color: deepskyblue;
    color: rebeccapurple;
    font-size: 22px;
    margin: 10px;
  }
   .send:hover {
     background-color: rebeccapurple;
     color: deepskyblue;
     box-shadow: 5px 5px 5px grey;
   }
  label{
    float: left;
    color: rebeccapurple;
  }
  .contact-info ul{
    list-style: none;
    margin: auto;
    width: 450px;
  }
  .contact-info ul li{
    float: left;
    margin: 10px;
    font-size: 10px;
  }
  @media only screen and (max-width : 990px) {
    .contact-form{
      float: none;
      width: 100%;
    }
    .contact-info{
      float: none;
    }
  }
</style>

