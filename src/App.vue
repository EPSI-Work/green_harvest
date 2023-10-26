<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Permanent+Marker&display=swap" rel="stylesheet">
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style>
:root{
  font-family: 'Baloo 2', sans-serif;
  padding-bottom: 3em;
}

h1 {
  font-family: 'Permanent Marker', cursive;
  font-size: 2em;
}
</style>
