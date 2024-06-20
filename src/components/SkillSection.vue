<template>
  <v-container fluid class="full-height">
    <h2 class="text-h4 font-weigh-medium text-center text-uppercase mb-12">
      Skill
    </h2>
    <v-row class="h-75">
      <v-col cols="6"></v-col>
      <v-col cols="6">
        <div class="d-flex ga-5">
            <div>Javacript</div>
          <v-progress-linear v-model="skill" color="blue-grey" height="25">
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
import {useSkillStore} from '@/stores/skill'
import { mapState, mapActions } from 'pinia';
export default {
  data: () => ({
    skill: 21,
    knowledge: 33,
    power: 78,
  }),
  computed: {
    ...mapState(useSkillStore,['skills'])
  }
};
</script>

<style>
.full-height {
  height: 100vh;
}
</style>
