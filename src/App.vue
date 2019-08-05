<template>
  <v-app id="inspire">
    <navbar></navbar>
    <navigation-drawer></navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Navbar from './components/Layout/Navbar.vue';
import NavigationDrawer from './components/Layout/NavigationDrawer.vue';

@Component({
  components: {
    Navbar,
    NavigationDrawer
  }
})
export default class App extends Vue {
  @Prop({type: String})
  source!: String

  created () {
    (this as any).$vuetify.theme.dark = true
    this.$store.dispatch('fetchRestaurants');
    this.$store.dispatch('fetchRestaurantTypes');
  }
};
</script>
