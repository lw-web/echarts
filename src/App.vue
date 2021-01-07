<template>
  <div id="app">
    <div><Test /></div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
  </div>
</template>

<script>
import Test from './components/test'
export default {
  name: 'App',
  components: {
    Test
  }
}
</script>

<style lang="scss" scoped>
#app {
  padding: 20px;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  box-sizing: border-box;
  div {
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
