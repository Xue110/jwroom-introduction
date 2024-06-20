<template>
  <div class="join">
    <div class="text">
      <h1>加入我们</h1>
      <h2>Join us Jingwei Studio</h2>
    </div>
    <div class="main">
      <div class="join-form">
        <el-form
          ref="ruleFormRef"
          style="max-width: 600px"
          :model="ruleForm"
          :rules="rules"
          label-width="auto"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-select v-model="ruleForm.gender" placeholder="请选择您的性别">
              <el-option label="男" value="男" />
              <el-option label="女" value="女" />
            </el-select>
          </el-form-item>
          <el-form-item label="专业班级" prop="class">
            <el-input v-model="ruleForm.class" />
          </el-form-item>
          <el-form-item label="出生日期" prop="date" required>
            <el-date-picker
              v-model="ruleForm.date"
              type="date"
              aria-label="Date"
              placeholder="请选择您的出生日期"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone" />
          </el-form-item>
          <el-form-item label="家庭住址" prop="place">
            <el-input v-model="ruleForm.place" />
          </el-form-item>
          <el-form-item label="爱好" prop="hobby">
            <el-checkbox-group v-model="ruleForm.hobby">
              <el-checkbox value="游戏" name="type"> 游戏 </el-checkbox>
              <el-checkbox value="运动" name="type"> 运动 </el-checkbox>
              <el-checkbox value="代码" name="type"> 代码 </el-checkbox>
              <el-checkbox value="美食" name="type"> 美食 </el-checkbox>
              <el-checkbox value="阅读" name="type"> 阅读 </el-checkbox>
              <el-checkbox value="唱歌" name="type"> 唱歌 </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="个人简介" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" placeholder="请简单介绍一下自己" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"> 提交 </el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <hr class="hrs" />
        <div class="colur cv2">
          <p>
            经纬<br /><svg
              t="1713607806298"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4495"
              width="80"
              height="80"
            >
              <path
                d="M964.806615 657.203202a468.531727 468.531727 0 0 0 10.04794-97.176607 452.296861 452.296861 0 0 0-26.934062-155.417444 478.533149 478.533149 0 0 0-74.429186-132.902616 465.508041 465.508041 0 0 0-207.564393-147.648898 157.789875 157.789875 0 0 0-307.671648-1.488584A465.833669 465.833669 0 0 0 235.167999 186.392081a472.578814 472.578814 0 0 0-101.177175 99.781627 463.833385 463.833385 0 0 0-90.245388 274.457624 455.878765 455.878765 0 0 0 10.745713 100.200292 156.673437 156.673437 0 0 0 103.410051 275.434508H158.412901a159.464531 159.464531 0 0 0 61.636669-12.513407A466.577961 466.577961 0 0 0 509.811696 1023.999535a467.601362 467.601362 0 0 0 290.552936-101.456285 154.347525 154.347525 0 0 0 65.125538 13.955473 156.719955 156.719955 0 0 0 99.316445-279.295521zM228.190263 778.801885a71.591573 71.591573 0 0 1-70.8938 70.382099 70.428617 70.428617 0 1 1 0-140.810717A71.591573 71.591573 0 0 1 228.190263 778.801885z m87.035629 0a157.603802 157.603802 0 0 0-158.16202-156.906029 181.421141 181.421141 0 0 0-21.910092 1.302511 383.868528 383.868528 0 0 1-5.256561-63.171772 373.029778 373.029778 0 0 1 233.382017-347.630817A156.952546 156.952546 0 0 0 511.951535 314.317244a157.371211 157.371211 0 0 0 147.183716-100.432883A375.402208 375.402208 0 0 1 884.097466 622.500594a171.001055 171.001055 0 0 0-17.583895-0.604738 157.603802 157.603802 0 0 0-158.162021 156.85951 154.301007 154.301007 0 0 0 25.585033 85.45401 376.053463 376.053463 0 0 1-224.217923 72.614974h-0.325628a383.635937 383.635937 0 0 1-220.775574-70.428617 154.068415 154.068415 0 0 0 26.841026-87.593848z m550.217759-69.777363a71.591573 71.591573 0 0 1 70.8938 70.428618 70.8938 70.8938 0 0 1-141.834118 0A71.591573 71.591573 0 0 1 865.49017 709.071041zM511.951535 228.537607a70.800763 70.800763 0 1 1 70.8938-71.126391A70.754245 70.754245 0 0 1 511.951535 228.537607z"
                p-id="4496"
                fill="rgb(0, 100, 206)"
              ></path>
            </svg>
            <span>工作室</span>
          </p>
          <p><i>--时间不会辜负每一个向前奔跑的人</i></p>
          <video
            src="../../../assets/img/hh.mp4"
            autoplay
            loop
            muted
            class="vid"
            disablePictureInPicture
            controlsList="nodownload noremoteplayback nofullscreen noplaybackrate"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, type ComponentSize, type FormInstance, type FormRules } from 'element-plus'
import useJointore from '@/store/main/join/join'
import { formatUTC } from '@/utils/format'

interface RuleForm {
  name: ''
  gender: ''
  class: ''
  phone: ''
  place: ''
  hobby: string[]
  desc: ''
  date: ''
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  gender: '',
  class: '',
  phone: '',
  place: '',
  hobby: [],
  desc: '',
  date: ''
})

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
  gender: [{ required: true, message: '请选择您的性别', trigger: 'change' }],
  class: [{ required: true, message: '请选择您的班级', trigger: 'change' }],
  phone: [
    { required: true, message: '请输入您的手机号', trigger: 'blur' },
    { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  place: [{ required: true, message: '请输入您的家庭住址', trigger: 'blur' }],
  hobby: [{ required: false, message: '请选择您的爱好', trigger: 'change' }],
  desc: [{ required: true, message: '请简单介绍一下自己', trigger: 'blur' }],
  date: [{ required: false, message: '请选择您的生日', trigger: 'change' }]
})

const useStore = useJointore()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', ruleForm)
      useStore.fetchJoinDataAction(ruleForm)
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('请填写完整信息')
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="less" scoped>
.join {
  height: 86vh;
  width: 100vw;
  padding-top: 4px;
  margin: -20px;
  background-image: url('@/assets/img/join.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
  .text {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    h1 {
      font-size: 80px;
    }
    h2 {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      margin-top: -40px;
      font-size: 25px;
    }
  }
  .main {
    display: flex;
    justify-content: center;
    .join-form {
      flex: 1;
      display: flex;
      margin-left: 200px;
      margin-top: 20px;
      .el-form {
        .el-form-item {
          width: 500px;
          ::v-deep .el-form-item__label,
          ::v-deep .el-checkbox__label {
            font-family: '宋体';
            font-weight: 600;
            color: #fff;
          }
          .el-form-item__content {
            .el-input {
              .el-input__wrapper {
                background-color: #fff;
              }
            }
            .el-textarea {
              .el-textarea__inner {
                background-color: #fff;
              }
            }
          }
        }
      }
    }
    .right {
      flex: 1;
      .colur {
        position: relative;
        height: 435px;
        width: 600px;
      }
      .cv2 {
        right: 20px;
      }
      .cv2 p:nth-child(1) {
        font-size: 100px;
        font-weight: 1000px;
        color: white;
        letter-spacing: 10px;
      }
      .cv2 p:nth-child(1) span {
        position: relative;
        left: 120px;
      }
      .icon {
        position: absolute;
        left: 20px;
        top: 130px;
      }
      .cv2 p:nth-child(2) {
        position: absolute;
        top: 85px;
        right: 60px;
        color: white;
        font-size: 20px;
      }
      .vid {
        position: absolute;
        top: 245px;
        left: -160px;
        width: 800px;
        height: 250px;
      }
      /* 隐藏视频控件 */
      .vid::-webkit-media-controls,
      .vid::-webkit-media-controls-enclosure,
      .vid::-webkit-media-controls-panel,
      .vid::-webkit-media-controls-play-button,
      .vid::-webkit-media-controls-current-time-display,
      .vid::-webkit-media-controls-time-remaining-display,
      .vid::-webkit-media-controls-timeline,
      .vid::-webkit-media-controls-volume-slider,
      .vid::-webkit-media-controls-mute-button,
      .vid::-webkit-media-controls-fullscreen-button,
      .vid::-webkit-media-controls-track-list,
      .vid::-webkit-media-controls-seek-back-button,
      .vid::-webkit-media-controls-seek-forward-button,
      .vid::-webkit-media-controls-rewind-button,
      .vid::-webkit-media-controls-return-to-realtime-button,
      .vid::-webkit-media-controls-pip-button {
        display: none !important;
      }
      .hrs {
        position: absolute;
        top: 58%;
        transform: translateY(-50%);
        height: 400px;
        left: 49%;
        color: rgb(223, 223, 223);
      }
    }
  }
}
</style>
