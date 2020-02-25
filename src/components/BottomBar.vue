<template>
  <div class="bottom-bar">
    <div class="nav">
      <div class="nav-item">
        <img src="../assets/ic_cr.svg">
      </div>
      <div class="nav-item">
        <img src="../assets/ic_cw.svg">
      </div>
    </div>
    <div class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  props: {
    title: String
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
  height: 48px;
  padding: 8px 0 4px 0;
  background: black;
  bottom: 0;
  .nav {
    display: flex;
    width: 100%;
    .nav-item {
      flex-grow: 1;
      text-align: center;
    }
  }
  .indicator {
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 3px;
  }
}
</style>