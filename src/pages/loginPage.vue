<template>
  <div class="login-page">
    <a-card class="login-card">
      <a-tabs class="loginForm" v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="账号密码登录">
          <a-form
            :model="loginForm"
            ref="loginFormRef"
            name="basic"
            :rules="loginRules"
            style="margin-top: 20px"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              label="用户名"
              name="username"
            >
              <a-input v-model:value="loginForm.username" />
            </a-form-item>

            <a-form-item
              label="密码"
              name="password"
            >
              <a-input-password v-model:value="loginForm.password" />
            </a-form-item>
            <div class="submit">
              <a-checkbox v-model:checked="loginForm.remember"
                >Remember me</a-checkbox
              >
              <a-button
                style="margin-left: 60px"
                type="primary"
                html-type="submit"
                >登录</a-button
              >
            </div>

            <span style="font-size: 12px">如果当前账号不存在，将自动注册</span>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="2" tab="手机号登录" force-render>
          <a-form
            :model="registerForm"
            ref="registerFormRef"
            name="basic"
            style="margin-top: 20px"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="mobileFinish"
            @finishFailed="mobileFinishFailed"
          >
            <a-form-item
              label="手机号"
              name="mobile"
              :rules="registerRules.mobile"
            >
              <a-input v-model:value="registerForm.mobile" />
            </a-form-item>

            <a-form-item
              label="验证码"
              name="verify_code"
              :rules="[
                { required: true, message: '验证码不能为空', trigger: 'blur',},
              ]"
            >
              <a-input v-model:value="registerForm.verify_code" />
              <a-button :disabled="disabled" @click="handleClick" :style="{ cursor: disabled || countdown > 0 ? 'not-allowed' : 'pointer' }">{{
                countdown > 0 ? `${countdown}秒后重试` : "点击获取验证码"
              }}</a-button>
            </a-form-item>
            <div class="submit">
              <a-button
                style="margin-left: 60px"
                type="primary"
                html-type="submit"
                >登录</a-button
              >
            </div>

            <span style="font-size: 12px">如果当前账号不存在，将自动注册</span>
          </a-form>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script setup>
import { ref,unref } from "vue";
import { reactive } from "vue";
import { message } from 'ant-design-vue';
import { signIn, register, sendMsg, phoneLogin } from "../apis/loginApi";
const loginForm = reactive({
  username: "",
  password: "",
  remember: true,
});
const registerForm = reactive({
  mobile: "",
  verify_code: "",
});
const loginFormRef = ref();
const registerFormRef = ref();
const activeKey = ref("1");
const countdown = ref(0);
const disabled = ref(false);
let timer = null;

const handleClick = () => {
  disabled.value = true;
  countdown.value = 60;
  sendMsg(registerForm).then((res) => {
    console.log(registerForm.mobile);
    console.log(res);
    
  }).catch((err) => {
    
  });
  timer = setInterval(() => {
    countdown.value--;
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    disabled.value = false;
    countdown.value = 0;
  }, 60000);
};

const onFinish = (values) => {
   signIn(loginForm)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const mobileFinish = (values) => {
   phoneLogin(registerForm).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
}
const mobileFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
// 登录用户名校验
const loginName = (rule, value) => {
  if (value === "") {
     return Promise.reject("请输入用户名称");
  } else {
    if (value !== "") {
      var reg = /^[a-zA-Z]\w{5,7}$/;
      if (!reg.test(value)) {
      return Promise.reject("账号必须字母开头，长度6-8位");
      }
    }
  }
    return Promise.resolve()
};
const loginPassword = (rule, value) => {
  if (value === "") {
    return Promise.reject("请输入登录密码");
  } else {
    if (value !== "") {
      var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\S]{6,16}/;
      if (!reg.test(value)) {
       return Promise.reject("密码长度6-16位，且必须包含大小写字母和数字");
      }
    }
  }
    return Promise.resolve()
};
// 注册手机号校验
const registerMobile = (rule, value) => {
  if (value === "") {
    return Promise.reject("请输入手机号");
  } else {
    if (value !== "") {
      var reg =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (!reg.test(value)) {
        return Promise.reject("手机号格式错误");
      }
    }
  }
  return Promise.resolve()
};
const loginRules = reactive({
  username: [{ required: true, validator: loginName, trigger: "blur" }],
  password: [{ required: true, validator: loginPassword, trigger: "blur" }],
});
// 注册校验规则
const registerRules = reactive({
  mobile: [{ required: true, validator: registerMobile, trigger: "blur" }],
});

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
    }
  }
}
</style>