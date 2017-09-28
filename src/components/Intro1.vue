<template>
  <div class="hello">
    <h1>{{ msg }}{{ $route.params.name }}</h1>
    <router-link to="/">Yo!</router-link>
    <router-link to="/introduce1/Tuffy/about">about</router-link>
    <router-link to="/introduce1/Tuffy/contact">contact</router-link>
    <router-view name="v1"></router-view>
    <router-view name="v2"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'I am '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
