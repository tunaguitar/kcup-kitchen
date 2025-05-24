<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex justify-center w-full flex-col overflow-x-hidden">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>
