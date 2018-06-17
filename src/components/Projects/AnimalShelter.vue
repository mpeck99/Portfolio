
<template>
  <div class="container">
    <div class="back">
      <router-link to="/portfolio">
        <i class="fas fa-angle-double-left fa-2x"></i>
      </router-link>
    </div>
    <h1>Ward Animal Shelter</h1>
    <div class="about">
      <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.14.18%20PM.png?alt=media&token=7a975afa-9111-4502-a4a9-eea2afe99bd4" alt="Ward Animal Shelter">
      <h3>About this Project</h3>
      <p>
        This project is a practice site for a local animal shelter created for a Project & Portfoli
        course at Full Sail University. The purpose of the project is to show my skills working with
        front and backend frameworks to create a site with data to display to the user. This site is
        made from the MERN Stack focusing on Mongodb, Express, React, and NodeJS. This was my first
        real project combining all of these items together. I decided to make an animal shelters web
        page because I love animals and there is a shelter locally that currently has no site for
        anyone to view their adoptable animals or contact information. </p>
    </div>
    <h3>Tools Used</h3>
    <div class="tools row">
      <div class="col-4">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/firebase.png?alt=media&token=86799b7b-c867-4ed6-b019-4a6286662741" class="firebase">
      </div>
      <div class="col-4">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/googleMap.png?alt=media&token=7b2e9f09-48fc-4c92-871a-01e88c5acbab" class="googlemaps">
      </div>
      <div class="col-4">
      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/react.png?alt=media&token=8510824a-5d01-4244-98a0-c87eeb1c11f7" class="bootstrap">
    </div>
      <div class="col-4">
      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/nodemailer.png?alt=media&token=d174f6ca-6b2e-4f9a-a53f-64e9dd0149bb" class="nodemailer">
    </div>
      <div class="col-4"><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/mongodb.png?alt=media&token=bdbbeb58-607a-4714-9143-e0c4f80ba36d" class="mongo">
      </div>
      <div class="col-4">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/nodejs.png?alt=media&token=1d3476c1-532c-4593-849e-231061b863e7" class="node">
      </div>
  </div>
  </div>
</template>
<style scoped>
  .about img{
    margin-bottom: 10px;
  }
  h3{
    font-weight: bolder;
    margin: 10px 0px;
  }
  p{
    font-size: 20px;
    text-align: justify !important;
  }
  h3, p{
  float: left;
  }
  .firebase{
    width: 80px;
  }
  .tools h3{
    margin: 10px;
    display: inline;
  }
  .mongo{
    width: 200px !important;
    margin: 10px;
    box-shadow: 5px 5px 5px grey;
  }
  .bootstrap, .node, .nodemailer, .googlemaps{
    width: 125px !important;
    margin: 10px;
  }
  .back{
    float: left;
    color: rebeccapurple;
    justify-content: center;
  }
  a{
    text-decoration: none;
    color: rebeccapurple;
    font-size:22px;
    margin: 0;
  }
</style>
