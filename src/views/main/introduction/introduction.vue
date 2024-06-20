<template>
  <div class="introduction">
    <h1>工作室简介</h1>
    <div class="text">
      <p>
        经纬工作室创建于2004年，是计算机学院创立最早的工作室之一。本工作室专注于网站建设的研究与学习，对内主要负责北华大学各学院和部门网站的开发、更新与维护工作。至今为止技术方向开设有网站前端设计、后端开发和微信小程序开发三个方向。工作室成员也可以根据自身情况选择适合自己的学习方向，制定属于自己的学习计划。
      </p>
      <p>
        工作室现可容纳成员32人，工作室内学长热情细心耐心地指导新成员，不畏规辛一起团结共进。历届经纬工作室成员曾参与并获得小程序设计竞赛、互联网+大赛等奖项。另外本工作室中已进入各方向就业的学长会即时回馈业界内最新的助态信息，以保证工作室的学习和训练内容能够满足市场需求，使学生最大化的利用在校的学习时间,通过自己在校学习的成果进行有方向性的实践训练，以获得就业所需技能。
      </p>
      <p>
        工作室成立至今，经纬工作室的发展得到了校领导和老师的广泛认可，完成了北华大学计算机科学技术学院、文学院、法学院、北华大学纪检委、吉林市朝鲜族群众艺术馆等网站的开发及维护工作，在基地领导及工作室负责老师的带领下，一届又一届的“经纬人”本着顽强拼搏、努力创新的“经纬精神”走向祖国大江南北的各个工作岗位发光发热。
      </p>
    </div>
    <div class="image">
      <ul class="photo">
        <li v-for="(photo, index) in entireintroduce" :key="index">
          <a href="#" @click.prevent="handleClick(photo)" :title="photo.title">
            <img :src="photo.img" :alt="photo.title" />
          </a>
        </li>
      </ul>
    </div>
    <el-drawer v-model="drawer" title="详细介绍" :with-header="false" show-close>
      <h3 style="margin-bottom: 20px">{{ title }}</h3>
      <span style="font-family: '楷体'; font-size: 18px; line-height: 30px; text-indent: 2em">{{
        content
      }}</span>
      <img :src="currentImage" alt="当前图片" style="max-width: 100%; margin-top: 10px" />
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import useIntroduceStore from '@/store/main/introduce/introduce'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

// 初始化状态
const drawer = ref(false)
const title = ref('')
const content = ref('')
const currentImage = ref('')

// 获取数据
const useStore = useIntroduceStore()
useStore.fetchIntroduceAction()

const { entireintroduce } = storeToRefs(useStore)

// 点击处理逻辑
const handleClick = (photo: { title: string; img: string; content: string }) => {
  title.value = photo.title
  content.value = photo.content
  currentImage.value = photo.img
  drawer.value = true
}
</script>

<style lang="less" scoped>
.introduction {
  height: 100%;
  h1 {
    text-align: center;
    font-family: '楷体';
  }
  .text {
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid #ccc;
    background-color: #ffffff; /* 整体页面背景色 */
    border-radius: 10px;
    width: 89%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p {
      margin-left: 30px;
      font-size: 20px;
      font-family: '楷体';
      line-height: 30px;
      text-indent: 2em;
      margin-bottom: 20px;
      background: #efa549;
      background: #2cebc7;
      background: #00ffee;
      background: #5a5454;
      background: -moz-linear-gradient(to right, #5a5454 0%, #333333 100%);
      background: -webkit-linear-gradient(to right, #5a5454 0%, #333333 100%);
      background: linear-gradient(to right, #5a5454 0%, #333333 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .image {
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid #ccc;
    background-color: #ffffff; /* 整体页面背景色 */
    border-radius: 10px;
    width: 89%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: ce;
    ul,
    li {
      list-style: none;
    }
    ul {
      width: 100%;
      margin: 0 0 18px 10px;
    }
    /*然后可以设置图片宽度，在没设置之前图片是占满了全屏*/
    ul img {
      display: block; /*转为块元素*/
      width: 230px;
      margin-bottom: 12px;
    }
    /*再接着给图片设置边框  注意我们这里是用a标签包裹了img图片  所以我们如果要对图片进行留白边操作的话就设置a标签*/
    ul a {
      background-color: #ffffff;
      display: inline; /*转为行元素*/
      float: left; /*左浮动*/
      width: auto;
      margin: 0 0 27px 90px;
      padding: 10px 10px 15px; /*上内边距是 10px; 右、左内边距是10px;下内边距是 15px*/
      text-decoration: none;
      font-size: 17px;
      color: #333333;
      transition: all 0.1s;
      /*这里设置的box-shadow四个值意思是：水平位移0;垂直位移3px;模糊半径6px;阴影颜色rgba(0,0,0,0.25)*/
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
      -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
      -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
    }
    ul li a:after {
      content: attr(title);
    }
    ul li:nth-child(even) a {
      -webkit-transform: rotate(2deg);
      -moz-transform: rotate(3deg);
      -ms-transform: rotate(4deg);
      transform: rotate(5deg);
    }
    ul li:nth-child(5n) a {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      transform: rotate(10deg);
      position: relative;
      right: 5px;
    }
    ul li:nth-child(8n) a {
      position: relative;
      top: 8px;
      right: 5px;
    }
    ul li:nth-child(11n) a {
      position: relative;
      top: 3px;
      right: -5px;
    }
    ul li a:hover {
      transform: scale(1.25);
      -webkit-transform: scale(1.25);
      -moz-transform: scale(1.25);
      -ms-transform: scale(1.25);
      -o-transform: scale(1.25);
      /*为了使放大效果更佳美观  所以我们也可以将鼠标悬停时的阴影（透明度这一块）加点改变*/
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
      -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 5);
      -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 5);
      -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 5);
      -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 5);
    }
  }
}
</style>
