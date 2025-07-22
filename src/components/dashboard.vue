<script setup lang="ts">
import DashboardChart from "./dashboardChart.vue";
import DashboardHeader from "./dashboardHeader.vue";
import SideBar from "./SideBar.vue";
</script>

<template>
  <div class="flex h-screen">
    <SideBar class="w-1/5 flex-shrink-0" />
    <div class="flex-grow flex flex-col">
      <DashboardHeader
        class="flex-shrink-0 relative left-1/5 bg-zinc-100 top-0 w-4/5 h-16 flex justify-center items-center animate__animated animate__fadeIn"
      />
      <div class="flex-grow w-4/5">
        <DashboardChart />
      </div>
    </div>
  </div>
</template>
