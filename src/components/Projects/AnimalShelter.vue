
<template>
  <div class="container">
    <div class="back">
      <router-link to="/portfolio">
        <i class="fas fa-angle-double-left fa-2x"></i>
      </router-link>
    </div>
    <h1>Ward Animal Shelter</h1>
    <div class="about center">
      <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-18%20at%209.57.40%20PM.png?alt=media&token=1c634cc1-738b-4d89-8b84-5de2cb9611e1">
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 middle">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.14.18%20PM.png?alt=media&token=7a975afa-9111-4502-a4a9-eea2afe99bd4" alt="Ward Animal Shelter">
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-18%20at%209.53.06%20PM.png?alt=media&token=7916b67e-55a7-4879-b602-9a573838f0a2" alt="Ward Animal Shelter">
        </div>
      </div>
      <h3>About this Project</h3>
      <p>
        This project is a practice site for a local animal shelter created for a Project & Portfolio
        course at Full Sail University. The purpose of the project is to show my skills working with
        front and backend frameworks to create a site with data to display to the user. This site is
        made from the MERN Stack focusing on Mongodb, Express, React, and NodeJS. This was my first
        real project combining all of these items together. I decided to make an animal shelters web
        page because I love animals and there is a shelter locally that currently has no site for
        anyone to view their adoptable animals or contact information.
      This Project was really fun to create because I had complete freedom
      on what to create and how I should go about creating it. I had
      fun learning to use Firebase to hold images and its hosting
        possibilities as well as using MLab to
        store my database objects. Overall I am
        proud of this project I have created only
        things I want to go back and change is my color scheme and work
        on the jumbotron on the home page making it not look as muddy.
      Once I tweak these items I want to go to the local animal
        shelter and see if they would like to use it.  </p>
    </div>
    <h3>Tools Used</h3>
    <Tools></Tools>
  </div>
</template>
<script>
import Tools from '../Partials/AnimalShelterTools';

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
