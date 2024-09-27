<template>
  <v-footer class="d-flex flex-column text-center bg-transparent my-12">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      >
      </v-btn>
    </div>
    <div>
      <strong>{{ new Date().getFullYear() }}</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
