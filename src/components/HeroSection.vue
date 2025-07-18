<script setup>
import Button from "./Button.vue";
import Boat from "./icons/boat.vue";
import Percent from "./icons/percent.vue";
import Saving from "./icons/saving.vue";
import SearchIcon from "./icons/searchIcon.vue";
import NavItems from "./NavItems.vue";
</script>
<template class="h-[700px] z-0">
  <div
    class="bg-[url('./../assets/images/heroBg.jpg')] bg-cover bg-center w-full h-[478px] flex items-center"
  >
    <div class="translate-x-[100px] translate-y-[-30px]">
      <p class="text-red-500 py-2.5">Collection Book 2018</p>
      <h3 class="font-bold text-4xl mb-4">
        40% Discount On Books <br />
        By Susan Merill
      </h3>
      <Button class="translate-y-8 w-[200px] py-2.5">Shop Now</Button>
    </div>
  </div>
  <div class="mt-8">
    <NavItems
      :items="[
        {
          icon: Boat,
          name: 'Free Shipping',
          para: 'Select between crowide range of textbook and media .',
          isPara: true,
          class: 'flex-row-reverse items-center',
          iconClass: 'w-1/5 h-1/5 mr-4',
        },
        {
          icon: Saving,
          name: 'Fast Delivery',
          para: 'Enjoy free shipping and our fast delivery service .',
          isPara: true,
          class: 'flex-row-reverse items-center',
          iconClass: 'w-1/5 h-1/5 mr-4',
        },
        {
          icon: Percent,
          name: 'Free Shipping',
          para: 'Select between crowide range of textbook and media .',
          isPara: true,
          class: 'flex-row-reverse items-center',
          iconClass: 'w-1/5 h-1/5 mr-4',
        },
      ]"
    />
  </div>
  <div>
    <form action="" class="flex justify-center items-center mt-7 gap-8 mb-12">
      <select name="" id="" class="border w-2xs h-10">
        <option value="">All Categories</option>
        <option value="">Romance</option>
        <option value="">Police</option>
        <option value="">Drama</option>
      </select>
      <select name="" id="" class="border w-2xs h-10">
        <option value="">All Authors</option>
        <option value="">Victor Hugo</option>
        <option value="">Gustave Flaubert</option>
        <option value="">Marcel Proust</option>
      </select>
      <Button class="w-32 h-10 p-2.5">
        <SearchIcon class="text-white mr-1.5" />
        Find Book
      </Button>
    </form>
  </div>
</template>
