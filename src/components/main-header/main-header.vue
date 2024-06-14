<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    :router="true"
  >
    <el-menu-item index="home">
      <img style="width: 240px" src="@/assets/img/logo.png" alt="jwroom logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="introduction">简介</el-menu-item>
    <el-sub-menu index="environment">
      <template #title>构成</template>
      <el-menu-item index="environment">环境设施</el-menu-item>
      <el-menu-item index="teams">成员组成</el-menu-item>
      <el-menu-item index="teacher">指导老师</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="homework">作品展示</el-menu-item>
    <el-menu-item>留言</el-menu-item>
    <el-menu-item index="join">加入我们</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
