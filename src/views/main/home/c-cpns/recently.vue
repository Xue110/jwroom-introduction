<template>
  <div class="recently">
    <div class="left">
      <h2>RECENTLY</h2>
      <h1>工作室近况</h1>
      <div class="box"></div>
      <p>
        我们的工作室充满了创意和活力！在这里，我们不断探索设计的边界，挖掘无限的可能性，经纬工作室荣获多个奖项，并多次参与活动，同时为了提高团队凝聚力，进行了各种团建活动，例如轰趴馆、江边烧烤、滑雪等，在未来经纬工作室将继续秉承创新精神，不断进取，与时俱进。
      </p>
      <div class="activity-container">
        <div class="activity-boxes">
          <div
            v-for="(activity, index) in activities"
            :key="index"
            class="activity-box"
            @mouseover="setCurrentImage(activity.image)"
            @mouseenter="handleMouseEnter(index)"
            @mouseleave="handleMouseLeave"
            :class="{ active: hoveredBoxIndex === index }"
          >
            {{ activity.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <transition name="fade" mode="out-in">
        <img :key="currentImage" :src="currentImage" class="activity-image" alt="Activity Image" />
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// Importing images using import statements
import bg4Img from '@/assets/img/bg4.png'
import logo2Img from '@/assets/img/LOGO2.png'
import logoImg from '@/assets/img/logo.png'

interface Activity {
  name: string
  image: string
}

const activities: Activity[] = [
  { name: '活动一', image: bg4Img },
  { name: '活动二', image: logo2Img },
  { name: '活动三', image: bg4Img },
  { name: '活动四', image: logoImg }
]

const currentImage = ref<string>(activities[0].image)
let hoveredBoxIndex = ref<number | null>(null)

function setCurrentImage(image: string) {
  currentImage.value = image
}

function handleMouseEnter(index: number) {
  hoveredBoxIndex.value = index
}

function handleMouseLeave() {
  // 不再需要任何操作，因为我们希望悬浮效果保持
}
</script>

<style lang="less" scoped>
.recently {
  margin-left: 20px;
  width: 100%;
  height: 770px;
  margin-top: -80px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 100%);
  display: flex;
  justify-content: space-between;
  .left {
    width: 50%;
    height: 100%;
    padding-top: 20px;
    padding-left: 50px;
    h2 {
      font-size: 20px;
      font-family: initial;
    }
    .box {
      width: 130px;
      height: 4px;
      background-color: rgb(11, 11, 137);
    }
    h1 {
      font-size: 30px;
      font-family: initial;
    }
    p {
      text-align: left;
      width: 400px;
      font-weight: 300;
      font-size: 14px;
      line-height: 2;
      margin-top: 40px;
      color: rgb(146, 146, 146);
    }
    .activity-container {
      display: flex;
      align-items: center;
    }

    .activity-boxes {
      display: flex;
      flex-direction: column;
    }

    .activity-box {
      width: 400px;
      height: 80px;
      margin: 10px;
      background-color: #f0f0f0;
      clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition:
        background-color 0.3s,
        padding-left 0.3s;
      position: relative; /* 添加相对定位 */
      padding-left: 40px; /* 初始的左侧填充 */
      overflow: hidden; /* 确保溢出的内容被隐藏 */
    }

    .activity-box:hover,
    .activity-box.active {
      background-color: #dcdcdc;
      padding-left: 60px;
    }

    .activity-box::before {
      content: '';
      position: absolute;
      left: 1px;
      top: 50%;
      transform: translateY(-50%);
      height: 80%;
      background-color: purple;
      transition: all 0.2s;
      width: 0;
    }

    .activity-box:hover::before,
    .activity-box.active::before {
      width: 3px;
    }
  }
  .right {
    position: relative; /* 确保容器相对定位 */
    width: 80%;
    height: 90%;
    padding-top: 50px;
    padding-right: 60px;
    .activity-image {
      position: absolute;
      top: 150px;
      left: 10px;
      width: 950px;
      height: 550px;
      object-fit: cover;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
