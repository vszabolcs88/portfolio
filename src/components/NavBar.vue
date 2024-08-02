<template>
  <v-app-bar app color="grey-darken-4"  >
    <v-toolbar-title class="text-uppercase bold font-weight-bold" >Vince</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/about">About</v-btn>
    <v-btn text to="/contact">Contact</v-btn>
    <div class="progress position-absolute bottom-0 left-0" v-bind:style="styles"></div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
    };
  },
  computed: {
	styles: function() {
		return {
			width: this.scrollTop + 'px',
		};
	}
},
  methods: {
    handleScroll() {
      this.scrollTop = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>
.progress {
  border: 2px solid white;
}
</style>
