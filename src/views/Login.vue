<template>
  <div class="login">
    <form @submit.prevent="Login" class="form">
        <h1>Login</h1>
        <label for="username">Username</label>
        <input v-model="username" type="text" name="username">
        <label for="password">Password</label>
        <input v-model="password" type="password" name="password">
        <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            password:'',
            username:''
        }
    },
    methods:{
        Login(){
            const redirect = this.$route.query.redirect || '/protected'
            window.user = this.username
            this.$router.push(redirect)
        }
    }
}
</script>

<style>

</style>