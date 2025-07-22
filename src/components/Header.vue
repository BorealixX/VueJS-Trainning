<template>
  <header
    class="fixed right-0 left-0 flex justify-between items-center px-4 z-10 bg-white/5 backdrop-blur-sm"
  >
    <div>
      <h1 class="font-bold text-3xl text-gray-500 uppercase">
        <RouterLink to="/">Bootin</RouterLink>
      </h1>
    </div>
    <nav>
      <ul class="flex p-2.5 text-sm cursor-pointer gap-4">
        <li
          class="text-center pb-0.5 text-xl relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-red-500 hover:text-red-500 before:transition-all before:duration-300 hover:before:w-16 group"
        >
          <RouterLink to="" class="flex justify-center items-center text-base">
            Home<ArrowDown class="size-4.5 group-hover:text-red-500"
          /></RouterLink>
        </li>
        <li
          class="text-center pb-0.5 text-xl relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-red-500 hover:text-red-500 before:transition-all before:duration-300 hover:before:w-16 group"
        >
          <RouterLink to="" class="flex justify-center items-center text-base"
            >Shop<ArrowDown class="size-4.5 group-hover:text-red-500"
          /></RouterLink>
        </li>
        <li
          class="text-center pb-0.5 text-xl relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-red-500 hover:text-red-500 before:transition-all before:duration-300 hover:before:w-16 group"
        >
          <RouterLink
            to="/dashboard"
            class="flex justify-center items-center text-base"
            >Blog<ArrowDown class="size-4.5 group-hover:text-red-500"
          /></RouterLink>
        </li>
        <li
          class="text-center pb-0.5 text-xl relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-red-500 hover:text-red-500 before:transition-all before:duration-300 hover:before:w-16 group"
        >
          <RouterLink to="" class="flex justify-center items-center text-base"
            >Author<ArrowDown class="size-4.5 group-hover:text-red-500"
          /></RouterLink>
        </li>
        <li
          class="text-center pb-0.5 text-xl relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-red-500 hover:text-red-500 before:transition-all before:duration-300 hover:before:w-16 group"
        >
          <RouterLink to="" class="flex justify-center items-center text-base"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </nav>
    <ActionItems />
  </header>
</template>
<script setup>
import ActionItems from "./ActionItems.vue";
import ArrowDown from "./icons/ArrowDown.vue";
</script>
