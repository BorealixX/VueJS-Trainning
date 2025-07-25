<script setup>
import HomeIcon from "./icons/homeIcon.vue";
import OpenBook from "./icons/openBook.vue";
import CloseBook from "./icons/closeBook.vue";
import LogoutIcon from "./icons/logoutIcon.vue";
import SettingIcon from "./icons/settingIcon.vue";
import FavoriteIcon from "./icons/favoriteIcon.vue";
import AudioBookIcon from "./icons/audioBookIcon.vue";
import BookBaseHomeIcon from "./icons/BookBaseHomeIcon.vue";
import DownloadFileIcon from "./icons/downloadFileIcon.vue";
import ContactSupportIcon from "./icons/contactSupportIcon.vue";
</script>
<template>
  <aside
    class="absolute top-0 w-1/5 bg-red-200/60 h-screen flex flex-col rounded-r-3xl items-center animate__animated animate__fadeIn"
  >
    <h2 class="my-3">
      <RouterLink to="/">
        <BookBaseHomeIcon
          class="size-8 inline mr-2 text-red-600 font-bold"
        /><strong>Book</strong>Base</RouterLink
      >
    </h2>
    <nav class="w-full">
      <ul>
        <li>
          <RouterLink
            to="/"
            class="flex gap-3 p-2 items-center hover:bg-gray-400/40 text-sm text-black/60"
            ><HomeIcon
              class="bg-red-500 p-0.5 rounded text-white size-5.5"
            />Discover</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-400/40 text-sm text-black/60"
            ><CloseBook
              class="bg-red-300 p-0.5 rounded text-black/60 size-5.5"
            />Dashboard</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-400/40 text-sm text-black/60"
            ><OpenBook
              class="bg-red-300 p-0.5 rounded text-black/60 size-5.5"
            />Billing</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-400/40 text-sm text-black/60"
            ><DownloadFileIcon
              class="bg-red-300 p-0.5 rounded text-black/60 size-5.5"
            />Download</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-400/40 text-sm text-black/60"
            ><AudioBookIcon
              class="bg-red-300 p-0.5 rounded text-black/60 size-5.5"
            />Audio Book</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-400/40 text-sm text-black/60"
            ><FavoriteIcon
              class="bg-red-300 p-0.5 rounded text-black/60 size-5.5"
            />Favorite</RouterLink
          >
        </li>
        <hr class="m-2 text-black/40" />
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-400/40 text-sm text-black/60"
            ><SettingIcon
              class="bg-red-300 p-0.5 rounded text-black/60 size-5.5"
            />Settings</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-400/40 text-sm text-black/60"
            ><ContactSupportIcon
              class="bg-red-300 p-0.5 rounded text-black/60 size-5.5"
            />Support</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-400/40 text-sm text-black/60"
            ><LogoutIcon
              class="bg-red-300 p-0.5 rounded text-black/60 size-5.5"
            />Logout</RouterLink
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>
