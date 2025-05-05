<template>
  <div
    class="fixed w-screen h-[80px] text-5xl flex justify-between items-center px-5 border-b border-black py-1"
  >
    <NuxtLink to="/" class="w-[80px] h-full">
      <NuxtImg
        src="/icon.png"
        class="w-full h-full object-cover fill-red-500"
      />
    </NuxtLink>

    <!-- nav items -->
    <div class="h-full flex items-center gap-10">
      <!-- Use v-for to loop through navItems -->
      <NuxtLink
        v-for="item in navItems"
        :key="item"
        :to="`/${item.toLowerCase().replace(' ', '-')}`"
        class="text-3xl font-chelsea text-black transition-all hover:text-red-900"
      >
        {{ item.toUpperCase() }}
        <!-- Display the actual item text -->
      </NuxtLink>

      <ShoppingCart
        :size="50"
        class="text-black transition-all ml-10 hover:text-red-900 cursor-pointer"
      />
      <UserCircleIcon
        :size="50"
        class="text-black transition-all hover:text-red-900 cursor-pointer"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ShoppingCart, UserCircleIcon } from "lucide-vue-next";
const navItems = ["Order", "Catering", "Gift Card", "Contact Us"];
</script>
