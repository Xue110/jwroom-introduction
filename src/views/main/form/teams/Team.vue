<template>
  <div class="team">
    <div class="top">
      <h2>TEAM MEMBERS</h2>
      <h1>团队成员</h1>
    </div>
    <div class="state">
      <el-select
        v-model="value1"
        multiple
        placeholder="方向"
        style="width: 200px"
        size="large"
        @change="handleChange"
      >
        <el-option
          v-for="item in directions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select
        v-model="value2"
        multiple
        placeholder="默认全部，可选择加入时间"
        style="width: 240px"
        size="large"
        @change="handleChange"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="danger" @click="reset" style="margin-left: 5px">重置</el-button>
    </div>
    <div class="content">
      <div class="item" v-for="member in entireMembers" :key="member.id">
        <div class="img">
          <img :src="member.avatar" alt="" />
        </div>
        <div class="name">
          <h2>{{ member.name }}</h2>
          <h1>职位：{{ member.job }}</h1>
        </div>
        <div class="time">
          <h2>加入时间：{{ member.time }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useTeamMembersStore from '@/store/main/team/team'
import { storeToRefs } from 'pinia'

const value1 = ref([])
const value2 = ref([])
const options = [
  {
    value: '2020',
    label: '2020'
  },
  {
    value: '2021',
    label: '2021'
  },
  {
    value: '2022',
    label: '2022'
  },
  {
    value: '2023',
    label: '2023'
  },
  {
    value: '2024',
    label: '2024'
  }
]

const directions = [
  {
    value: '前端',
    label: '前端'
  },
  {
    value: '后端',
    label: '后端'
  },
  {
    value: 'UI',
    label: 'UI'
  }
]

const useStore = useTeamMembersStore()
useStore.fetchMembersDataAction()
const { entireMembers } = storeToRefs(useStore)

const fetchFilteredMembers = async () => {
  try {
    const queryInfo = {
      value1: value1.value,
      value2: value2.value
    }
    console.log(queryInfo)
    useStore.fetchLimitMembersAction(queryInfo)
  } catch (error) {
    console.error('Error fetching members:', error)
  }
}

// 监听选择框的变化并发送请求
const handleChange = () => {
  fetchFilteredMembers()
}

const reset = () => {
  value1.value = []
  value2.value = []
  useStore.fetchMembersDataAction()
}
</script>

<style lang="less" scoped>
.team {
  width: 100%;
  .top {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      font-size: 24px;
      font-weight: 400;
      color: #333333;
      line-height: 18px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
        Geneva, Verdana, sans-serif;
    }
    h1 {
      font-size: 30px;
      font-family: '楷体';
      font-weight: 800;
      line-height: 12px;
    }
  }
  .state {
    position: absolute;
    right: 3%;
    top: 150px;
    width: 800px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .item {
      width: 300px;
      height: 300px;
      background: #ffffff;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 10px;
      margin-left: 30px;
      .img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 50px;
        h2 {
          font-family: '楷体';
          font-size: 24px;
          font-weight: 600;
          color: #333333;
          line-height: 33px;
        }
        h1 {
          font-size: 16px;
          font-weight: 400;
          color: #999999;
          line-height: 22px;
        }
      }
      .time {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h2 {
          font-size: 16px;
          font-weight: 400;
          color: #999999;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
