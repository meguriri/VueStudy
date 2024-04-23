<template>
  <el-affix>
    <el-menu
      class="menu"
      mode="horizontal"
      :ellipsis="false"
    >
      <el-menu-item index="0">
        <h1 class="menu-title">小清单</h1>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">
        <el-text type="info"><h3>登录</h3></el-text>
      </el-menu-item>
      <el-menu-item index="2">
        <el-text type="info"><h3>注册</h3></el-text>
      </el-menu-item>
      <el-sub-menu index="3">
        <template #title><el-text type="info"><h3>用户</h3></el-text></template>
        <el-menu-item index="3-1"><el-text>个人信息</el-text></el-menu-item>
        <el-menu-item index="3-2"><el-text>登出</el-text></el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-affix>
</template>

<script setup>
  
</script>

<style>
.menu-title{
  color:rgb(245, 179, 214);
}
.flex-grow {
  flex-grow: 1;
}
</style>
