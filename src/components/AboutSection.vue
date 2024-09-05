<template>
  <v-container class="full-height">
    <v-row align-content="space-evenly" class="full-height">
      <v-col cols="12">
        <h2 class="text-h4 font-weigh-medium text-center text-uppercase">About</h2>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            v-for="content in contents"
            :key="content.id"
            cols="4"
            my-12
          >
            <v-card class="mx-auto" max-width="300">
              <v-img height="250px" :src="content.url" cover></v-img>
              <v-card-title>
                <v-card-actions>
                  <span>{{ content.title }} </span>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="orange-lighten-2"
                    :icon="show ? '$collapse' : '$expand'"
                    @click= "show =!show "
                  ></v-btn>
                </v-card-actions>
              </v-card-title>

              <v-expand-transition>
                <div v-show="show">
                  <v-card-tex>
                    {{ content.content }}
                  </v-card-tex>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {useAboutStore} from '@/stores/about'
import { mapState, mapActions } from 'pinia';
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState(useAboutStore,['contents']),

  },
  methods: {
    buttonClicked() {
   
      
    },
    ...mapActions(useAboutStore, ['clickedFromStore']),
  }
};
</script>

<style>
.full-height {
  height: 100vh;
}
</style>
