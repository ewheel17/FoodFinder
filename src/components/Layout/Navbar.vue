<template>
  <v-app-bar
    app
    clipped-left
    color="red"
    dense
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
    <v-toolbar-title class="mr-12 align-center">
      <span class="title">FoodFinder</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-layout
      align-center
      style="max-width: 400px"
    >
      <v-text-field
        v-model="inputSearch"
        placeholder="Search..."
        single-line
        append-icon="search"
        color="white"
        hide-details
      ></v-text-field>
    </v-layout>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  private inputSearch = '';

  @Watch('inputSearch')
  private searchRestaurants() {
    const matchingRestaurants = this.$store.state.originalRestaurants.filter((item: any) => {
      return item.name.toLowerCase().includes(this.inputSearch.toLowerCase());
    });
    this.$store.commit('setRestaurants', matchingRestaurants);
  }

  private toggleDrawer() {
    this.$store.commit('toggleDrawer');
  }
}
</script>
