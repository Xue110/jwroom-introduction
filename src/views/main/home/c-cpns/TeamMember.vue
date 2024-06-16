<template>
  <div class="team-member">
    <div class="top">
      <div class="text">
        <h2>TEAM MEMBERS</h2>
        <h1>团队成员</h1>
      </div>
      <div class="box"></div>
      <div class="center">
        <p>指导教师：李红果，现有成员20+名,具体方向分为前端，后端，UI等方向...</p>
      </div>
      <div class="end">
        <p @click="pushrouter()">查看更多</p>
      </div>
      <div class="button">
        <el-button
          plain
          type="primary"
          @click="prev"
          class="nav-button prev"
          :icon="ArrowLeft"
        ></el-button>
        <el-button
          plain
          type="primary"
          @click="next"
          class="nav-button next"
          :icon="ArrowRight"
        ></el-button>
      </div>
    </div>
    <div class="carousel-container">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * (imageWidth + gap)}px)` }"
      >
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="`Image ${index + 1}`" />
          <div class="introduce">
            <h2>
              <el-icon><User /></el-icon> {{ image.name }}
            </h2>
            <div class="boxtow">
              <p>
                <el-icon><Clock /></el-icon> 加入时间：{{ image.time }}
              </p>
              <p style="margin-top: 7px">
                <el-icon><MessageBox /></el-icon> 职位：{{ image.work }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight, MessageBox, User } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Image {
  src: string
  name: string
  time: string
  work: string
}

const router = useRouter()

const pushrouter = () => {
  router.push('/teams')
}

const images = ref<Image[]>([
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  },
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  },
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  },
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  },
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  },
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  },
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  },
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  },
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  },
  {
    src: 'https://photo.16pic.com/00/86/66/16pic_8666236_b.jpg',
    name: '测试员1',
    time: '测试时间1',
    work: '测试岗位1'
  }
])

const imageWidth = 200 // 图片宽度
const gap = 50 // 图片之间的间隙
const currentIndex = ref(0) // 当前显示的第一个图片的索引

setInterval(() => {
  next()
}, 2000)

const next = () => {
  if (currentIndex.value < images.value.length - 5) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // 如果达到最后一组图片，则回到开头
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = Math.max(images.value.length - 5, 0) // 如果到达最前面，则跳到最后一组图片
  }
}
</script>

<style lang="less" scoped>
.team-member {
  width: 100%;
  height: 550px;
  background-color: rgb(242, 243, 249);
  padding: 20px 0;
  .top {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 18px;
        font-weight: 400;
        color: #333;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      }
      h1 {
        margin-top: 5px;
        font-size: 30px;
        font-weight: 800;
        color: #333;
      }
    }
    .box {
      height: 70px;
      width: 4px;
      background-color: rgb(11, 11, 137);
      margin-right: 20px;
    }
    .center {
      flex: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-size: 15px;
        font-weight: 400;
        color: rgb(146, 146, 158);
      }
    }
    .end {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 15px;
        font-weight: 400;
        color: rgb(146, 146, 158);
        cursor: pointer;
      }
    }
    .button {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .nav-button {
        width: 42px;
        height: 42px;
        transform: translateY(-50%);
        border-radius: 20px;
        padding: 10px;
        cursor: pointer;
      }

      .prev {
        left: 0;
      }

      .next {
        right: 0;
      }
    }
  }
  .carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%; /* 5张图片的总宽度加上4个间隙 */
    height: 400px;
    margin-top: 50px;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease;
  }
  .carousel-item:first-child {
    margin-left: 100px;
  }
  .carousel-item {
    min-width: 200px;
    height: 200px;
    margin-right: 120px; /* 设置图片之间的间隙 */
    overflow: hidden;
  }
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s;
  }
  .carousel-item img:hover {
    transform: scale(1.2); /* 放大图片 */
  }
  .introduce {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    top: 200px;
    h2 {
      font-size: 18px;
      font-weight: 600;
      font-family: '华文雅黑';
      margin-top: 20px;
    }
    .boxtow {
      border-left: 3px solid rgb(11, 11, 137);
      padding-left: 10px;
    }
    p {
      font-size: 13.5px;
      font-weight: 400;
      font-family: '宋体';
      letter-spacing: 0.05em; /* 设置字符间距 */
    }
    svg {
      position: absolute;
      top: 3px;
    }
  }
}
</style>
