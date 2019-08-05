<template>
  <v-layout wrap class="cardContainer" justify-center pa-3>
    <v-flex
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      xs12
      sm5
      md3
      lg2
      ma-2
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
        <!-- <v-card-actions v-if="actions">
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn text>Click</v-btn>
          <v-btn outlined>Click</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RestaurantDisplay extends Vue {
  @Prop({ type: Array, required: true })
  restaurants!: any
  @Prop({ type: Array, required: true })
  restaurantTypes!: any

  getColor(type?: string) {
    console.log(type);
    const filteredRest = this.restaurantTypes.filter((item: any) => item.type === type);
    return filteredRest[0].color;
  }
};
</script>

<style lang="stylus" scoped>
.cardContainer {
  background: grey;
  height: auto;
  border-radius: 4px;
}
</style>

