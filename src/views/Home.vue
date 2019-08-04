<template>
  <v-container>
    <RestaurantDisplay :restaurants="restaurants" :restaurantTypes="restaurantTypes"></RestaurantDisplay>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import restaurants from '../api/queries/getRestaurants';
import restaurantTypes from '../api/queries/getRestaurantTypes';
import RestaurantDisplay from '../components/RestaurantDisplay/RestaurantDisplay.vue';

@Component({
  components: {
    RestaurantDisplay,
  }
})
export default class Home extends Vue {
  restaurants: any;
  restaurantTypes: any;

  created () {
    this.getRestaurants();
    this.getRestaurantTypes();
  }

  // Move this call to App.vue and set in store for usage.
  getRestaurants() {
    // GQL call goes here
    this.restaurants = restaurants;
  }

  // Move this call to App.vue and set in store for usage.
  getRestaurantTypes() {
    this.restaurantTypes = restaurantTypes;
    console.log(restaurantTypes);
  }
};
</script>
