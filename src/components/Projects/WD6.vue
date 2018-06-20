<template>
  <div class="container">
    <div class="back">
      <router-link to="/portfolio">
        <i class="fas fa-angle-double-left fa-2x"></i>
      </router-link>
    </div>
    <h1>WD6 E-Commerce</h1>
    <div class="about center">
      <div class="row">
        <div class="col-lg-4 col-md-1 col-sm-1">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-19%20at%208.10.12%20PM.png?alt=media&token=796dd9aa-af0e-4c13-9278-e8bd533a2cda" alt="wd6">
        </div>
        <div class="col-lg-4 col-md-1 col-sm-1 middle">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.12.06%20PM.png?alt=media&token=7bc6c187-047b-484e-a4e2-023d0794bd5d" alt="wd6">
        </div>
        <div class="col-lg-4 col-m2-1 col-sm-1">
          <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-19%20at%208.09.26%20PM.png?alt=media&token=53f5c4df-c762-4bee-8f33-f1e8df92b098" alt="wd6">
        </div>
      </div>
      <h3>About this Project</h3>
      <p>
        This projects goal was to create a
        fully functional E-Commerce site using
        NodeJs. During this course I learned about what is expected when working as a team.
        I also learned a lot about the Agile Project Management and how
        it is used in the industry today.
        This site specializes in Gas
        Detection Monitors.You can look at items, save items to a wish list,
        create an account, login to your account and
        checkout your products. Overall this project was really fun to work on and it was
        challenging. This project was to be done with a team but I wasn't able
        to work with one due to me being the only one in the class at the time. It was
        also challenging
        because of my course load I was taking two classes at the same time that really required
        a lot of dedication and work. I love how my project came
        out but I do have thingsI would
        like to change. I have some minor CSS tweaks I would like to make to the alerts whenever
        your payment was successful.
        I also would like to add to my profile page currently it is showing no data.
        I plan on continuing to work on this until it is where I want it to be.
      </p>
    </div>
    <h3>Tools Used</h3>
    <Tools></Tools>
  </div>
</template>
<script>
import Tools from '../Partials/Wd6Tools';

export default {
  name: 'WD6',
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
    font-size:22px;
    margin: 0;
    color: deepskyblue;
    float: left;
    justify-content: center;
    text-shadow: 2px 2px rebeccapurple !important;
  }
  .middle{
    z-index: 1;
    transform: scale(1.5);
  }
</style>
