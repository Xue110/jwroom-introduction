<!-- Footer.vue -->
<template>
  <div class="footer">
    <div class="footer-content">
      <div>
        <img width="20%" src="@/assets/img/LOGO2.png" alt="经纬" />
      </div>
      <div class="approval-number">
        <span>网站备案号：</span>
        <span>{{ approvalNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const approvalNumber = ref('吉ICP备2024015968号')
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  align-items: center;
}
</style>
