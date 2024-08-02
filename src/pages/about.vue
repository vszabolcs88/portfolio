<template>
    <v-card>
        <v-card-media src="src" height="200px">
        </v-card-media>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">headline</h3>
                <div>description</div>
            </div>
        </v-card-title>
        <v-card-subtitle>
            <div>
                {{quadrupleCounter}}
            </div>
        </v-card-subtitle>
        <v-card-subtitle>
            <div>
            </div>
        </v-card-subtitle>
        <v-card-actions>
            <v-btn flat color="primary">text</v-btn>
            <v-btn flat color="primary">text</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import {useCounterStore} from '@/stores/count'
export default {
  setup() {
    const counterStore = useCounterStore()

    // **only return the whole store** instead of destructuring
    return { counterStore }
  },
  computed: {
    quadrupleCounter() {
      return this.counterStore.doubleCount * 2
    },
  },
}


</script>
