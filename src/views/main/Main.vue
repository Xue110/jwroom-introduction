<template>
  <div class="main">
    <el-container class="main-content">
      <el-header>
        <main-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer><main-footer /></el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/main-header/main-header.vue'
import MainFooter from '@/components/main-footer/main-footer.vue'
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;
  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
