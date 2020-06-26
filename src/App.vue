<template>
  <div id="app" :class="getTheme">
    <vue-headful title="Telegram CI/CD bot"/>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import {mapGetters} from "vuex";
export default {
  name: 'App',
  components: {Navbar},
  data(){
    return {
      theme:true //true - dark ; false - light
    }
  },
  computed:{
    ...mapGetters(["getTheme"]),
  }
}
</script>

<style>
  @font-face {
    font-family: 'JetBrains Mono Regular';
    src: url("~@/assets/18893.ttf");
  }
  body{
    font-family: 'JetBrains Mono Regular',serif;
  }
  .dark{
    background: #1b1f23;
    color: whitesmoke;
  }
  .light{
    background: white;
    color: black;
  }
</style>
