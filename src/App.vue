<template>
  <div id="app">
    <TopBar title="对比度计算器"/>
    <ContrastRatio />
    <BottomBar />
  </div>
</template>

<script>
import ContrastRatio from './components/ContrastRatio.vue'
import TopBar from './components/TopBar.vue'
import BottomBar from './components/BottomBar.vue'

export default {
  name: 'App',
  data () {
    return {
      filterResults: null,
      showSearch: false
    }
  },
  components: {
    ContrastRatio,
    TopBar,
    BottomBar
  }
}
</script>

<style lang="scss">
*  {
  margin: 0;
  padding: 0;
}
body {
  background: #121212;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
