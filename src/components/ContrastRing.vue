<template>
  <div class="ring-area" :style="{width: size + 'px', height: size + 'px'}">
    <div class="ring" :style="{width: size + 'px', height: size + 'px', transform: 'rotate('+ offsetAngle +'deg)'}">
      <svg class="ring-top" :height="size" :width="size">
        <circle :cx="size/2" :cy="size/2" :r="radius" 
          :stroke-dasharray="dashArray" :stroke="color" 
          stroke-dashoffset="0" 
          stroke-linecap="round" stroke-width="8" fill="none"/>
      </svg>
      <svg class="ring-bottom" :height="size" :width="size">
        <circle :cx="size/2" :cy="size/2" :r="radius" 
          :stroke-dasharray="dashArray" :stroke="color"
          stroke-dashoffset="0" 
          stroke-linecap="round" stroke-width="8" fill="none"/>
      </svg>
    </div>
    <div class="black-circle">
      <p class="result">{{ value.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContrastRing',
  data () {
    return {
      size: 192,
      radius: 78,
      emptyAngle: 120,
      contrastRange: {
        min: 1,
        max: 21
      }
    }
  },
  computed: {
    c: function() {
      return 2 * this.radius * Math.PI
    },
    offsetAngle: function() {
      return 90 + this.emptyAngle / 2
    },
    dashArray: function() { 
      let totalLength = this.c * (1 - this.emptyAngle/360);
      let resultValue = this.value / this.contrastRange.max * totalLength;
      let outputString = resultValue.toString() + "," + this.c.toString();
      return outputString
    },
    color: function() {
      return this.value > 4.5 ? '#25FFC8' : '#FF2121'
    }
  },
  props: {
    value: Number
  },
  mounted: function() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ring-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 24px;
  border-radius: 50%;
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.05) 100%);

  .ring {
    circle {
      transition: all 0.5s cubic-bezier(.3,.01,.35,1);
    }
    .ring-top {
      position: absolute;
    }
    .ring-bottom {
      filter: blur(6px);
    }
  }
  .black-circle {
    position: absolute;
    width: 120px;
    height: 120px;
    text-align: center;
    line-height: 120px;
    border-radius: 50%;
    background: black;
    .result {
      font-size: 28px;
      font-weight: 700;
    }
  }
}
</style>
