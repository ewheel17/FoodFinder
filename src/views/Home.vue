<template>
  <v-container>
    <RestaurantDisplay></RestaurantDisplay>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RestaurantDisplay from '../components/RestaurantDisplay/RestaurantDisplay.vue';

@Component({
  components: {
    RestaurantDisplay,
  },
})
export default class Home extends Vue {}
</script>
