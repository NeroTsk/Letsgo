<template>
  <div id="app" >
    <vue-snotify></vue-snotify>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
*{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
html
{
  height: 100%;
  background-image: linear-gradient(to right,rgb(223, 241, 252),rgb(191, 193, 197));
  background-color: rgba(192, 192, 192, 0.26);
}
</style>
