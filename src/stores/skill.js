import { defineStore } from "pinia";

export const useSkillStore = defineStore("skills", {
  state: () => ({
    skills: [
      {
        language: "HTML",
        value: "85",
        id: 1,
      },
      {
        language: "CSS",
        value: "75",
        id: 2,
      },
      {
        language: "Javascript",
        value: "50",
        id: 3,
      },
      {
        language: "Node JS",
        value: "35",
        id: 4,
      },
      {
        language: "SQL",
        value: "35",
        id: 5,
      },
      {
        language: "MongoDB",
        value: "35",
        id: 6,
      },
      {
        language: "Vue JS",
        value: "75",
        id: 7,
      }
    ],
  }),
});
