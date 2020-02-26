<template>
  <div id="app">
    <TopBar :title="page.cn"/>
    <transition name="fade-left" mode="out-in">
      <ContrastRatio v-if="page.en === page1.en"/>
    </transition>
    <transition name="fade-right" mode="out-in">
      <h1 v-if="page.en === page2.en" style="position: absolute; top: 50%">未做</h1>
    </transition>
    <BottomBar  v-on:pageChange="pageChanged"/>
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
      page1: {
        en: 'contrast',
        cn: '对比度计算器'
      },
      page2: {
        en: 'colorwheel',
        cn: '色阶生成器'
      },
      page: null
    }
  },
  components: {
    ContrastRatio,
    TopBar,
    BottomBar
  },
  mounted: function() {
    this.page = this.page1;
    console.log(this.page)
  },
  methods: {
    pageChanged(e) {
      if(e === this.page1.en) {
        this.page = this.page1;
      } else {
        this.page = this.page2;
      }
      console.log(this.page);
    }
  }
}
</script>

<style lang="scss">
.fade-left-enter-active, .fade-left-leave-active {
  transition: all .6s ease-in-out;
}
.fade-left-enter, .fade-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-50%);
}
.fade-right-enter-active, .fade-right-leave-active {
  transition: all .6s ease-in-out;
}
.fade-right-enter, .fade-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(50%);
}
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
