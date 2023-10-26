<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <NuxtLink to="/"><h1 style="color: var(--el-color-primary);">GreenHarvest</h1></NuxtLink>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1"><NuxtLink to="/rejoignez-nous">Rejoignez-nous</NuxtLink></el-menu-item>
    <el-menu-item index="2"><NuxtLink to="/a-propos-de-nous">À propos de nous</NuxtLink></el-menu-item>
    <el-sub-menu index="3">
      <template #title>Nos jardins</template>
      <el-menu-item v-for="garden in gardens" :key="garden.id" :index="'3-' + garden.name"><NuxtLink :to="'/jardin/'+ garden.name">{{ garden.name }}</NuxtLink></el-menu-item>
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
