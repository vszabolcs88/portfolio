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
        isVisible: false,
        id: 0,
      },
      {
        title: "Responsive",
        content: "My layouts will work on any device, big or small.",
        icon: "mdi-gear",
        url: "src/images/responsive_img.jpg",
        isVisible: false,
        id: 1,
      },
      {
        title: "Dynamic",
        content: "I love making websites come to life.",
        icon: "mdi-gear",
        url: "src/images/dynamic_img.jpg",
        isVisible: false,
        id: 2,
      },
    ],
  }),
  actions: {
    clickedFromStore(id) {
      this.contents[id].isVisible = !this.contents[id].isVisible;
      //it return the element I clicked
     //console.log(this.contents.filter(content => content.id == id));

    },
  },
})