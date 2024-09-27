<template>
  <v-layout row style="min-height: 100vh">
    <div style="width: 100vw">
      <v-row v-for="(item, i) in items" :key="i" style="min-height: 30vh" wrap>
        <v-col cols="6">
          <v-img
            :max-height="300"
            aspect-ratio="16/9"
            :src="item.url"
            cover
          >
          </v-img>
        </v-col>
        <v-col cols="6">
          <v-card min-height="300">
            <div class="d-flex flex-column justify-center card-project">
              <v-card-title> {{item.title}} </v-card-title>
              <v-card-subtitle> {{item.subtitle}}</v-card-subtitle>
              <v-card-text>{{ item.text }}</v-card-text>
              <v-card-actions>
                <v-btn to="/">Read More</v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: " Lorem ipsum",
          subtitle: "Subtitle here",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis.",
          url: "https://picsum.photos/450/200?random",
          id: 1
        },
        {
          title: " Lorem ipsum",
          subtitle: "Subtitle here",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis.",
          url: "https://picsum.photos/450/200?random",
          id: 2
        },
        {
          title: " Lorem ipsum",
          subtitle: "Subtitle here",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis.",
          url: "https://picsum.photos/450/200?random",
          id: 3
        }
        
      ]
    }
  }
}

</script>
<style>
.card-project {
  height: 100%;
}

</style>