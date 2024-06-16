<template>
  <div class="works-show">
    <div class="top">
      <h2>EXHIBITION OF WORKS</h2>
      <h1>作品展示</h1>
      <p>
        经纬工作室自2004年创立以来，工作室成员运用自身技术，创造出了很多作品，例如北华大学计算机学院官网、文学院、法学院官网等，以及一些五子棋，贪吃蛇，扫雷，植物大战僵尸(改良版)、黄金矿工等游戏，同时也创作出了3D相册、记账本等
      </p>
    </div>
    <div class="main">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <p @click="$router.push('/homework')">查看更多</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.works-show {
  width: 100%;
  height: 650px;
  background-color: rgb(242, 243, 249);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .top {
    flex: 1;
    width: 80%;
    height: 300px;
    background-color: rgb(242, 243, 249);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 20px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: 400;
    }
    h1 {
      font-size: 30px;
      font-weight: 600;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    p {
      width: 40%;
      text-align: center;
      font-size: 13px;
      color: rgb(146, 146, 146);
      line-height: 1.5;
    }
  }
  .main {
    flex: 3;
    width: 80%;
    margin-top: 80px;
    text-align: center;
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
    p {
      width: 100px;
      font-size: 15px;
      color: rgb(146, 146, 146);
      cursor: pointer;
      margin: auto;
      margin-top: 20px;
    }
  }
}
</style>
