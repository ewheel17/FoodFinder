<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <p>
        Card/Table Toggle
      </p>
      <p>
        Sort
      </p>
      <p>
        Filter
      </p>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="red"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">FoodFinder</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout
        align-center
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './views/Home.vue';
import Navbar from './components/Navbar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Home,
    Navbar,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    items: [
      
    ],
    items2: [
      
    ],
  }),
  created () {
    (this as any).$vuetify.theme.dark = true
  },
});
</script>
