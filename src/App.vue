<template>
  <div id="app">

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted(){
      this.initUrl();
  },
  methods:{
      initUrl(){
          this.$reqSignByUrl("http://m.ciyigou.com",this.sayHello);
      },
      sayHello(url){
          console.log("Hello",url);
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
