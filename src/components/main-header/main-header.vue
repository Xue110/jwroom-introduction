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
      <el-menu-item index="teams">成员分布</el-menu-item>
      <el-menu-item index="teacher">指导老师</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="homework">作品展示</el-menu-item>
    <el-menu-item @click="openAddMessageDialog">留言</el-menu-item>
    <el-menu-item index="join">加入我们</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDialogStore } from '@/store/dialog'
import { useRouter } from 'vue-router'

const dialogStore = useDialogStore()
const router = useRouter()

const openAddMessageDialog = () => {
  // 如果当前路由不是 '/home'，则进行路由导航
  if (router.currentRoute.value.path !== '/home') {
    router.push('/home') // 使用 router.push 进行路由导航
    // 等待路由导航完成后再打开对话框
    router.isReady().then(() => {
      dialogStore.openAddMessageDialog()
      console.log('路由导航完成')
    })
  }
  dialogStore.openAddMessageDialog()
}
const activeIndex = ref('home')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
