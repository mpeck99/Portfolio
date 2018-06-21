<template>
  <div class="container">
    <div class="back">
      <router-link to="/portfolio">
        <i class="fas fa-angle-double-left fa-2x"></i>
      </router-link>
    </div>
    <h1>Responsive Gallery</h1>
    <div class="about">
      <div>
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.15.23%20PM.png?alt=media&token=db7b50d1-315c-46ff-8197-42dbbe92c5dd">
      </div>
      <h3>About this Project</h3>
      <p>
        This project was to show my ability to use React to create a
        responsive image gallery. I was to pull data from a third party
        api, and load that data into the application. I used the Unsplash
        api to pull data focused on the keyword of kittens. I had a lot
        of fun creating this application because I was able to mess
        around with animations. I was able to work with some animations
        really figuring out how to use them. I also had a fun time working
        with an api and pulling data in to be displayed to the user.
      </p>
    </div>
    <h3>Tools Used</h3>
    <Tools></Tools>
  </div>
</template>
<script>
import Tools from '../Partials/Gallery';

export default {
  name: 'Responsive Gallery',
  components: {
    Tools,
  },
};
</script>
<style scoped>
  .back{
    float: left;
    color: rebeccapurple;
    justify-content: center;
    text-shadow: 2px 2px hotpink !important;
  }
  .back:hover{
    -webkit-transform: translate(-4px,0);
    -moz-transform: translate(-4px,0);
    -ms-transform: translate(-4px,0);
    -o-transform: translate(-4px,0);
    transform: translate(-4px,0);
  }
  a{
    text-decoration: none;
    font-size:22px;
    margin: 0;
    color: deepskyblue;
    float: left;
    justify-content: center;
    text-shadow: 2px 2px rebeccapurple !important;
  }
  .about img{
    width: 700px;
    margin: 0 auto;
    justify-content: center;
  }
  .about{
    clear: both;
  }
  h3, p{
    float: left;
    text-align: left;
  }
  .tools img{
    position: relative;
  }
  .tools h3{
    margin: 10px;
    display: inline;
  }
  @media only screen and (max-device-width: 480px) {
    .about img{
      width: 100% !important;
      margin: 5px;
    }
    .middle{
      transform: scale(1);
    }
    h1, h3{
      font-size: 20px;
    }
  }
</style>
