<template>
  <div class="hello" id="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'introduce1', params: { name: 'Tuffy'} }">hey!</router-link>
    <intro :parentMsg="msg" @waitName="getName"></intro>
    <p>{{ username }}</p>
  </div>
</template>

<script>
import intro from '@/components/Intro2'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Nice to meet you',
      username: ''
    }
  },
  components: {
    intro
  },
  methods: {
    getName (username) {
      this.username = username
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
