<template>
  <div class="teacher">
    <div class="text">
      <h1>李红果老师</h1>
      <p>
        李红果，副教授，1969年5月出生，1992年本科毕业于北京大学力学系后，进入北华大学开始高校的教学工作，后于北大软件与微电子学院取得软件工程硕士学位，主修IT企业项目管理、IT项目决策与运营管理，擅长网络系统规划与设计、网络应用系统部署与维护，主持和参与省市校各级科研教研项目多项，主要承担网络工程专业导航、计算机网络基础、网络互联技术、网络操作系统与服务管理等本科专业课程的授课任务，授课中注重培养学生的自主学习能力，加速学生的自我成长，关心学生的学习与生活，具有良好的师生关系。
      </p>
      <div class="img">
        <img
          src="https://csc.beihua.edu.cn/__local/F/56/28/3E7F0EEE8F7199675EFF2B8066D_52594155_67F2C.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.teacher {
  display: flex;
  justify-content: space-around;
  .text {
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    margin-top: 100px;
    width: 90%;
    height: 500px;
    background-color: white;
    padding: 50px;
    box-shadow: 0 0 10px #ccc;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    h1 {
      font-size: 35px;
      font-weight: 700;
      text-align: center;
      font-family: '楷体';
      margin-top: 80px;
    }
    p {
      font-size: 20px;
      line-height: 30px;
      text-indent: 2em;
      font-family: '楷体';
      margin-left: 50px;
      margin-top: 100px;
    }
    .img {
      margin-left: 30px;
      width: 80%;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: 80%;
        margin-top: 30px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .text {
      width: 100%;
    }
    .img {
      width: 100%;
    }
  }
  @media screen and (max-width: 414px) {
    .text {
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 12px;
      }
    }
    .img {
      img {
        width: 100%;
      }
    }
  }
}
</style>
