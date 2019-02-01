<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      str: '12341234',
      inputText: '',
      searchList: [
        '1231',
        '测试时'
      ]
    };
  },
  methods: {
  }
};
</script>

<style>
#app {
  background: url("./assets/bk.jpg") no-repeat;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
