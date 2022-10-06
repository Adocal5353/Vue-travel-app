<template>
  <div class="home">
    <h1>Bienvenue à l'acceuil</h1>
    <h2>Voici toutes nos destinations</h2>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`images/${destination.image}`" alt="{{destination.name}}" />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style></style>
