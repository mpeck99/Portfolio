<template>
  <div>
    <div class="tools row">
      <div class="col-lg-4 col-md-4 col-sm-12"><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/react.png?alt=media&token=8510824a-5d01-4244-98a0-c87eeb1c11f7" class="react">
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/bootstrap.png?alt=media&token=afc456f6-dbc7-4598-83c2-eb4fb87ee04b" class="bootstrap">
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/unsplash.png?alt=media&token=911bc73e-d9a3-4f5f-b727-ed0f86d4308c" class="unsplash">
    </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/HTML.png?alt=media&token=26bb2925-666b-4687-a4ec-85b2817cc635" class="HTML">
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/CSS.png?alt=media&token=e86a7129-3c1d-4eda-ad5b-d4413ffe4d9d" class="CSS">
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-27f71.appspot.com/o/JS.png?alt=media&token=c1193b74-11fa-4453-8e5a-a2822ad892c2" class="JS">
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>

  .tools{
    align-items: center;
    margin: 10px;
  }
  .tools img{
    position: relative;
  }
  .tools h3{
    margin: 10px;
    display: inline;
  }
  .bootstrap{
    width: 350px !important;
  }
  .react, .HTML{
    width: 125px;
    margin: 10px;
  }
  .unsplash, .JS, .CSS{
    width: 100px
  }
  @media only screen and (max-device-width: 480px) {
    .unsplash, .JS, .CSS{
      width: 50px;
      margin: 10px;
    }
    .react, .HTML{
      width: 75px;
      margin: 10px;
    }
  }
</style>
