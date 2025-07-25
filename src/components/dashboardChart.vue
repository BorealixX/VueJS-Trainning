<script setup>
import { Line } from "vue-chartjs";
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
const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mars",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Alice aux pays des merveilles",
      data: [0, 50, 80, 98, 140, 170, 256, 305, 307, 310, 312, 320],
      borderColor: "violet",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      tension: 0.4,
      fill: false,
    },
    {
      label: "Célèbre 128",
      data: [0, 90, 85, 100, 95, 150, 185, 190, 205, 230, 270, 300],
      borderColor: "yellow",
      backgroundColor: "rgba(239, 68, 68, 0.2)",
      tension: 0.4,
      fill: false,
    },
    {
      label: "Chambre",
      data: [0, 70, 75, 85, 90, 95, 120, 155, 180, 200, 245, 270],
      borderColor: "blue",
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      tension: 0.4,
      fill: false,
    },
    {
      label: "Le château des trompe-l'oeil",
      data: [5, 50, 25, 35, 50, 65, 67, 80, 100, 130, 165, 195],
      borderColor: "red",
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      tension: 0.4,
      fill: false,
    },
    {
      label: "Le grand Livre des énigmes EINSTEIN",
      data: [10, 17, 55, 65, 70, 75, 100, 105, 110, 120, 125, 130],
      borderColor: "orange",
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      tension: 0.4,
      fill: false,
    },
    {
      label: "Le livre des merveilles",
      data: [0, 140, 175, 185, 195, 199, 200, 230, 250, 280, 250, 230],
      borderColor: "pink",
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      tension: 0.4,
      fill: false,
    },
  ],
};
// console.log("ChartData", chartData);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      bodyFont: {
        size: 10,
      },
      titleFont: {
        size: 10,
      },
      padding: 4,
      boxPadding: 4,
    },
    legend: {
      position: "bottom",
      labels: {
        font: {
          size: 10,
          style: "italic",
        },
        boxWidth: 4,
        boxHeight: 4,
        padding: 10,
      },
    },
    title: {
      display: true,
      text: "COMPARAISON DES VENTES DE LIVRES SUR 12 MOIS",
    },
  },
};
</script>
<template>
  <div
    class="ml-4 mt-4 p-4 h-4/5 w-3/5 absolute left-1/5 rounded-lg bg-gray-100 shadow-lg/30"
  >
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
