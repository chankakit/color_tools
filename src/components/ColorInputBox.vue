<template>
  <div class="input-color">
    <div class="title-area">
      <p class="cn-title">{{ title.cn }}</p>
      <p class="en-title">{{ title.en }}</p>
    </div>
    <div class="color-input-box">
      <!-- <div class="color-block"></div> -->
      <input type="color" class="color-block"  v-model="hexColor">
      <div class="input-wrapper">
        <input type="text" placeholder="#" value="#" v-model="hexColor" maxlength="7"> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorInputBox',
  data () {
    return {
      hexColor: this.initColor
    }
  },
  props: {
    title: Object,
    initColor: String
  },
  watch: {
    hexColor: function() {
      if(this.hexColor === '') {
        this.hexColor = '#';
      }
      if(this.hexColor.indexOf('#') !== 0) {
        this.hexColor = '#' + this.hexColor;
      }
      if(/^#([0-9A-F]{3}){1,2}$/i.test( this.hexColor )) {
        console.log(this.hexColor);
        this.colorToParent()
      }
    }
  },
  methods:{
    colorToParent() {
      this.$emit("colorChanged", {type: this.title.en, colorString: this.hexColor});
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input[type="color"] {
	-webkit-appearance: none;
  border: none;
	width: 32px;
	height: 32px;
  border-radius: 7px;
}
input[type="color"]::-webkit-color-swatch-wrapper {
	border: none;
  padding: 0;
  border-radius: 7px;
}
input[type="color"]::-webkit-color-swatch {
	border: none;
  border-radius: 7px;
}
.input-color {
  width: 100%;
  .title-area {
    .cn-title {
      font-size: 14px;
      font-weight: 600;
    }
    .en-title {
      font-size: 12px;
      opacity: .5;
    }
  }
  .color-input-box {
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    margin-top: 8px;
    margin-bottom: 16px;
    border-radius: 12px;
    background: rgba(255,255,255,.1);
    .color-block {
      width: 32px;
      height: 32px;
      margin-right: 16px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,.5);
      background-clip: padding-box;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
    }
    .color-block:active {
      transform: scale(0.85);
    }
    .input-wrapper {
      flex-grow: 1;
      padding-right: 8px;
      input {
        position: relative;
        z-index: 1;
        font-family: inherit;
        font-size: 24px;
        font-weight: 500;
        line-height: 48px;
        color: white;
        padding: 0;
        width: 100%;
        display: block;
        border: none;
        background: 0 0;
        outline: 0;      
        text-transform: uppercase;   
      }
    }
  }
}
</style>
