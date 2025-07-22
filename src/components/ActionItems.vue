<script setup>
import PersonIcon from "./icons/personIcon.vue";
import SearchIcon from "./icons/searchIcon.vue";
import FavoriteIcon from "./icons/favoriteIcon.vue";
import ShoppingBagIcon from "./icons/shoppingBagIcon.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
<template>
  <nav>
    <ul class="flex gap-2.5 justify-center items-center m-4">
      <li
        class="relative flex cursor-pointer p-0.5 hover:bg-white/60 hover:rounded-sm group"
      >
        <RouterLink to=""
          ><SearchIcon class="group-hover:text-red-600 size-6"
        /></RouterLink>
      </li>
      <li
        class="relative flex cursor-pointer p-0.5 hover:bg-white/60 hover:rounded-sm group"
      >
        <RouterLink to="">
          <FavoriteIcon class="group-hover:text-red-600 size-6" />
          <span
            class="absolute top-[-5px] right-[-4px] text-white text-center bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-sm"
            >0</span
          ></RouterLink
        >
      </li>
      <li
        class="relative flex cursor-pointer p-0.5 hover:bg-white/60 hover:rounded-sm group"
      >
        <RouterLink to="">
          <ShoppingBagIcon class="group-hover:text-red-600 size-6" />
          <span
            class="absolute top-[-5px] right-[-4px] text-white text-center bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-sm"
            >0</span
          ></RouterLink
        >
      </li>
      <li
        class="relative flex cursor-pointer p-0.5 hover:bg-white/60 hover:rounded-sm group"
      >
        <RouterLink to="/dashboard"
          ><PersonIcon class="group-hover:text-red-600 size-6"
        /></RouterLink>
      </li>
    </ul>
  </nav>
</template>
