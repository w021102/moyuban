<template>
  <div class="login-page">
    <a-card class="login-card">
      <a-tabs class="loginForm" v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="账号密码登录">
          <a-form
            :model="formState"
            name="basic"
            style="margin-top:20px"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              label="用户名"
              name="username"
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item
              label="密码"
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password v-model:value="formState.password" />
            </a-form-item>
            <div class="submit">
              <a-checkbox v-model:checked="formState.remember"
                >Remember me</a-checkbox
              >
              <a-button style="margin-left:60px" type="primary" html-type="submit">登录</a-button>
            </div>

            <span style="font-size: 12px">如果当前账号不存在，将自动注册</span>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="2" tab="手机号登录" force-render>
             <a-form
            :model="formState"
            name="basic"
            style="margin-top:20px"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              label="手机号"
              name="username"
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item
              label="验证码"
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input v-model:value="formState.password" />
              <a-button>获取验证码</a-button>
            </a-form-item>
            <div class="submit">
              <a-checkbox v-model:checked="formState.remember"
                >Remember me</a-checkbox
              >
              <a-button style="margin-left:60px" type="primary" html-type="submit">登录</a-button>
            </div>

            <span style="font-size: 12px">如果当前账号不存在，将自动注册</span>
          </a-form>
           </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { reactive } from "vue";
const activeKey = ref("1");
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>
<style lang="scss">
.login-page {
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  .login-card {
    // width: 100%;
    margin: 40px 20px 0 20px;
    box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.03), 0 4px 8px 0 rgba(0, 0, 0, 0.03);
    .loginForm {
      width: 400px;
      margin: 0 auto;
      // .submit{
      //   display: flex;
      //     justify-content: space-between;
      //     margin: 0 20px;
      // }
    }
  }
}
</style>