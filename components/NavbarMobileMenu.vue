<template>
  <!-- Mobile Menu -->
  <div
    class="fixed left-0 w-screen h-[calc(100vh-80px)] bg-red-800 shadow-xl transition-transform duration-500 ease-in-out z-40 overflow-y-auto"
    :class="{
      'translate-y-[80px]': menuIsOpen, // When open, slide in from top
      '-translate-y-full': !menuIsOpen, // When closed, slide out to top
    }"
  >
    <div
      class="flex flex-col items-center justify-start h-full gap-4 pt-10 pb-10 px-6"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.name + '-mobile'"
        :to="item.path"
        class="w-full max-w-sm py-4 px-6 text-center text-2xl font-chelsea text-white rounded-lg transition-all duration-500 ease-out transform focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75"
        :class="{
          'opacity-100 translate-y-0': menuIsOpen, // Target state
          'opacity-0 translate-y-5': !menuIsOpen, // Initial state
        }"
        @click="closeMenu"
        @mouseenter="
          ($event.target as HTMLElement).classList.add(
            'hover:bg-red-700',
            'hover:scale-105'
          )
        "
        @mouseleave="
          ($event.target as HTMLElement).classList.remove(
            'hover:bg-red-700',
            'hover:scale-105'
          )
        "
        @focus="
          ($event.target as HTMLElement).classList.add(
            'focus:bg-red-700',
            'focus:scale-105'
          )
        "
        @blur="
          ($event.target as HTMLElement).classList.remove(
            'focus:bg-red-700',
            'focus:scale-105'
          )
        "
      >
        {{ item.name.toUpperCase() }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Define the props this component expects
interface NavItem {
  name: string;
  path: string;
}

const props = defineProps({
  menuIsOpen: {
    type: Boolean,
    required: true,
  },
  navItems: {
    type: Array as () => NavItem[],
    required: true,
  },
  closeMenu: {
    type: Function,
    required: true,
  },
});
</script>

<style></style>
