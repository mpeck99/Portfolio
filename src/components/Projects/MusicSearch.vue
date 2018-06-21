
<template>
  <div class="container">
    <div class="back">
      <router-link to="/portfolio">
        <i class="fas fa-angle-double-left fa-2x"></i>
      </router-link>
    </div>
    <h1>Music Search</h1>
    <div class="about center">
      <div class="row">
        <div class="col-lg-4 col-md-1 col-sm-1">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-19%20at%207.58.59%20PM.png?alt=media&token=7445035e-2569-4ae6-a4e7-c28be8c2b89e">
        </div>
        <div class="col-lg-4 col-md-1 col-sm-1 middle">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.17.54%20PM.png?alt=media&token=2f17d36f-393e-4e7d-9779-857d97f61f4f" alt="Music Search">
        </div>
        <div class="col-lg-4 col-m2-1 col-sm-1">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-19%20at%207.58.02%20PM.png?alt=media&token=d41b2b9c-71e9-4cb2-8d62-c38692ced069" alt="Music Search">
        </div>
      </div>
      <h3>About this Project</h3>
      <p>
        For this project I was to use a third party api and create an application that
        allows the user to search for data. After they search for data it will be displayed
        back to them. I also have it loading the most popular tracks, albums and artists
        when the page is fist loaded. I used the LastFM api to pull data in and display it
        to the user. This project was fun to work with because I was able to learn how to
        pull data in based off of the users input and output a list of songs, artists and
        albums. There is also an option for the users to add their favorite songs to a playlist
        this is stored locally within the local storage. I did this project a while back and
        have learned some things since. I would like to go back and tweak the animations so
        that they work a little more smoothly.
      </p>
    </div>
    <h3>Tools Used</h3>
    <Tools></Tools>
  </div>
</template>
<script>
import Tools from '../Partials/MusicSearch';

export default {
  name: 'AnimalShelter',
  components: {
    Tools,
  },
};

</script>
<style scoped>
  h1, h3, .back{
    font-family: Montserrat,sans-serif;
    margin: 25px auto;
  }
  .about img{
    margin: 25px 0;
    -webkit-box-shadow: 2px 2px grey;
    -moz-box-shadow: 2px 2px grey;
    box-shadow: 2px 2px grey;
  }
  h3{
    font-weight: bolder;
    margin: 10px 0;
  }
  p{
    font-size: 20px;
    text-align: justify !important;
  }
  h3, p{
    float: left;
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
    color: deepskyblue;
    font-size:22px;
    margin: 0;
    float: left;
    justify-content: center;
    text-shadow: 2px 2px rebeccapurple;
  }
  .about{
    margin: 0;
    padding: 0;
  }
  .middle{
    z-index: 1;
    transform: scale(1.5);
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
