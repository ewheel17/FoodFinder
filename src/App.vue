<template>
  <v-app id="inspire">
    <navbar></navbar>
    <navigation-drawer :restaurantTypes="restaurantTypes" class="hidden-sm-and-down"></navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Navbar from './components/Layout/Navbar.vue';
import NavigationDrawer from './components/Layout/NavigationDrawer.vue';
import restaurantTypes from './api/queries/getRestaurantTypes';

@Component({
  components: {
    Navbar,
    NavigationDrawer
  }
})
export default class App extends Vue {
  restaurantTypes: any;

  @Prop({type: String})
  source!: String

  created () {
    (this as any).$vuetify.theme.dark = true
    this.getTypes();
  }

  getTypes() {
    // GQL call goes here
    this.restaurantTypes = restaurantTypes;
  }
};
</script>
