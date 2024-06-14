<template>
  <div class="home">
    <div class="home-top">
      <h1>经纬工作室</h1>
      <canvas ref="canvas" class="message-canvas"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d')
    if (ctx) {
      startScroll()
    }
  }
})

function startScroll() {
  const messages = [
    '这是第一条留言',
    '这是第二条留言',
    '这是第三条留言',
    '这是第四条留言',
    '这是第五条留言'
  ]

  let yPos = 100 // 初始留言的垂直位置
  const scrollSpeed = 1 // 滚动速度

  function drawMessages() {
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height)

    ctx.font = '20px Arial'
    ctx.fillStyle = 'black'

    messages.forEach((message, index) => {
      const y = yPos + index * 30 // 每条留言之间的垂直间隔
      ctx.fillText(message, 10, y)
    })

    yPos -= scrollSpeed

    // 当第一条留言超出画布时，将其移到最后一条留言之后
    const messageHeight = 30 // 留言高度
    if (yPos < -messageHeight) {
      yPos = messages.length * messageHeight
    }

    requestAnimationFrame(drawMessages)
  }

  drawMessages()
}
</script>

<style scoped>
.home {
  height: 100%;
}

.home-top {
  background: url(../../..//assets/img/bg4.png) no-repeat center center;
  background-size: cover;
  position: relative;
  top: -85px;
  height: 800px;
  width: 1650px;
  text-align: center;
}

h1 {
  background: linear-gradient(to right, #ff7e5f, #feb47b, #ffdb6a);
  background-clip: text;
  color: transparent;
  font-size: 100px;
  position: relative;
  top: 50px;
  font-style: italic;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Pacifico', cursive;
}

.message-canvas {
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  height: 200px; /* 调整画布高度 */
}
</style>
