<script setup>
import HomeIcon from "./icons/homeIcon.vue";
import OpenBook from "./icons/openBook.vue";
import CloseBook from "./icons/closeBook.vue";
import LogoutIcon from "./icons/logoutIcon.vue";
import SettingIcon from "./icons/settingIcon.vue";
import FavoriteIcon from "./icons/favoriteIcon.vue";
import AudioBookIcon from "./icons/audioBookIcon.vue";
import DownloadFileIcon from "./icons/downloadFileIcon.vue";
import ContactSupportIcon from "./icons/contactSupportIcon.vue";
import BookBaseHomeIcon from "./icons/BookBaseHomeIcon.vue";
</script>
<template>
  <aside
    class="absolute top-0 w-1/5 bg-zinc-100 h-screen flex flex-col items-center animate__animated animate__fadeIn"
  >
    <h2 class="my-3">
      <RouterLink to="/">
        <BookBaseHomeIcon
          class="size-8 inline mr-2 text-blue-500 font-bold"
        /><strong>Book</strong>Base</RouterLink
      >
    </h2>
    <nav class="w-full">
      <ul>
        <li>
          <RouterLink
            to="/"
            class="flex gap-3 p-2 items-center hover:bg-gray-300/40 text-sm text-black/60"
            ><HomeIcon
              class="bg-blue-500 p-0.5 rounded text-white/80 size-5.5"
            />Discover</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-300/40 text-sm text-black/60"
            ><CloseBook
              class="bg-gray-200 p-0.5 rounded text-black/60 size-5.5"
            />Category</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-300/40 text-sm text-black/60"
            ><OpenBook
              class="bg-gray-300 p-0.5 rounded text-black/60 size-5.5"
            />Library</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-300/40 text-sm text-black/60"
            ><DownloadFileIcon
              class="bg-gray-300 p-0.5 rounded text-black/60 size-5.5"
            />Download</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-300/40 text-sm text-black/60"
            ><AudioBookIcon
              class="bg-gray-300 p-0.5 rounded text-black/60 size-5.5"
            />Audio Book</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-300/40 text-sm text-black/60"
            ><FavoriteIcon
              class="bg-gray-300 p-0.5 rounded text-black/60 size-5.5"
            />Favorite</RouterLink
          >
        </li>
        <hr class="m-2 text-black/40" />
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-300/40 text-sm text-black/60"
            ><SettingIcon
              class="bg-gray-300 p-0.5 rounded text-black/60 size-5.5"
            />Settings</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-300/40 text-sm text-black/60"
            ><ContactSupportIcon
              class="bg-gray-300 p-0.5 rounded text-black/60 size-5.5"
            />Support</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to=""
            class="flex gap-3 p-2 items-center hover:bg-gray-300/40 text-sm text-black/60"
            ><LogoutIcon
              class="bg-gray-300 p-0.5 rounded text-black/60 size-5.5"
            />Logout</RouterLink
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>
