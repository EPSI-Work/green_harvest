<template>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <router-link to="/"><h1 style="color: var(--el-color-primary);">GreenHarvest</h1></router-link>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1"><router-link to="/rejoignez-nous">Rejoignez-nous</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/a-propos-de-nous">À propos de nous</router-link></el-menu-item>
      <el-sub-menu index="3">
        <template #title>Nos jardins</template>
        <el-menu-item v-for="garden in gardens" :key="garden.id" :index="'3-' + garden.name"><router-link :to="'/jardin/'+ garden.id">{{ garden.name }}</router-link></el-menu-item>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
    import data from '../data/gardens.json'
  
    const gardens = data
    const activeIndex = ref('0')
  
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
  </script>
  
  <style scoped>
    .flex-grow {
      flex-grow: 1;
    }
  
    a {
      text-decoration: none;
      color: #000;
    }
  </style>
  