<template>
  <!-- Skill section container -->
  <v-container fluid class="full-height" >
    <!-- Skill section title -->
    <h2 class="text-h4 font-weigh-medium text-center text-uppercase mb-12">
      Skill
    </h2>
    <!-- Section Content -->
    <v-row class="h-75" align="center" >
      <!-- Left side -->
      <v-col cols="6" ref="section" v-intersect="{
        handler: onIntersect,
        options: {
          threshold: 0.5
        }
      }">
        <!-- image -->
        <v-img
          class="mx-auto"
          height="300"
          max-width="500"
          cover
          src="../images/skills_image.jpg"
          :class="isIntersecting ? 'reveal' : 'revealActive'"
        ></v-img>
      </v-col>
      <!-- Right side -->
      <v-col cols="6" class="border">
        <!-- Progressbar container -->
        <div class="d-flex ga-5" v-for="skill in skills" :key="skill.id">
          <v-icon icon="sting"></v-icon>
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
  data() {
    return {
      isIntersecting: false
    }
  },
  computed: {
    ...mapState(useSkillStore, ["skills"]),
  },
  methods: {
    onIntersect(isIntersecting, entries, observer) {
      this.isIntersecting = !this.isIntersecting;
    }
  }
  // mounted() {
  //   //element
  //   let reveals = document.querySelector('.reveal');
  //   //height of the viewport
  //   let windowHeight = window.innerHeight;
  //   let elementTop = reveals.getBoundingClientRect().top;
  //   let elementVisible = 150;
  //   console.log(elementTop);
  // }
};
</script>

<style>
.full-height {
  height: 100vh;
}
.reveal{
  opacity: 0;
}
.revealActive {
  animation-name: reveal;
  animation-duration: 3s;

}
@keyframes reveal {
 from {opacity: 0;}
 to {opacity: 1;}
}
</style>
//  :class="{ 'revealActive' : isIntersecting, 'reveal': !isIntersecting }" 