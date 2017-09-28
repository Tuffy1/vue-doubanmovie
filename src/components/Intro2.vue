<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <input type="" name="msg" v-model="msg">
    <p>{{ parentMsg }}</p>
    <input type="" name="name" @change="setName" v-model="username">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      username: ''
    }
  },
  methods: {
    setName () {
      this.$emit('waitName', this.username)
    }
  },
  props: ['parentMsg']
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
