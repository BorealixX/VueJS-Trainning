<script setup>
import Line from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);
const chartLine = {
  type: "line",
  data: {
    labels: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    datasets: [
      {
        label: "Alice aux pays des merveilles",
        data: [120, 130, 115, 140, 150, 160, 170, 175, 180, 190, 200, 210],
        borderColor: "violet",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Célèbre 128",
        data: [80, 90, 85, 100, 95, 110, 115, 120, 125, 130, 135, 140],
        borderColor: "yellow",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Chambre",
        data: [60, 70, 75, 85, 90, 95, 100, 105, 110, 120, 125, 130],
        borderColor: "blue",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Le château des trompe-l'oeil",
        data: [60, 70, 75, 85, 90, 95, 100, 105, 110, 120, 125, 130],
        borderColor: "red",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Le grand Livre des énigmes EINSTEIN",
        data: [60, 70, 75, 85, 90, 95, 100, 105, 110, 120, 125, 130],
        borderColor: "black",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Le livre des merveilles",
        data: [60, 70, 75, 85, 90, 95, 100, 105, 110, 120, 125, 130],
        borderColor: "pink",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.4,
        fill: false,
      },
    ],
  },
};
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: {
      display: true,
      text: "Comparaison des ventes de livres sur 12 mois",
    },
  },
};
</script>
<template>
  <div class="w-full p-4">
    <Line :data="chartLine" :options="chartOptions" />
  </div>
</template>
