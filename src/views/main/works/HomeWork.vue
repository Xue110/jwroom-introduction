<template>
  <div class="homework">
    <div class="top">
      <h2>EXHIBITION OF WORKS</h2>
      <h1>作品展示</h1>
    </div>
    <div class="tab">
      <button class="all btn" :class="{ active: currentTab === 'all' }" @click="changeTab('all')">
        All
      </button>
      <button
        class="website btn"
        :class="{ active: currentTab === 'website' }"
        @click="changeTab('website')"
      >
        官网
      </button>
      <button
        class="game btn"
        :class="{ active: currentTab === 'game' }"
        @click="changeTab('game')"
      >
        游戏
      </button>
      <button
        class="other btn"
        :class="{ active: currentTab === 'other' }"
        @click="changeTab('other')"
      >
        其他
      </button>
      <div class="search">
        <el-input v-model="input" style="width: 240px" placeholder="搜索" />
        <el-button @click="search" type="primary">搜索</el-button>
      </div>
    </div>
    <div class="content">
      <div class="item" v-for="(item, index) in filteredWorks" :key="index">
        <a :href="item.link" target="_blank"><img :src="item.src" alt="" /></a>
        <div class="info">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useWorksStore from '@/store/main/works/works'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

const currentTab = ref('all') // 默认显示All标签
const input = ref('')

const works = useWorksStore()
works.fetchWorksAction()
const { entireWorks } = storeToRefs(works)

const changeTab = (tab: string) => {
  currentTab.value = tab
  console.log(tab)
  works.fetchWorksByCategoryAction(tab)
}

const search = () => {
  if (input.value.trim() !== '') {
    works.fetchResearchWorksAction(input.value)
    input.value = ''
  }
}

// 通过 computed 属性根据 currentTab 筛选作品
const filteredWorks = computed(() => {
  if (currentTab.value === 'all') {
    return entireWorks.value
  }
  return entireWorks.value.filter((work) => work.category === currentTab.value)
})
</script>

<style lang="less" scoped>
.homework {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      font-size: 20px;
      font-weight: 400;
      color: #333333;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
        Geneva, Verdana, sans-serif;
      line-height: 18px;
    }
    h1 {
      font-size: 36px;
      font-family: '楷体';
      font-weight: 800;
      color: #333333;
      line-height: 14px;
    }
  }
  .tab {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      width: 100px;
      height: 40px;
      background: #f2f2f2;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 400;
      color: #333333;
      line-height: 18px;
      margin: 0 10px;
      cursor: pointer;
    }
    .active {
      background: #333333;
      color: #ffffff;
    }
    .search {
      position: absolute;
      right: 5%;
      width: 300px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 50px;
      .el-input {
        width: 240px;
        height: 40px;
      }
      .el-button {
        margin-left: 20px;
        border-radius: 20px;
        width: 80px;
        height: 40px;
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 10px;
    .item {
      width: 300px;
      height: 300px;
      margin-top: 20px;
      margin-left: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 220px;
        height: 220px;
        transition: all 0.3s;
      }
      .info {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3 {
          font-size: 16px;
          font-weight: 400;
          color: #333333;
          line-height: 18px;
        }
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      &:active {
        img {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
