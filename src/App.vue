<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {Navbar},
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
</style>
