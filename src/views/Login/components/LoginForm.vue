<template>
  <el-form
    ref="ruleLogin"
    :model="loginUser"
    :rules="rules"
    class="loginForm"
  >
    <el-form-item prop="username">
      <el-input
        v-model="loginUser.username"
        placeholder="请输入用户名"
        clearable
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="请输入用户密码"
        clearable
        show-password
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm(ruleLogin)"
        class="submit-btn"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleLogin = ref<FormInstance>()

const loginUser = reactive({
  username: '',
  password: ''
})

const rules = reactive({
  username: [{ type: 'email', required: true, message: '用户名格式不正确', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }, { min: 6, max: 30, message: '密码长度 6-30', trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
<style lang="less" scoped>
.loginForm{
  width: 80%;
  margin: 20px auto;
}
.submit-btn{
  width: 100%;
}
</style>
