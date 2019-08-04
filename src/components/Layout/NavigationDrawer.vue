<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
  >
    <v-layout column justify-center pa-5>
      <v-flex xs11 md7 justify-center>
        <label>Toggle View</label>
        <hr>
        <v-switch
          class="mt-1"
          v-model="viewSwitch"
          :label="viewSwitch ? 'Table' : 'Card'"
          color="orange"
          value="orange"
        ></v-switch>
      </v-flex>
      <v-flex xs11>
        <label>Sort</label>
        <hr>
        <v-switch
          class="mt-1"
          v-model="sortSwitch"
          :label="sortSwitch ? 'Alphabetically: Z-A' : 'Alphabetically: A-Z'"
          color="orange"
          value="orange"
        ></v-switch>
      </v-flex>
      <v-flex xs12>
        <label>Filter by Type</label>
        <hr>
        <v-checkbox
          v-for="(type, index) in restaurantTypes"
          :key="type.type + index"
          :label="type.type"
          :color="type.color"
          value="red darken-3"
          hide-details
        ></v-checkbox>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NavigationDrawer extends Vue {
  drawer = true
  viewSwitch = false
  sortSwitch = false
  ex4 = false

  @Prop({required: true})
  restaurantTypes!: any

};
</script>