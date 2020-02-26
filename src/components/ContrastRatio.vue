<template>
  <div class="contrast-ratio">
    <div style="font-size: 20px;font-weight: 600;">Contrast Ratio</div>

    <ContrastRing :value="resultValue"/>

    <ColorInputBox v-bind:title="frontTitle" :initColor="initFrontColor" v-on:colorChanged="colorChanged"/>
    <ColorInputBox v-bind:title="backTitle" :initColor="initackColor" v-on:colorChanged="colorChanged"/>

    <div class="test-area" :style="{color: frontColor, background: backColor}">
      <h4 >测试文本</h4>
      <p style="margin-top: 8px; font-size: 14px;">普通字号文本至少 4.5 对比度、大字号文本至少 3 对比度。这是预览测试文本，供参考实际显示效果。</p>
    </div>

  </div>
</template>

<script>
import calculateRatio from './func_js/CalculateContrast'

import ColorInputBox from './ColorInputBox.vue'
import ContrastRing from './ContrastRing.vue'

export default {
  name: 'ContrastRatio',
  data () {
    return {
      initFrontColor: '#ffffff',
      initackColor: '#000000',
      frontTitle: {
        cn: '前景色',
        en: 'Frontground'
      },
      backTitle: {
        cn: '背景色',
        en: 'Background'
      },
      frontColor: '',
      backColor: ''
    }
  },
  computed: {
    resultValue: function() {
      return calculateRatio(this.frontColor, this.backColor)
    }
  },
  components: {
    ColorInputBox,
    ContrastRing
  },
  methods: {
    colorChanged(e) {
      if(e.type === 'Background') {
        this.backColor = e.colorString;
      } else {
        this.frontColor = e.colorString;
      }
      console.log(e);
    }
  },
  props: {
    msg: String
  },
  created: function() {
    this.frontColor = this.initFrontColor;
    this.backColor = this.initackColor;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contrast-ratio {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 24px 0 24px;
  
  .test-area {
    box-sizing: border-box;
    margin-top: 8px;
    padding: 16px 10px; 
    border-radius: 4px;
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
}
</style>
