<template>
  <div class="home-page">
    <!-- <h1>使用成功</h1> -->
    <div class="headerModule">
      <div class="box">
        <a href="" class="logo"></a>
        <div class="nav">
          <ul class="clearfix">
            <li>
              <a href="">文章</a>
              </li>
            <li>
              <a href="">话题</a>
            </li>
          </ul>
        </div>
        <div class="header-search">
          <form action="search" method="get">
            <input type="text" name="keyword" value autocomplete="off" placeholder="搜索">
            <!-- <input type="text"> -->
            <SearchOutlined></SearchOutlined>
          </form>
        </div>
        <div class="menu">
          <ul class="clearfix">
            <li>
              <a href="" class="a-button">注册</a>
            </li>
            <li>
              <a href="" class="a-button">登录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
// , PlusOutlined 
import { SearchOutlined} from "@ant-design/icons-vue";
// eslint-disable-next-line no-unused-vars
import loginPage from '../pages/loginPage.vue'
import { defineComponent } from "vue";
// eslint-disable-next-line no-unused-vars
const MyComponent = defineComponent({
  components: {
    SearchOutlined,
    // PlusOutlined,
  },
});
</script>

<style lang = "scss">
.headerModule {
  background-color: #fff;
  box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.02), 0 4px 8px 0 rgba(0, 0, 0, 0.02);
  position: absolute;
  height: 60px;
  left: 0;
  top: 0;
  right: 0;
}
.headerModule   .box {
    height: 60px;
    line-height: 60px;
    width: 1210px;
    margin: 0 auto;
  }
.headerModule .box:before, .headerModule .box:after {
    clear: both;
    display: table;
    content: "";
    line-height: 0;
}
.headerModule .box .logo{
  float: left;
  margin-top: 10px;
}
.headerModule .box .nav {
  float: left;
  margin-left: 8px;
}
.headerModule .box .head-search {
    float: left;
    margin-left: 20px;
    position: relative;
    line-height: 49px;
}
.clearfix {
    zoom: 1;
}
.headerModule .box .nav ul li {
    float: left;
}
.headerModule .box .nav ul li a {
    display: block;
    margin-left: 25px;
    color: #272E3B;
    font-size: 16px;
}
.headerModule .box .header-search {
    float: left;
    margin-left: 20px;
    position: relative;
    line-height: 49px;
}
.headerModule .box .header-search form {
    width: 220px;
    height: 32px;
    background: #f2f3f5;
    border-radius: 3px;
    float: left;
    margin-top: 14px;
    position: relative;
}
.headerModule .box .header-search form input {
    width: 176px;
    height: 24px;
    /* *height: 50px; */
    line-height: 22px;
    background: none;
    border: none;
    padding-left: 12px;
    font-size: 14px;
    margin-top: 4px;
}
.headerModule .box .menu {
    float: right;
    margin-right: 8px;
}
.headerModule .box .menu ul li {
    float: left;
    font-size: 0;
}
.headerModule .box .menu ul li .a-button {
    color: #3491FA;
    outline: none;
    display: inline-block;
    padding: 1px 16px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    background: #E8F3FF;
    border-radius: 3px;
    margin: 0;
    margin-left: 15px;
    margin-top: 13px;
}
</style>