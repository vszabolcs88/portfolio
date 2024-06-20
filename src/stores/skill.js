import { defineStore } from "pinia";

export const useSkillStore = defineStore("skills", {
    state: () => ({
      skills: [
        {
          language: "HTML",
          percentage: 45,
          id: 1,
        },
        {
            language: "CSS",
            percentage: 55,
            id: 2,
        },
        {
            language: "Javascript",
            percentage: 65,
            id: 3,
        },
      ],
    }),
  });