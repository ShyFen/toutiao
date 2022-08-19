<template>
  <div class="index">
    <!-- 子路由出口 -->
    <router-view></router-view>

    <!-- 底部标签栏 -->
    <van-tabbar class="index-tabbar" route>
      <van-tabbar-item
        class="index-tabbar-item"
        v-for="item in data"
        :key="item.id"
        :to="item.routerUrl"
        :icon="item.icon"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "layout",
    data() {
      return {
        data: [
          {
            id: 1,
            title: "首页",
            routerUrl: "/",
            icon: "home-o",
          },
          {
            id: 2,
            title: "问答",
            routerUrl: "/request",
            icon: "comment-circle-o",
          },
          {
            id: 3,
            title: "视频",
            routerUrl: "/video",
            icon: "video-o",
          },
          {
            id: 4,
            title: "我的",
            routerUrl: "/my",
            icon: "user-o",
          },
        ],
      };
    },
  };
</script>

<style lang="less" scoped>
</style>