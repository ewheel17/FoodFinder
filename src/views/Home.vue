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
  restaurants: any = [];
  restaurantTypes: any;

  created () {
    this.getRestaurants();
    this.getRestaurantTypes();
  }

  // Move this call to App.vue and set in store for usage.
  async getRestaurants() {
    // GQL call goes here
    // Do validation to make sure the link is correct.

    const validatedRestaurants = await restaurants.map(item => {
      if (item.website && item.website.includes('.com') && !item.website.includes('http')) {
       item.website = 'http://' + item.website;
      } 
      return item;
    })
    console.log(validatedRestaurants);
    this.restaurants = restaurants;
    console.log(this.restaurants);
  }

  // Move this call to App.vue and set in store for usage.
  getRestaurantTypes() {
    this.restaurantTypes = restaurantTypes;
  }
};
</script>
