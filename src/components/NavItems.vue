<template>
  <nav>
    <ul class="flex gap-4 justify-center items-center">
      <li
        v-for="item in items"
        :key="item.id"
        :class="['flex p-2.5 text-sm cursor-pointer', item.class]"
      >
        <div>
          <h4 :class="['font-bold', { 'text-xl': isPara }]">
            {{ item.name }}
          </h4>
          <p v-if="item.isPara" class="block text-gray-500 text-xs">
            {{ item.para }}
          </p>
        </div>
        <span :class="['inline text-sm', item.iconClass]">
          <component :is="item.icon" />
        </span>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    defautls: () => [],
  },
});
</script>
