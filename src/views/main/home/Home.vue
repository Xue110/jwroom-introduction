<template>
  <div class="home">
    <div class="home-top">
      <h1>经纬工作室</h1>
      <canvas ref="canvas" class="message-canvas"></canvas>
      <el-dialog v-model="dialogStore.showAddMessageDialog" title="添加留言" width="500">
        <form @submit.prevent="addMessage">
          <el-form :model="messageForm" :rules="messageFormRules" label-width="80px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="messageForm.username" placeholder="用户名" required></el-input>
            </el-form-item>
            <el-form-item label="留言内容" prop="message">
              <el-input v-model="messageForm.messageText" placeholder="留言" required></el-input>
            </el-form-item>
            <el-form-item label="字体" prop="font">
              <el-input v-model="messageForm.fontName" placeholder="字体 (默认 Arial)"></el-input>
            </el-form-item>
            <el-form-item label="颜色" prop="color">
              <el-input v-model="messageForm.fontColor" type="color" placeholder="颜色"></el-input>
            </el-form-item>
          </el-form>
        </form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogStore.closeAddMessageDialog()">取消</el-button>
            <el-button type="primary" @click="addMessage">添加留言</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
    <recently />
    <team-member />
    <WorkShow />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useDialogStore } from '@/store/dialog'
import recently from './c-cpns/recently.vue'
import TeamMember from './c-cpns/TeamMember.vue'
import WorkShow from './c-cpns/WorksShow.vue'
const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null

const messages = ref<
  { username: string; messageText: string; fontName: string; fontColor: string }[]
>([
  { username: '用户1', messageText: '这是第一条留言', fontName: 'Arial', fontColor: 'red' },
  { username: '用户2', messageText: '这是第二条留言', fontName: 'Arial', fontColor: 'blue' },
  { username: '用户3', messageText: '这是第三条留言', fontName: 'Arial', fontColor: 'green' },
  { username: '用户4', messageText: '这是第四条留言', fontName: 'Arial', fontColor: 'purple' },
  { username: '用户5', messageText: '这是第五条留言', fontName: 'Arial', fontColor: 'orange' }
])

const dialogStore = useDialogStore()

const defaultFontSize = '20px'
const defaultFont = 'Arial'
const messagePositions: { x: number; y: number; speed: number }[] = []

const messageForm = ref({
  username: '',
  messageText: '',
  fontName: '',
  fontColor: ''
})

const messageFormRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  messageText: [{ required: true, message: '请输入留言内容', trigger: 'blur' }]
}
const addMessage = () => {
  const { username, messageText, fontName, fontColor } = messageForm.value
  messages.value.push({ username, messageText, fontName, fontColor })
  dialogStore.closeAddMessageDialog()
  messageForm.value = {
    username: '',
    messageText: '',
    fontName: '',
    fontColor: ''
  }
  drawMessages()
}

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d')
    if (ctx) {
      canvas.value.width = 1600
      canvas.value.height = 800
      drawMessages()
    }
  }
})

function drawMessages() {
  if (!ctx || !canvas.value) return

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  messages.value.forEach((message, i) => {
    const { username, messageText, fontName, fontColor } = message
    let messagePosition = messagePositions[i]

    if (!messagePosition) {
      messagePosition = {
        x: canvas.value.width,
        y: Math.random() * canvas.value.height,
        speed: Math.random() * 2 + 1
      }
      messagePositions[i] = messagePosition
    }

    const font = `${defaultFontSize} ${fontName || defaultFont}`
    ctx.fillStyle = fontColor || 'white'
    ctx.font = font
    ctx.fillText(`${username}: ${messageText}`, messagePosition.x, messagePosition.y)

    messagePosition.x -= messagePosition.speed

    if (messagePosition.x < -ctx.measureText(`${username}: ${messageText}`).width) {
      messagePosition.x = canvas.value.width
      messagePosition.speed = Math.random() * 2 + 1
    }
  })

  if (messages.value.length > 0) {
    requestAnimationFrame(drawMessages)
  }
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
  display: block;
  position: relative;
  top: -190px;
}

form {
  margin-top: 20px;
}

input,
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
}
</style>
