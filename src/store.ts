import Vue from 'vue';
import Vuex from 'vuex';
// These imports turn into service calls.
import restaurantTypes from './api/queries/getRestaurantTypes';
import restaurants from './api/queries/getRestaurants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true,
    currentDisplay: true,
    restaurants: [],
    originalRestaurants: [],
    restaurantTypes: [],
    originalTypes: [],
  },
  mutations: {
    toggleDisplay(state) {
      state.currentDisplay = !state.currentDisplay;
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    setRestaurants(state, payload) {
      state.restaurants = payload;
    },
    setOriginalRestaurants(state, payload) {
      state.originalRestaurants = payload;
    },
    setRestaurantTypes(state, payload) {
      state.restaurantTypes = payload;
    },
    setOriginalTypes(state, payload) {
      state.originalTypes = payload;
    },
  },
  actions: {
    async fetchRestaurants(context: any, apollo: any) {
      if (context.state.restaurants.length === 0) {
        // const response = await apollo.query({
        //   query: ** insert getRestaurants query here **,
        // });

        // Do validation to make sure the link is correct (This could/should be far more elegant).
        const validatedRestaurants = await restaurants.map((item: any) => {
          if (
            item.website &&
            (
              item.website.includes('.com') ||
              item.website.includes('.net') ||
              item.website.includes('.org')
            ) &&
            !item.website.includes('http')
          ) {
           item.website = 'http://www.' + item.website;
          }
          return item;
        });
        context.commit('setRestaurants', validatedRestaurants);
        context.commit('setOriginalRestaurants', validatedRestaurants);
      }
    },
    async fetchRestaurantTypes(context: any, apollo: any) {
      if (context.state.restaurantTypes.length === 0) {
        // const response = await apollo.query({
        //   query: ** insert getRestaurantTypes query here **,
        // });
        context.commit('setRestaurantTypes', restaurantTypes);
        context.commit('setOriginalTypes', restaurantTypes);
      }
    },
    setFilteredTypes(context: any, { selected }) {
      if (!selected.length) {
        context.commit('setRestaurants', context.state.originalRestaurants);
        context.commit('setRestaurantTypes', context.state.originalTypes);
        return;
      }
      const filteredTypes = context.state.originalTypes.filter((item: any) => selected.includes(item.type));
      const filteredRestaurants = context.state.originalRestaurants.filter((item: any) => selected.includes(item.type));
      context.commit('setRestaurants', filteredRestaurants);
      context.commit('setRestaurantTypes', filteredTypes);
    },
  },
});
