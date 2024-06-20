import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
  state: () => ({
    contents: [
      {
        title: "Fast",
        content:
          "Fast load times and lag free interaction, my highest priority.",
        icon: "mdi-gear",
        url: "src/images/fast_img.jpg",
        id: 1,
      },
      {
        title: "Responsive",
        content: "My layouts will work on any device, big or small.",
        icon: "mdi-gear",
        url: "src/images/responsive_img.jpg",
        id: 2,
      },
      {
        title: "Dynamic",
        content: "I love making websites come to life.",
        icon: "mdi-gear",
        url: "src/images/dynamic_img.jpg",
        id: 3,
      },
    ],
  })
})