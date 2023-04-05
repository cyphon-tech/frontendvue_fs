<template>
<the-header></the-header>
<router-view> </router-view>
</template>
<script>
//register locally beacuse we are using it locally
import TheHeader from './components/layout/TheHeader.vue';
 export default{
    components:{
        TheHeader
    }
 }
 //component registration done
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>