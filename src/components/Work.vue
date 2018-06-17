<template>
  <div class="container-fluid">
    <div class="row">
      <div class="projects col-lg-6 col-md-12">
        <router-link to="/portfolio/Ward-Animal-Shelter">
          <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.14.18%20PM.png?alt=media&token=7a975afa-9111-4502-a4a9-eea2afe99bd4" alt="Card image cap">
        </router-link>
      </div>
      <div class="projects col-lg-6 col-md-12">
        <router-link to="/portfolio/Wd6">
          <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.12.06%20PM.png?alt=media&token=7bc6c187-047b-484e-a4e2-023d0794bd5d" alt="Card image cap">
        </router-link>
      </div>
      <div class="projects col-lg-6 col-md-12">
        <router-link to='/portfolio/Img-Gallery'>
          <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.15.23%20PM.png?alt=media&token=db7b50d1-315c-46ff-8197-42dbbe92c5dd" alt="Card image cap">
        </router-link>
      </div>
      <div class="projects col-lg-6 col-md-12">
        <router-link to='/portfolio/Music-Search'>
          <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/Screen%20Shot%202018-06-06%20at%209.17.54%20PM.png?alt=media&token=2f17d36f-393e-4e7d-9779-857d97f61f4f" alt="Card image cap">
        </router-link>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      msg: 'My Portfolio Page',
    };
  },
};
</script>
<style scoped>
  h1{
    float: left;
  }
  .projects img{
    height: 500px;
    width: 100%;
    overflow: hidden;
    padding: 0;
  }
  .projects{
    padding: 0;
    margin: 0;
    overflow: hidden;
    transition: all .2s ease-in-out;
  }
  .projects:hover{
    transform: scale(.95);
    box-shadow: 5px 5px 5px 5px grey;
  }
</style>
