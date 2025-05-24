<template>
  <div
    class="fixed top-0 left-0 w-screen h-[80px] text-5xl flex justify-between items-center px-5 py-1 z-50 bg-white"
  >
    <NuxtLink to="/" class="w-[80px] h-full">
      <NuxtImg
        src="/icon.png"
        class="w-full h-full object-cover"
        alt="Site Icon"
      />
      <!-- Removed fill-red-500 as it's for SVGs, NuxtImg handles images -->
    </NuxtLink>

    <!-- nav items -->
    <div class="h-full flex items-center gap-5 lg:gap-10 xl:gap-16">
      <NuxtLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="max-md:hidden text-xl lg:text-3xl font-chelsea text-black transition-all hover:text-red-900"
      >
        {{ item.name.toUpperCase() }}
      </NuxtLink>

      <ShoppingCart
        :size="42"
        class="text-black transition-all ml-5 hover:text-red-900 cursor-pointer"
        aria-label="Shopping Cart"
      />
      <UserCircleIcon
        :size="42"
        class="text-black transition-all hover:text-red-900 cursor-pointer"
        aria-label="User Profile"
      />
      <button
        class="md:hidden relative w-[52px] h-[52px] flex items-center justify-center text-black transition-colors duration-300 hover:text-red-900 cursor-pointer"
        @click="toggleMenu"
      >
        <!-- Menu (Hamburger) Icon -->
        <Menu
          :size="52"
          class="absolute transition-all duration-300 ease-in-out"
          :class="{
            'opacity-100 rotate-0 scale-100': !menuIsOpen,
            'opacity-0 -rotate-180 scale-50': menuIsOpen, // Fades out, rotates, and shrinks
          }"
        />
        <!-- X Icon -->
        <X
          :size="52"
          class="absolute transition-all duration-300 ease-in-out"
          :class="{
            'opacity-100 rotate-0 scale-100': menuIsOpen,
            'opacity-0 rotate-180 scale-50': !menuIsOpen, // Starts faded out, rotated, and small
          }"
        />
      </button>
    </div>
  </div>
  <NavbarMobileMenu
    :menuIsOpen="menuIsOpen"
    :navItems="navItems"
    :closeMenu="closeMenu"
  />
</template>

<script lang="ts" setup>
import { Menu, ShoppingCart, UserCircleIcon, X } from "lucide-vue-next";
import { ref } from "vue"; // Explicitly import ref if not auto-imported
import NavbarMobileMenu from "./NavbarMobileMenu.vue";

// Define a more structured type for nav items
interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Order", path: "/order" },
  { name: "Catering", path: "/catering" },
  { name: "Gift Card", path: "/gift-card" },
  { name: "Contact Us", path: "/contact-us" },
];

const menuIsOpen = ref(false);

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
  // console.log("Menu toggled:", menuIsOpen.value);
};

const closeMenu = () => {
  menuIsOpen.value = false;
};
</script>
