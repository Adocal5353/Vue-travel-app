<template>
    <the-navigation :key="$route.path"/>

  <div class="container">
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component"  :key="$route.path" ></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
    components: { TheNavigation }
};
</script>
<style>
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
</style>
