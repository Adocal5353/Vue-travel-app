<template>
  <div>
    <h1>Hello there! {{user}}</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            user: window.user
        }
    },
    methods:{
        logout(){
            window.user = null;
            this.$router.push({name:'login'});
        }
    }
}
</script>

<style>

</style>