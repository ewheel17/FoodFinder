<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    app
    clipped
  >
    <v-layout column justify-center pa-5>
      <v-flex xs11 hidden-md-and-up>
        <v-text-field
          v-model="inputSearch"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
          class="mb-5"
        ></v-text-field>
      </v-flex>
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
        <div class="mt-1">
          <v-btn depressed small @click="sortRestaurants('alpha')">Alphabetically</v-btn>
        </div>
        <div class="mt-1 mb-5">
          <v-btn depressed small @click="sortRestaurants('type')">By Type</v-btn>
        </div>
      </v-flex>
      <v-flex xs11>
        <label>Filter by Type</label>
        <hr>
        <v-checkbox
          v-for="(type, index) in $store.state.originalTypes"
          :key="type.type + index"
          :label="type.type"
          :color="type.color"
          :value="type.type"
          v-model="selected"
          hide-details
        ></v-checkbox>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class NavigationDrawer extends Vue {
  private viewSwitch = false;
  private sortAlphaSwitch = false;
  private sortTypeSwitch = false;
  private selected = [];
  private inputSearch = '';

  @Watch('viewSwitch')
  private toggleDisplay() {
    this.$store.commit('toggleDisplay');
  }

  @Watch('selected')
  private setFilteredTypes() {
    this.$store.dispatch('setFilteredTypes', { selected: this.selected });
  }

  @Watch('inputSearch')
  private searchRestaurants() {
    const matchingRestaurants = this.$store.state.originalRestaurants.filter((item: any) => {
      return item.name.toLowerCase().includes(this.inputSearch.toLowerCase());
    });
    this.$store.commit('setRestaurants', matchingRestaurants);
  }

  private sortRestaurants(sort: string) {
    const sortedRestaurants = this.$store.state.restaurants.sort(sort === 'alpha' ? this.alphaSorter : this.typeSorter);
    this.$store.commit('setRestaurants', sortedRestaurants);
  }

  private alphaSorter(a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  private typeSorter(a: any, b: any) {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  }
}
</script>