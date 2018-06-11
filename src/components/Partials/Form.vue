<template>
  <div>
    <h3>Want to work together?</h3>
  <form class="contact-form">
    <div class="form-group">
    <label for="fullname">Full Name *</label>
    <input type="name" class="form-control" id="fullname"
           placeholder="Your Name" required>
  </div>
      <div class="form-group">
        <label for="subject">Subject *</label>
        <input type="name" class="form-control" id="subject"
               placeholder="Subject" required>
      </div>
    <div class="form-group">
      <label for="email">Email address *</label>
      <input type="email" class="form-control" id="email"
           placeholder="name@example.com" required>
    </div>
    <div class="form-group">
      <label for="msg">Leave a message</label>
      <textarea class="form-control" id="msg" rows="5" placeholder="Your Message"></textarea>
    </div>
    <button type="submit" class="btn send">Send</button>
  </form>
  </div>
</template>
<style>
  .contact-form{
    width: 50%;
    margin: 0 auto;
  }
  h1, h3{
    margin: 25px;
  }
  h1{
    border-bottom: thin;
  }
  .contact-form input,.contact-form textarea, .send{
    border-radius: 0;
  }
  .send{
    padding: 10px;
    width: 150px;
    background-color: deepskyblue;
    color: rebeccapurple;
    font-size: 22px;
  }
   .send:hover {
     background-color: rebeccapurple;
     color: deepskyblue;
   }
  label{
    float: left;
    color: rebeccapurple;
  }
</style>

