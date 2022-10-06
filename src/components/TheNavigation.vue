<template>
  <div id="nav">
    <AppLink to="/" id="logo">ADO-TRAVEL</AppLink>
    <AppLink to="/Apropos">A propos</AppLink>
    <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
      {{destination.name}}
      </AppLink>
      <AppLink :to="{name:'Protected'}">Dashboard</AppLink>
      <AppLink :to="{name:'invoices'}">Invoices</AppLink>
      <AppLink :to="{name:'login'}">Login</AppLink>
      <AppLink to="http://www.lankom.net">our Real WebSite</AppLink>
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
