<script setup>
import HomeIcon from "./icons/homeIcon.vue";
import OpenBook from "./icons/openBook.vue";
import CloseBook from "./icons/closeBook.vue";
import LogoutIcon from "./icons/logoutIcon.vue";
import NavItems from "@/components/NavItems.vue";
import SettingIcon from "./icons/settingIcon.vue";
import FavoriteIcon from "./icons/favoriteIcon.vue";
import AudioBookIcon from "./icons/audioBookIcon.vue";
import DownloadFileIcon from "./icons/downloadFileIcon.vue";
import ContactSupportIcon from "./icons/contactSupportIcon.vue";
</script>
<template>
  <NavItems
    :items="[
      {
        id: 'discover',
        name: 'Discover',
        icon: HomeIcon,
        isPara: true,
      },
      {
        id: 'categories',
        name: 'Catégries',
        icon: CloseBook,
        isPara: true,
      },
      {
        id: 'library',
        name: 'My Librairies',
        icon: OpenBook,
        isPara: true,
      },
      {
        id: 'download',
        name: 'Download',
        icon: DownloadFileIcon,
        isPara: true,
      },
      {
        id: 'audio',
        name: 'Audio Book',
        icon: AudioBookIcon,
        isPara: true,
      },
      {
        id: 'favoriteSide',
        name: 'Favorite',
        icon: FavoriteIcon,
        isPara: true,
      },
    ]"
  />
  <hr />
  <NavItems
    :items="[
      {
        id: 'setting',
        name: 'Setting',
        icon: SettingIcon,
        isPara: true,
      },
      {
        id: 'support',
        name: 'Support',
        icon: ContactSupportIcon,
        isPara: true,
      },
      {
        id: 'logout',
        name: 'Logout',
        icon: LogoutIcon,
        isPara: true,
      },
    ]"
  />
</template>
