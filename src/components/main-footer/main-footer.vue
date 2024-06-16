<!-- Footer.vue -->
<template>
  <div class="footer">
    <div class="footer-content">
      <div>
        <img width="20%" src="@/assets/img/LOGO2.png" alt="经纬" />
      </div>
      <div class="approval-number">
        <span><img style="width: 15px" src="@/assets/img/police.png" alt="" /> 吉公网安备：</span>
        <span>{{ approvalNumber }}</span>
      </div>
      <div>© 2024 北华大学经纬工作室 版权所有</div>
      <div>技术支持：经纬工作室 润石工作室</div>
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
  font-size: 12px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
