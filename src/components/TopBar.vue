<template>
  <div class="top-bar">
    <div class="logo">
      <div id="sed">SED</div>
      <div id="ct">COLOR TOOLS</div>
    </div>
    <div class="page-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-bar {
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 64px;
  background: black;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    #sed {
      line-height: 14px;
      font-size: 14px;
      font-weight: 900;
    }
    #ct {
      margin-top: 2px;
      line-height: 14px;
      font-size: 14px;
    }
  }
  .page-title {
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
