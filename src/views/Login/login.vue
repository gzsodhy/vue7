<template>
  <div class="page-account">
    <div class="layout-container">
      <div class="form-main">
        <LoginForm />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { LoginForm } from './components'
</script>
<style lang="less" scoped>
.page-account {
  position: relative;
  background: #fff;
  margin: 0 auto;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #fafafa;
}

.layout-container {
  margin-top:200px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1056px;
  height: 100%;
}

.form-main {
  width: 400px;
  background-color: #fff;
  padding: 46px 8px 48px;
  padding-top: 30px;
  margin-bottom: 12px;
  border-radius: 8px;
  min-height: 540px;
  position: relative;
  border: 0.5px solid #eff0f0;
  -webkit-box-shadow: 0 8px 32px 0 rgb(216 218 217 / 60%);
  box-shadow: 0 8px 32px 0 rgb(216 218 217 / 60%);
}
</style>
