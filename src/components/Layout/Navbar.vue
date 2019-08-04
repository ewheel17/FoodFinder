<template>
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    drawer: null,
  }),
});
</script>
