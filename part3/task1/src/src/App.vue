<template>
  <div id="app">
    <CardList />
  </div>
</template>

<script>
import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    CardList
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

#app {
  padding: 20px;
}
</style> 