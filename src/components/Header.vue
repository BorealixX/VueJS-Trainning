<template>
  <header
    class="fixed right-0 left-0 flex justify-between items-center px-4 z-10 bg-white/5 backdrop-blur-sm"
  >
    <div>
      <h1 class="font-bold text-3xl text-gray-500">BOOTIN</h1>
    </div>
    <NavItems
      :items="[
        { id: 'home', name: 'Home', icon: ArrowDown, isPara: false },
        { id: 'shop', name: 'Shop', icon: ArrowDown, isPara: false },
        {
          id: 'blog',
          name: 'Blog',
          icon: ArrowDown,
          link: 'dashboard',
          isPara: false,
        },
        { id: 'author', name: 'Author', icon: ArrowDown, isPara: false },
        { id: 'contact', name: 'Contact', isPara: false },
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
import NavItems from "./NavItems.vue";
import ActionItems from "./ActionItems.vue";
import ArrowDown from "./icons/ArrowDown.vue";
import PersonIcon from "./icons/personIcon.vue";
import SearchIcon from "./icons/searchIcon.vue";
import FavoriteIcon from "./icons/favoriteIcon.vue";
import ShoppingBagIcon from "./icons/shoppingBagIcon.vue";
</script>
