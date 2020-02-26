<template>
  <div class="bottom-bar">
    <div class="nav">
      <div class="nav-item" @click="changeToContrast" :style="{ opacity: page === 'contrast' ? 1 : 0.5}">
        <img src="../assets/ic_cr.svg">
      </div>
      <div class="nav-item" @click="changeToColorwheel" :style="{ opacity: page === 'colorwheel' ? 1 : 0.5}">
        <img src="../assets/ic_cw.svg">
      </div>
    </div>
    <div id="indicator" :style="{width: indicatorWidth+'px',left: indicatorPos+'%'}"></div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  data() {
    return {
      page: 'contrast',
      indicatorWidth: 6,
    }
  },
  methods: {
    changePage() {
      this.$emit("pageChange", this.page);

      let element = document.getElementById("indicator");
      element.classList.remove('indicator-ani');
      void element.offsetWidth;
      element.classList.add('indicator-ani');
    },
    changeToContrast() {
      if(this.page === 'contrast') {
        this.page = 'contrast';
      } else {
        this.page = 'contrast';
        this.changePage();
      }
    },
    changeToColorwheel() {
      if(this.page === 'colorwheel') {
        this.page = 'colorwheel';
      } else {
        this.page = 'colorwheel';
        this.changePage();
      }
    }
  },
  computed: {
    indicatorPos: function() {
      if(this.page === 'contrast') {
        return 25
      } else {
        return 75
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottom-bar {
  position: fixed;
  flex-direction: column;
  display: flex;
  width: 100%;
  
  background: black;
  bottom: 0;
  .nav {
    display: flex;
    width: 100%;
    .nav-item {
      box-sizing: border-box;
      padding-top: 8px;
      height: 48px;
      flex-grow: 1;
      text-align: center;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    .nav-item:hover {
      background: rgba(255,255,255,0.1);
    }
    .nav-item:active {
      background: rgba(255,255,255,0.2);
    }
  }
  #indicator {
    position: absolute;
    bottom: 4px;
    height: 6px;
    margin-left: -3px;
    background: white;
    border-radius: 3px;
    transition: 0.8s all cubic-bezier(.3,.01,.35,1);
  }
  .indicator-ani {
    animation: change-width-1 0.8s;
  }
  @keyframes change-width-1 {
    0%   {width: 6px;}
    50%  {width: 32px;}
    100% {width: 6px;}
  }

}
</style>