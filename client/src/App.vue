<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";

export default {
  name: "app",
   components: {
    'Navbar': Navbar
  }
};
</script>

<style lang="scss">
@media only screen and (max-width: 768px) {
  h1,h2,h3,h4,p,b {
    font-size: 25px;
  }
  .card  {
    width:470px;
  }
  .jumbotron{
    font-size:10px;
    width:600px;
  }

 
}

@media only screen and (max-width: 320px) {
  h1,h2,h3,,h4,p,b {
    font-size: 10px;
  }
}
body { 
    padding-top: 65px; 
}
<style>
