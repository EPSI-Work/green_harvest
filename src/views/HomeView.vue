<template>
    <h2 class="home-page_title">Découvrez les jardins collaboratifs de {{ userCity || 'votre ville' }}</h2>
    <el-carousel :interval="4000" type="card" height="270px" class="home-page_caroussel">
      <el-carousel-item v-for="garden in gardens" :key="garden.id">
        <img class="home-page_img" :src="garden.image">
        <br><br>
        <h3>{{ garden.name }}</h3>
        <p>{{ garden.postalAddress }}, {{ garden.city }}</p>
        <p>{{ garden.areaInSquareMeters }} m² - {{ garden.numberOfMembers }} membres</p>
      </el-carousel-item>
    </el-carousel>
    <el-card class="home-page_map">
      <div class="home-page_map-content">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.446073807749!2d-1.50896552253542!3d47.18016292711973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805e8e5e3e9487d%3A0x543c44521a5060ac!2s123%20Rte%20de%20Nantes%2C%2044120%20Vertou!5e0!3m2!1sfr!2sfr!4v1698152345220!5m2!1sfr!2sfr" width="550" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <h2>Retrouvez le {{ exampleGarden.name }}</h2>
          <p>{{ exampleGarden.areaInSquareMeters }} mètres carré au coeur de {{ exampleGarden.city }}. Ce jardin collaboratif compte actuellement {{ exampleGarden.numberOfMembers }} membres.
          <br>Depuis sa création en 2023, les participants ont récoltés {{ exampleGarden.credits }} crédits grâce à la revente de légumes provenant du {{ exampleGarden.name }}. Ces crédits ont permis l'achat de matériel pour le jardin collaboratif.</p>
        </div>
        </div>
    </el-card>
  </template>
  
  <script setup>
  import data from '../data/gardens.json'
  import { ref, onMounted } from 'vue';
  
  const gardens = data
  const exampleGarden = data.find(garden => garden.id = 2)
  const userCity = ref('');
  
  onMounted(async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
        const data = await response.json();
        userCity.value = data.address.city;
      }, () => {
        // En cas d'erreur ou si l'utilisateur refuse la permission
        userCity.value = '';
      });
    }
  });
  </script>
  
  <style scoped>
  .home-page_title {
    position: absolute;
    top: 90px;
    left: 0;
    right: 0;
    color: #FFF;
    z-index: 999;
    text-align: center;
}

  
.home-page_caroussel {
    margin-top: 1em;
}

  .home-page_map {
    width: 90%;
    margin: 0 auto;
    margin-top: 1em;
    border-radius: 1em;
  }
  
  .home-page_map-content {
    display: flex;
    flex-direction: row;
  }
  
  .home-page_map-content iframe {
    width: 80%;
    border-radius: 1em;
  }
  
  .home-page_map-content div {
    padding: 2em;
  }
  
  .home-page_img {
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: -1;
    filter: blur(4px) brightness(90%);
  }
  
  .el-carousel__item {
    border-radius: 1em;
  }
  
  .el-carousel__item h3 {
    color: white;
    text-align: center;
    padding-top: 1em;
  }
  
  .el-carousel__item p {
    color: white;
    text-align: center;
  }
  </style>
  