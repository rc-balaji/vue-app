<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <div>
    <RouterLink to="/add">Add</RouterLink>
    <RouterLink to="/sub">Sub</RouterLink>
    <RouterLink to="/sub">Sub</RouterLink>
    
    <RouterView />
    <!-- <RouterLink to="/mul" >Mul</RouterLink> -->
    <!-- <RouterLink></RouterLink> -->
  </div>
</template>