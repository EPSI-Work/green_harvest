<template>
    <footer class="app_footer">
      <span>GreenHarvest © 2023&nbsp|&nbsp</span>
      <router-link to="/politique-de-confidentialite">Politique de confidentialité&nbsp|&nbsp</router-link>
      <router-link to="/mentions-legales">Mentions légales&nbsp|&nbsp</router-link>
      <router-link to="/conditions-generales-de-vente">CGV</router-link>
    </footer>
  </template>
  
  <style scoped>
  .app_footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 3em;
    display: flex;
    align-items: center;
    padding-left: 1em;
    color: #FFF;
    background-color: var(--el-color-primary);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  }
  
  a {
    text-decoration: none;
    color: #FFF;
  }
  </style>
  