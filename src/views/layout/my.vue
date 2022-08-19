<template>
  <div class="my">
    <div v-if="user" class="banner login">
      <div class="login-top">
        <div class="login-left">
          <van-image class="img" round fit="cover" :src="userInfo.photo" />
          <span>{{ userInfo.name }}</span>
        </div>
        <div class="login-right">
          <van-button>编辑资料</van-button>
        </div>
      </div>
      <div class="login-bottom">
        <div v-for="item in list" :key="item.id" class="login-item">
          <div class="num">{{ item.num }}</div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div v-else class="banner no-login" @click="$router.push('/login')">
      <div class="no-login-img">
        <img src="~@/assets/mobile.png" alt="" />
      </div>
      <div class="no-login-text">登录/注册</div>
    </div>

    <van-grid :column-num="2" clickable class="grid">
      <van-grid-item icon="like-o" text="收藏" />
      <van-grid-item icon="clock-o" text="历史" />
    </van-grid>

    <van-cell-group class="cell-group">
      <van-cell title="消息通知" is-link />
      <van-cell title="小智同学" is-link class="cell-fri" />
      <van-cell
        v-if="user"
        title="退出登录"
        class="cell-login"
        @click="closeLogin"
      />
    </van-cell-group>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import { getUserInfo } from "@/api/getUserInfo.js";
  export default {
    data() {
      return {
        isLogin: false,
        list: [
          {
            id: 1,
            num: 112,
            title: "头条",
          },
          {
            id: 2,
            num: 122,
            title: "关注",
          },
          {
            id: 3,
            num: 132,
            title: "粉丝",
          },
          {
            id: 4,
            num: 142,
            title: "获赞",
          },
        ],
        userInfo: null,
      };
    },
    created() {
      if (this.user) this.loginUserInfo(this.user);
    },
    methods: {
      // 退出登录
      closeLogin() {
        this.$dialog
          .confirm({
            title: "确认退出吗？",
          })
          .then(() => {
            // 更新vuex中的数据
            this.$store.commit("setUser", null);
            console.log("确认");
          })
          .catch(() => {
            console.log("取消");
          });
      },
      // 显示用户信息
      async loginUserInfo(user) {
        try {
          let data = await getUserInfo(user);
          let userData = data.data.data;
          this.userInfo = userData;
        } catch (e) {
          console.log("失败：", e);
        }
      },
    },
    computed: {
      ...mapState(["user"]),
    },
  };
</script>

<style lang="less" scoped>
  .my {
    .banner {
      height: 4.5125rem;
      background-image: url(~@/assets/banner.png);
      background-size: cover;
    }
    .no-login {
      height: 4.5125rem;
      width: 100%;
      display: flex;
      justify-content: center; //垂直居中
      flex-direction: column; //改变方向
      align-items: center; //水平居中
      .no-login-img {
        width: 1.65rem;
        height: 1.65rem;
        margin-bottom: 0.1875rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .no-login-text {
        font-size: 0.35rem;
        color: #fff;
      }
    }
    .login {
      height: 4.5125rem;
      width: 100%;
      display: flex;
      flex-direction: column;

      .login-top {
        height: 2.8875rem;
        width: 100%;
        padding: 0.95rem 0.4rem 0.2875rem;
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .login-left {
          display: flex;
          align-items: center;
          .img {
            width: 1.65rem;
            height: 1.65rem;
            border: 0.025rem solid #fff;
          }
          span {
            font-size: 0.375rem;
            color: #fff;
            margin-left: 0.2875rem;
          }
        }
      }

      .login-bottom {
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;

        .login-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .num {
            font-size: 0.45rem;
          }

          .title {
            font-size: 0.2875rem;
          }
        }
      }
    }
    .grid {
      margin-bottom: 0.025rem;
    }
    .cell-group {
      .cell-login {
        text-align: center;
        color: #d86262;
      }
    }
  }
</style>