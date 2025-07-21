<script setup lang="ts">
import Card from "./Card.vue";
import aliceImage from "./../assets/images/alice.webp";
import chateauImage from "./../assets/images/chateau.jpg";
import celebreImage from "./../assets/images/celebre.jpg";
import chambreImage from "./../assets/images/chambre.webp";
import einsteinImage from "./../assets/images/einstein.jpg";
import merveillesImage from "./../assets/images/merveilles.jpg";
</script>

<template>
  <div class="bg-gray-200">
    <h1
      class="mb-8 text-center font-bold text-2xl py-4 relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-20 before:h-0.5 before:bg-red-500"
    >
      Popular Book
    </h1>
    <div class="grid grid-cols-3 gap-5 justify-items-center">
      <Card
        :books="[
          {
            id: 'b-0',
            title: 'Alice aux pays des merveilles',
            author: 'Lewis Carroll',
            src: aliceImage,
          },
          {
            id: 'b-1',
            title: 'Célèbre 128',
            author: 'Maud Ventura',
            src: celebreImage,
          },
          {
            id: 'b-2',
            title: 'Chambre',
            author: 'Cathy Bonidan',
            src: chambreImage,
          },
          {
            id: 'b-3',
            title: 'Le château des trompe-l\'oeil',
            author: 'Christophe Bigot',
            src: chateauImage,
          },
          {
            id: 'b-4',
            title: 'Le grand Livre des énigmes EINSTEIN',
            author: 'Tim Diperlos',
            src: einsteinImage,
          },
          {
            id: 'b-5',
            title: 'Le livre des merveilles',
            author: 'Nathaniel Hawthorne',
            src: merveillesImage,
          },
        ]"
      />
    </div>
  </div>
</template>
