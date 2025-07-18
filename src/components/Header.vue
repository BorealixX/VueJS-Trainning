<template>
  <header
    class="fixed right-0 left-0 flex justify-between items-center px-4 z-10 bg-white/10 backdrop-blur-sm"
  >
    <div>
      <h1 class="font-bold text-3xl text-gray-500">BOOTIN</h1>
    </div>
    <NavItems
      :items="[
        { id: 1, name: 'Home', icon: ArrowDown, isPara: false },
        { id: 2, name: 'Shop', icon: ArrowDown, isPara: false },
        { id: 3, name: 'Blog', icon: ArrowDown, isPara: false },
        { id: 4, name: 'Author', icon: ArrowDown, isPara: false },
        { id: 5, name: 'Contact' },
      ]"
    />
    <ActionItems
      :items="[
        { id: 'serach', icon: SearchIcon, showBadge: false },
        { id: 'heart', icon: FavoriteIcon, showBadge: true },
        { id: 'shop', icon: ShoppingBagIcon, showBadge: true },
        { id: 'person', icon: PersonIcon, showBadge: false },
      ]"
    />
  </header>
</template>
<script setup>
import ActionItems from "./ActionItems.vue";
import ArrowDown from "./icons/ArrowDown.vue";
import FavoriteIcon from "./icons/favoriteIcon.vue";
import PersonIcon from "./icons/personIcon.vue";
import SearchIcon from "./icons/searchIcon.vue";
import ShoppingBagIcon from "./icons/shoppingBagIcon.vue";
import NavItems from "./NavItems.vue";
</script>
