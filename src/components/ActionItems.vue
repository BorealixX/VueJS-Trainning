<script setup>
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
      <li v-for="item in items" :key="item.id" class="relative flex">
        <component :is="item.icon" />
        <span
          v-if="item.showBadge"
          class="absolute top-[-5px] right-[-4px] text-white text-center bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-sm"
          >0</span
        >
      </li>
    </ul>
  </nav>
</template>
