<template>
  <v-layout v-if="$store.state.currentDisplay" wrap class="cardContainer" justify-center pa-3>
    <v-flex
      v-for="restaurant in $store.state.restaurants"
      :key="restaurant.id"
      xs12
      sm5
      md3
      ma-3
    >
      <v-card
        class="mx-auto"
      >
        <v-img
          class="white--text"
          height="150px"
          :src="restaurant.image"
        >
          <v-chip
            class="align-end fill-height  ma-2"
            :color="getColor(restaurant.type)"
          >
            <v-icon left>restaurant</v-icon>
            {{ restaurant.type }}
          </v-chip>
        </v-img>
        <v-card-title class="title" tag="h2">{{ restaurant.name }}</v-card-title>
        <hr>
        <v-card-text>
          <v-layout column>
            <v-flex xs12>
              <span>Contact: </span> {{ restaurant.phone }}
            </v-flex>
            <v-flex xs12>
              <a v-if="restaurant.website" :href="restaurant.website" target="_blank"> Go to Website</a>
              <span v-else>No website.</span>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-else wrap class="cardContainer" justify-center pa-3>
    <v-simple-table class="simpleTable">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="restaurant in $store.state.restaurants" :key="restaurant.id">
          <td>{{ restaurant.name }}</td>
          <td>{{ restaurant.phone }}</td>
          <td>
            <v-chip
              class="align-end fill-height  ma-2"
              :color="getColor(restaurant.type)"
            >
              <v-icon left>restaurant</v-icon>
              {{ restaurant.type }}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RestaurantDisplay extends Vue {
  selected = [];

  getColor(type?: string) {
    const filteredRest = this.$store.state.originalTypes.filter((item: any) => item.type === type);
    return filteredRest[0].color;
  }
};
</script>

<style lang="stylus" scoped>
.cardContainer 
  background: grey;
  height: auto;
  border-radius: 4px;

  .simpleTable
    width: 100%;
</style>

