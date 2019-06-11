<template>
    <tabel>

    </tabel>
<template>

<style>

</style>

<script>
import Vue from 'vue'
import axios from 'axios';
export default {
  name: "App",
  data() {
    return {
      news: []
    };
  },
  mounted: function() {
    Vue.axios.get("http://localhost:3000/api/news").then((response) => {
        this.news = response.data
    })
   }
  };
</script>

