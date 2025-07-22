<template>
  <div
    class="relative left-1/5 bg-zinc-100 top-0 w-4/5 h-16 flex justify-center items-center animate__animated animate__fadeIn"
  >
    <div class="relative flex-1">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search your favorite Books"
        class="bg-blue-100 w-3/5 ml-4 pl-10 py-2 rounded outline-blue-300"
      />
      <SearchIcon class="size-6 absolute left-5.5 top-2 text-black/60" />
    </div>
    <div class="flex gap-4 items-center mr-4 relative">
      <div class="hover:bg-gray-300 p-1 rounded cursor-pointer">
        <NotificationIcon class="size-6" />
        <span
          class="absolute top-[7px] left-3.5 text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs"
          >10</span
        >
      </div>
      <div
        class="flex items-center gap-1 rounded hover:bg-gray-300 p-2 cursor-pointer"
      >
        <PersonIcon class="size-8 bg-zinc-200 p-1.5 rounded-full" />
        <p class="text-sm">John Doe</p>
        <ArrowDown class="size-6" />
      </div>
    </div>
  </div>
</template>
<script setup>
import ArrowDown from "./icons/ArrowDown.vue";
import NotificationIcon from "./icons/notificationIcon.vue";
import PersonIcon from "./icons/personIcon.vue";
import SearchIcon from "./icons/searchIcon.vue";
</script>
