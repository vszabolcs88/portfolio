<template>
  <v-container fluid class="full-height">
    <h2 class="text-h4 font-weigh-medium text-center text-uppercase mb-12">
      Projects
    </h2>
    <v-row align="center" justify="center" class="h-75 text-center">
      <v-col cols="12" md="8" class="fill-height">
        <v-carousel show-arrows="hover" hide-delimiter-background > 
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            cover
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  methods: {
    handleClick(index) {
      console.log(index);
    }
  }
}
</script>

<style>
.full-height {
  height: 100vh;
}
</style>
