
<script>

import {useCounterStore} from '@/stores/counter'
import { mapState, mapActions } from 'pinia';

const store = useCounterStore();

export default {
 computed: {
  ...mapState(useCounterStore,['count','name', 'doubleCount','doubleCountPlusOne']),
 },
 methods: {
  ...mapActions(useCounterStore,['increment'])
 }
}

</script>

<template>
  <h1>This the about page</h1>
  <div>Counter: {{ count}} {{ name }}</div>
  <div>Double count is : {{ doubleCount}}</div>
  <div>Double count plus: {{ doubleCountPlusOne }}</div>
  <div>Increment count: {{ increment }}</div>
  </template>