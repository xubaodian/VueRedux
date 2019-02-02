<template>
  <div id="app">
    <market></market>
  </div>
</template>

<script>
import Market from './components/Market.vue';
export default {
  name: 'App',
  components: {
    Market
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
#app {
  height: 100%;
}
</style>
