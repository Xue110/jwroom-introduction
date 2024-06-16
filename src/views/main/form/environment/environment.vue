<template>
  <div class="environment">
    <div class="left">
      <p class="text">环境设施</p>
      <el-carousel
        height="500px"
        direction="vertical"
        :autoplay="true"
        @change="handleCarouselChange"
      >
        <el-carousel-item v-for="(item, index) in image" :key="index">
          <img :src="item.url" alt="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right">
      <h3>{{ selectedContent }}</h3>
    </div>
    <div class="box">
      <h3>
        工作室拥有先进的设备设施，如高清显示屏、便捷的制热饮水机、舒适的空调环境、专属的独立工位、震撼的巨型投影仪和高效的打印机等，为工作和学习提供了优越的条件和体验。
      </h3>
    </div>
    <div class="botbox">
      <h3>
        当我们在工作室里，有着资深的前辈和学长学姐们，他们亲自指导我们，传授他们的经验和知识。
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import image1 from '@/assets/img/equipImg/01.jpg'
import image2 from '@/assets/img/equipImg/02.jpg'
import image3 from '@/assets/img/equipImg/03.jpg'
import image4 from '@/assets/img/equipImg/04.jpg'
import image5 from '@/assets/img/equipImg/05.jpg'
import image6 from '@/assets/img/equipImg/06.jpg'

const selectedContent = ref('') // 设置初始值为空字符串

const image = [
  {
    url: image1
  },
  {
    url: image2
  },
  {
    url: image3
  },
  {
    url: image4
  },
  {
    url: image5
  },
  {
    url: image6
  }
]

const handleCarouselChange = (index: number) => {
  switch (index) {
    case 0:
      selectedContent.value =
        '原生木材既视感，碳环保理念设计，简约又不失精致的垃圾桶代表经纬工作室的整洁。'
      break
    case 1:
      selectedContent.value =
        '新时代科技产物，素白的外表显示它的温和，拥有它你可以舒适的度过每个严寒酷暑。'
      break
    case 2:
      selectedContent.value =
        '不用多说，看起给人一种高端大气的感觉，它里面装着的A4是你未来预定的RS8。'
      break
    case 3:
      selectedContent.value = '雄伟的外表，慈母的内心，它无时无刻给予我们天池圣水。'
      break
    case 4:
      selectedContent.value =
        '它不仅可以展示你智慧结晶的作品，还能在基地活动里面成为我们娱乐的载体。'
      break
    case 5:
      selectedContent.value = '高清的像素，8K的分辨率使它极具视觉冲击感，黑金的外观彰显贵族气息。'
      break
    default:
      selectedContent.value = ''
      break
  }
}

onMounted(() => {
  // 初始化默认显示第一个内容
  selectedContent.value =
    '原生木材既视感，碳环保理念设计，简约又不失精致的垃圾桶代表经纬工作室的整洁。'
})
</script>

<style lang="less" scoped>
.environment {
  display: flex;
  justify-content: space-between;
  .left {
    width: 50%;
    height: 100%;
    margin-top: 130px;
    margin-left: 50px;
    .text {
      position: absolute;
      width: 80%;
      text-align: center;
      height: 30px;
      top: 10%;
      margin-left: 8%;
      font-size: 30px;
      font-family: '楷体';
    }
  }
  .right {
    position: relative;
    right: 80px;
    text-align: center;
    width: 40%;
    height: 100%;
    margin-top: 300px;
    background-color: white;
    padding: 50px;
    box-shadow: 0 0 10px #ccc;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    font-family: '楷体';
    font-size: 20px;
    h3 {
      background: linear-gradient(to right, #ff7e5f, #feb47b); /* 字体渐变色 */
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent; /* 文字设置为透明 */
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .box {
    position: absolute;
    background-color: white;
    padding: 30px;
    box-shadow: 0 0 10px #ccc;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    width: 30%;
    right: 5%;
    top: 10%;
    font-family: '楷体';
    font-size: 18px;
    color: #666;
    transform: rotate(10deg);
  }
  .botbox {
    position: absolute;
    background-color: white;
    padding: 50px;
    box-shadow: 0 0 10px #ccc;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    width: 30%;
    right: 2%;
    bottom: 14%;
    font-family: '楷体';
    font-size: 20px;
    color: #666;
    transform: rotate(-10deg);
  }
}
</style>
