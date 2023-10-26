<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <h1>GreenHarvest</h1>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">Mon espace membre</el-menu-item>
    <el-menu-item index="2">À propos de nous</el-menu-item>
    <el-sub-menu index="3">
      <template #title>Nos jardins</template>
      <el-menu-item v-for="garden in gardens" :key="garden.id" :index="'3-' + garden.name">{{ garden.name }}</el-menu-item>
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

<style>
  .flex-grow {
    flex-grow: 1;
  }
</style>