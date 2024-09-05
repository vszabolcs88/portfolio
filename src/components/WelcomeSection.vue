<template>
  <v-container fluid id="landing" class="mb-10 hero">
    <v-row justify="center" class="fill-height">
      <v-col cols="12" align-self="start" class="pt-16">
        <h1 class="text-h1 font-weigh-medium text-center text-uppercase pt-16">
          Welcome to My Portfolio
        </h1>
        <p class="text-h4 text-center mt-10 header-subtitle">
          Discover my projects and learn more about me.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//
</script>

<style scoped>
.hero {
  background: url("../images/background_img.jpg");
  background-size: cover;
  height: 100vh;
}

h1 {
  max-width: 769px;
  margin: auto;
  opacity: 0;
  animation-name: appear;
  animation-duration: 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

.header-subtitle {
  opacity: 0;
  animation-name: subtitle;
  animation-duration: 3s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  
}

@keyframes subtitle {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  
}


</style>
