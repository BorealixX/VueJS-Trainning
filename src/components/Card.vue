<script setup>
import Button from "./Button.vue";
const props = defineProps({
  books: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
<template>
  <div
    v-for="book in books"
    :key="book.id"
    class="w-[300px] h-[470px] flex flex-col justify-center items-center bg-white shadow rounded-2xl"
  >
    <img
      :src="book.src"
      :alt="book.title"
      class="w-[200px] h-[300px] rounded shadow-lg"
    />
    <div>
      <h3 class="font-bold uppercase text-center py-2">{{ book.title }}</h3>
      <p class="text-center italic pb-2.5 text-sm">By {{ book.author }}</p>
    </div>
    <Button class="py-2.5 px-5 shadow-xl rounded">Add To Cart</Button>
  </div>
</template>
