<template>
    <a 
    :href="to" 
    v-if="isExternal"
    rel="noopenner"
    target="_blank"
    ><slot/></a>
    <router-link v-else v-bind="$props"><slot/></router-link>
</template>

<script>
    import { RouterLink } from 'vue-router';
export default {
    props:{
        ...RouterLink.props
    },
    computed:{
        isExternal(){
            return typeof this.to ==='string' && this.to.startsWith('http')
        }
    }
}
</script>

<style>

</style>