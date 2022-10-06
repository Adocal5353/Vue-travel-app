<template>
  <div>
    <GoBack />
    <section class="destination">
      <h1>Welcome to {{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" alt="{{destination.name}}" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>

      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: {
              id: destination.id,
              slug: destination.slug,
              experienceSlug: experience.slug,
            },
          }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import ExperienceCard from "../components/ExperienceCard.vue";
import GoBack from "../components/GoBack.vue";
export default {
  props: {
    id: { type: Number, required: true },
  },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
  components: { ExperienceCard, GoBack },
};
</script>

<style></style>
