<template>
  <v-layout v-if="$store.state.currentDisplay" wrap class="cardContainer" justify-center pa-3>
    <v-flex
      v-if="$store.state.restaurants.length"
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
          :class="restaurant.website ? 'restImage' : ''"
          @click="navigateAway(restaurant.website)"
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
              <span>Contact: </span>         	
              <a :href="'tel:' + restaurant.phone">{{ restaurant.phone }}</a>
            </v-flex>
            <v-flex xs12>
              <a v-if="restaurant.website" :href="restaurant.website" target="_blank"> Go to Website</a>
              <span v-else>No website.</span>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex text-center v-else>
      <h4>No matches found.</h4>
    </v-flex>
  </v-layout>
  <v-layout v-else wrap class="cardContainer" justify-center pa-3>
    <v-simple-table class="simpleTable" v-if="$store.state.restaurants.length">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="restaurant in $store.state.restaurants"
          :key="restaurant.id"
          @click="navigateAway(restaurant.website)"
          class="tableEntry"
        >
          <td>{{ restaurant.name }}</td>
          <td>
            <a :href="'tel:' + restaurant.phone">{{ restaurant.phone }}</a>
          </td>
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
    <v-flex text-center v-else>
      <h4>No matches found.</h4>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RestaurantDisplay extends Vue {
  private selected = [];

  private getColor(type?: string) {
    const filteredRest = this.$store.state.originalTypes.filter((item: any) => item.type === type);
    return filteredRest[0].color;
  }

  private navigateAway(website: string) {
    if (website) {
      window.location.href = website;
    }
  }
}
</script>

<style lang="stylus" scoped>
.cardContainer 
  background: grey;
  height: auto;
  border-radius: 4px;

  .simpleTable
    width: 100%;

  .restImage:hover, .tableEntry:hover
    cursor: pointer;
  
</style>

