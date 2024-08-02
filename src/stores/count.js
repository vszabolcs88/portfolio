import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 1,
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        doubleCountPlusOne() {
            // autocompletion ✨
            return this.doubleCount + 2
        }
    },
})