<template>
    <Nav/>
    <router-view></router-view>

</template>

<script>
    import Nav from './components/Nav.vue'

    export default {
        name: 'App',
        components: {
            Nav,
        }
    }
</script>

<style>
   
</style>