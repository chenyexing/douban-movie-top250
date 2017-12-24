<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import DbMovie from './components/DbMovie'
  import VueRouter from 'vue-router'

  export default {
    name: 'app',
    components: {
      DbMovie
    },
    created() {
      if (this.$route.params.id === undefined) {
        this.$router.replace({path: '/page/1'})
      }else{
        this.$router.replace({path: '/page/' + this.$route.params.id})
      }
    }
  }
</script>

<style>

</style>
