<template>
  <div v-if="garden">
    <el-card class="garden_header">  
      <div class="garden_description">
        <img class="garden_img" :src="garden.image" :title="garden.name">
        <el-descriptions :title="'Informations sur ' + garden.name " :column="1">
          <el-descriptions-item label="Date de création">{{ garden.creationDate }}</el-descriptions-item>
          <el-descriptions-item label="Adresse">{{ garden.postalAddress }}, {{ garden.city }}</el-descriptions-item>
          <el-descriptions-item label="Surface">{{ garden.areaInSquareMeters }} m²</el-descriptions-item>
          <el-descriptions-item label="Crédits disponibles">{{ garden.credits }}</el-descriptions-item>
        </el-descriptions>
        </div>
    </el-card>  

    <el-row :gutter="20" class="garden_row">
      <el-col :span="12" class="garden_table">
        <el-card class="garden_table-card">  
        <h2>Membres du jardin</h2>
        <el-table :data="garden.members" style="width: 100%" height="329">
          <el-table-column width="90"><img src="https://cdn-icons-png.flaticon.com/512/2870/2870875.png" width="50"></el-table-column>
          <el-table-column prop="name" label="Nom" width="180"></el-table-column>
          <el-table-column prop="credits" label="Crédits"></el-table-column>
        </el-table>
      </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="garden_map-card">  
          <iframe class="garden_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.446073807749!2d-1.50896552253542!3d47.18016292711973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805e8e5e3e9487d%3A0x543c44521a5060ac!2s123%20Rte%20de%20Nantes%2C%2044120%20Vertou!5e0!3m2!1sfr!2sfr!4v1698152345220!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </el-card>
      </el-col>
    </el-row>

    
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import data from '../data/gardens.json'

const route = useRoute()
const garden = ref(null)

const loadGarden = () => {
  garden.value = data.find(g => g.id == route.params.id)
}

// Charger le jardin quand le composant est créé
loadGarden()

// Surveiller les changements de la route
watch(route, () => {
  loadGarden()
})

// Cela peut ne pas être nécessaire si le `watch` fonctionne comme prévu
onBeforeRouteUpdate((to, from, next) => {
  loadGarden() // Charger le jardin quand les paramètres de route changent
  next()
})
</script>

<style scoped>
.garden_header {
  width: calc(100% - 21px);
  margin: 1em 0 1em 0;
  border-radius: 1em;
}

.garden_description {
  display: flex;
}

.garden_img {
  height: 200px;
  border-radius: 1em;
  margin-right: 2em;
}

.garden_row {
  width: 100%;
  margin: 0 auto;
}

.garden_table {
  max-height: 400px;
}

.garden_table-card {
  border-radius: 1em;
}

.garden_map {
  width: 100%;
  height: 400px;
  border:0;
  border-radius: 1em;
}

.garden_map-card {
  border-radius: 1em;
}
</style>
