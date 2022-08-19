<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        v-model.number="user.mobile"
        name="mobile"
        placeholder="手机号"
        :rules="userFormRules.mobile"
      >
        <!-- 手机图标的slot使用 -->
        <template #left-icon>
          <i class="toutiao toutiao-shouji icon"></i>
        </template>
      </van-field>

      <van-field
        v-model="user.code"
        name="code"
        placeholder="验证码"
        :rules="userFormRules.code"
      >
        <!-- 手机图标的slot使用 -->
        <template #left-icon>
          <i class="toutiao toutiao-yanzhengma icon"></i>
        </template>
        <template #button>
          <van-count-down
            v-if="isCountShow"
            :time="1000 * 30"
            format="ss s"
            @finish="isCountShow = false"
          />
          <van-button
            v-else
            size="small"
            type="default"
            class="send-btn"
            @click="onSendSms"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-div">
        <van-button class="login-btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
  import { login } from "@/api/user.js";
  import { mobile } from "@/api/mobile.js";

  export default {
    name: "LoginIndex",
    data() {
      return {
        user: {
          mobile: "",
          code: "",
        },
        userFormRules: {
          mobile: [
            { required: true, message: "请填写手机号" },
            { pattern: /^1[3|5|7|8]\d{9}$/, message: "手机号格式错误" },
          ],
          code: [
            { required: true, message: "请填写验证码" },
            { pattern: /^\d{6}$/, message: "验证码格式错误" },
          ],
        },
        isCountShow: false, //倒计时是否显示
      };
    },
    methods: {
      async onSubmit() {
        try {
          let res = await login(this.user);
          this.$store.commit("setUser", res.data.data.token); //保存token到vuex中
          this.$toast.success("登录成功");
          this.$router.push("/my");
        } catch (e) {
          this.$toast.success("登录失败");
        }
      },
      async onSendSms() {
        try {
          // 校验验证码
          await this.$refs.loginForm.validate("mobile");
          console.log("成功");
        } catch (e) {
          return console.log("验证失败:", e);
        }

        this.isCountShow = true;
        // 发送验证码
        try {
          let res = await mobile(this.user.mobile);
          console.log("成功", res);
        } catch (e) {
          // 发送失败就关闭倒计时
          this.isCountShow = false;
          console.log("校验失败");
        }
      },
      
    },
  };
</script>

<style lang="less">
  .login {
    .page-nav-bar {
      background-color: #3296fa;

      .van-nav-bar__title {
        color: #fff;
      }
    }
    .icon {
      font-size: 0.4625rem;
    }
    .send-btn {
      background: #ededed;
      color: #666;
    }

    .login-div {
      margin: 0.6625rem 0.4125rem;

      .login-btn {
        background: #6db4fb;
        border: none;
        color: #fff;
      }
    }
  }
</style>