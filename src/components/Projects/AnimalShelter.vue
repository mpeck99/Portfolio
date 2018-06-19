
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
        <div class="col-lg-4 col-md-1 col-sm-1">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-18%20at%209.57.40%20PM.png?alt=media&token=1c634cc1-738b-4d89-8b84-5de2cb9611e1">
        </div>
        <div class="col-lg-4 col-md-1 col-sm-1 middle">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.14.18%20PM.png?alt=media&token=7a975afa-9111-4502-a4a9-eea2afe99bd4" alt="Ward Animal Shelter">
        </div>
        <div class="col-lg-4 col-m2-1 col-sm-1">
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
        anyone to view their adoptable animals or contact information. </p>
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
    margin: 20px auto;
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
  .back{
    float: left;
    color: rebeccapurple;
    justify-content: center;
    text-shadow: 2px 2px hotpink !important;
  }
  a{
    text-decoration: none;
    color: rebeccapurple;
    font-size:22px;
    margin: 0;
  }
  .about .col-4{
    margin: 0;
    padding: 0;
  }
  .middle{
    z-index: 1;
    transform: scale(1.5);
  }
</style>
