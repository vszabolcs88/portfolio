<template>
  <!-- Skill section container -->
  <v-container fluid class="full-height">
    <!-- Skill section title -->
    <h2 class="text-h4 font-weigh-medium text-center text-uppercase mb-12">
      Skill
    </h2>
    <!-- Section Content -->
    <v-row class="h-75" align="center">
      <!-- Left side -->
      <v-col cols="6">
        <!-- image -->
        <v-img
          class="mx-auto"
          height="300"
          max-width="500"
          cover
          src="../images/skill_2_img.jpg"
        ></v-img>
      </v-col>
      <!-- Right side -->
      <v-col cols="6" class="border">
        <!-- Progressbar container -->
        <div class="d-flex ga-5" v-for="skill in skills" :key="skill.id">
          <v-icon icon="code"></v-icon>
          <div class="w-25">{{ skill.language }}</div>
          <v-progress-linear
            v-model="skill.value"
            color="blue-darken-1"
            height="25"
            class="mb-3"
          >
            <template v-slot:default="{ value }">
              <strong>{{ Math.ceil(value) }}%</strong>
            </template>
          </v-progress-linear>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useSkillStore } from "@/stores/skill";
import { mapState, mapActions } from "pinia";
export default {
  data: () => ({
    skill: 21,
    knowledge: 33,
    power: 78,
  }),
  computed: {
    ...mapState(useSkillStore, ["skills"]),
  },
};
</script>

<style>
.full-height {
  height: 100vh;
}
</style>
