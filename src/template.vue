<style scoped>
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  ul li {
    display: inline;
  }

  a.v-link-active {
    font-weight: bolder;
    color: red;
  }
</style>

<template>
  <ul>
    <li><a v-link="'/home'">Main</a></li>
    <li><a v-link="'/deep'">Deep Links</a></li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to our home page.'
    }
  }
}
</script>
