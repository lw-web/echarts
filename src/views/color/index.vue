<template>
  <div class="color">
    <el-row>
      <el-col :span="18">
        <Test />
      </el-col>
      <el-col :span="6">
        <Color />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Test from './test'
import Color from './color'
export default {
  name: 'ColorComp',
  components: {
    Test,
    Color
  }
}
</script>

<style>
.color {
  width: 100%;
}
</style>
