<style scoped>
  a.active {
    font-weight: bolder;
    color: blue;
  }
</style>


<template>
  <h1>Deep estate</h1>
  <p>Check how your URL changes each time a topic is selected</p>
  <ul>
    <li><strong>Topics:</strong></li>
    <li><a v-bind:class="{ active: topic === 1}" v-link="{query: { topic: 1 } }">Lorem ipsum</a></li>
    <li><a v-bind:class="{ active: topic === 2}" v-link="{query: { topic: 2 } }">Dolor sit amet</a></li>
  </ul>
  <template v-if="topic === 1">
    <h4>Lorem ipsum</h4>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat
  </template>
  <template v-if="topic === 2">
    <h4>Dolor sit amet</h4>
    Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </template>
</template>

<script>
export default {
  data () {
    return {
      topic: 0
    }
  },
  route: {
    canReuse: false,
    activate () {
      if (this.$route.query.topic) {
        this.topic = Number(this.$route.query.topic)
      }
    }
  }
}
</script>
