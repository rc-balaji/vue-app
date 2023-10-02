<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <div>
   <h1> My First Vue App</h1>
    <RouterLink to="/add" >Add</RouterLink>
    <span> '  ''   '   </span>
    <RouterLink to="/sub" >Sub</RouterLink>
    <!-- <RouterLink to="/mul" >Mul</RouterLink> -->

    <RouterView/>
    <!-- <RouterLink></RouterLink> -->
  </div>
</template>